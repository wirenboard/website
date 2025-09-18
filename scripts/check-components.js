import path from 'path';
import { parse } from '@vue/compiler-sfc';
import fg from 'fast-glob';
import fs from 'fs-extra';
import ts from 'typescript';

const contentDir = 'content';
const componentsDir = 'components';
const mdcRegex = /^\s*:{1,3}([A-Za-z0-9-]+)(?:\{([^}]*)\})?/gm;
const projectRoot = process.cwd();

const colors = {
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
  reset: '\x1b[0m',
};

function clickableLink(filePath) {
  const absFile = path.resolve(filePath);
  const relFile = path.relative(projectRoot, absFile);
  const url = `file://${absFile}`;
  return `${colors.blue}\u001b]8;;${url}\u001b\\${relFile}\u001b]8;;\u001b\\${colors.reset}`;
}

export async function checkComponents() {
  const files = await fg(`${contentDir}/**/*.md`);
  const errors = [];
  const warnings = [];

  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    const matches = [...content.matchAll(mdcRegex)];

    for (const match of matches) {
      const rawName = match[1];
      const propsString = match[2] || '';
      const componentName = toPascalCase(rawName);

      const vueFiles = await fg(`${componentsDir}/**/${componentName}.vue`);
      if (vueFiles.length === 0) {
        errors.push(
          `${clickableLink(file)}\n  - ${colors.red}${componentName}${colors.reset}: [NOT FOUND] :${rawName}`
        );
        continue;
      }

      const vueContent = await fs.readFile(vueFiles[0], 'utf-8');
      const { descriptor } = parse(vueContent);

      const script = descriptor.scriptSetup?.content || descriptor.script?.content || '';
      const aliasMap = new Map();
      await collectAliases(script, aliasMap, path.dirname(vueFiles[0]));

      const props = extractPropsWithAliases(script, aliasMap);
      const passedProps = parsePropsString(propsString);

      for (const [prop, value] of Object.entries(passedProps)) {
        if (!props[prop]) {
          errors.push(
            `${clickableLink(file)}\n  - ${colors.red}${componentName}${colors.reset}: [UNKNOWN PROP] "${prop}"`
          );
          continue;
        }

        if (typeof value === 'object' && value.__rawExpression) {
          warnings.push(
            `${clickableLink(file)}\n  - ${colors.yellow}${componentName}${colors.reset}: [SKIP TYPE CHECK] "${prop}"`
          );
          continue;
        }

        const resolvedType = props[prop].resolved;

        if (!validateType(value, props[prop].type)) {
          errors.push(
            `${clickableLink(file)}\n  - ${colors.red}${componentName}${colors.reset}: [TYPE MISMATCH] "${prop}" ожидает ${resolvedType}, получено "${JSON.stringify(value)}"`
          );
        }
      }

      for (const [propName, info] of Object.entries(props)) {
        if (info.required && !(propName in passedProps)) {
          errors.push(
            `${clickableLink(file)}\n  - ${colors.red}${componentName}${colors.reset}: [MISSING REQUIRED PROP] "${propName}"`
          );
        }
      }
    }
  }

  return { errors, warnings };
}

function toPascalCase(name) {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

async function collectAliases(script, aliasMap, baseDir) {
  const sourceFile = ts.createSourceFile('component.ts', script, ts.ScriptTarget.ESNext, true);

  for (const stmt of sourceFile.statements) {
    if (ts.isTypeAliasDeclaration(stmt)) {
      aliasMap.set(stmt.name.text, stmt.type.getText(sourceFile));
    }

    if (ts.isImportDeclaration(stmt) && stmt.importClause?.isTypeOnly) {
      const modulePath = stmt.moduleSpecifier.getText(sourceFile).replace(/['"]/g, '');
      const resolvedPath = resolveImportPath(modulePath, baseDir);
      if (resolvedPath && fs.existsSync(resolvedPath)) {
        const importedTypes = await parseTypeFile(resolvedPath);
        for (const [k, v] of importedTypes) {
          if (!aliasMap.has(k)) aliasMap.set(k, v);
        }
      }
    }
  }
}

async function parseTypeFile(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.ESNext, true);
  const map = new Map();

  function visit(node) {
    if (ts.isTypeAliasDeclaration(node)) {
      map.set(node.name.text, node.type.getText(sourceFile));
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return map;
}

function resolveImportPath(modulePath, baseDir) {
  if (modulePath.startsWith('~/')) {
    return path.resolve(projectRoot, modulePath.replace(/^~\//, '')) + '.ts';
  }
  if (modulePath.startsWith('.')) {
    return path.resolve(baseDir, modulePath) + '.ts';
  }
  return null;
}

function extractPropsWithAliases(script, aliasMap) {
  const sourceFile = ts.createSourceFile('component.ts', script, ts.ScriptTarget.ESNext, true);
  let props = {};

  function visit(node) {
    if (ts.isCallExpression(node) && node.expression.getText(sourceFile) === 'defineProps') {
      if (node.typeArguments?.length) {
        const typeArg = node.typeArguments[0];
        if (ts.isTypeLiteralNode(typeArg)) {
          for (const member of typeArg.members) {
            if (ts.isPropertySignature(member)) {
              const name = member.name.getText(sourceFile);
              const isRequired = !member.questionToken;
              const originalType = member.type?.getText(sourceFile) || 'any';
              const resolvedType = resolveType(originalType, aliasMap);
              props[name] = {
                type: splitUnion(resolvedType),
                original: originalType,
                resolved: resolvedType,
                required: isRequired,
              };
            }
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return props;
}

function resolveType(typeText, aliasMap, depth = 0) {
  if (depth > 20) return typeText;

  let result = typeText.trim();

  if (result.startsWith('(') && result.endsWith(')')) {
    result = result.slice(1, -1).trim();
  }

  if (aliasMap.has(result)) {
    return resolveType(aliasMap.get(result), aliasMap, depth + 1);
  }

  if (/^[A-Z][A-Za-z0-9_]*$/.test(result)) {
    return 'string';
  }

  if (result.endsWith('[]')) {
    const base = result.slice(0, -2);
    return `${resolveType(base, aliasMap, depth + 1)}[]`;
  }

  if (result.startsWith('[') && result.endsWith(']')) {
    const inner = result.slice(1, -1);
    const parts = inner.split(',').map(p => resolveType(p.trim(), aliasMap, depth + 1));
    return `[${parts.join(', ')}]`;
  }

  if (result.includes('|')) {
    return result
      .split('|')
      .map(p => resolveType(p.trim(), aliasMap, depth + 1))
      .join(' | ');
  }

  return result;
}

function validateType(value, expectedTypes) {
  for (const t of expectedTypes) {
    if (/^'.*'$/.test(t) && value === t.replace(/'/g, '')) return true;
    if (t === 'string' && typeof value === 'string') return true;
    if (t === 'number' && !isNaN(Number(value))) return true;
    if (t === 'boolean' && (value === 'true' || value === 'false')) return true;
    if (t === 'null' && value === 'null') return true;

    if (t.endsWith('[]')) {
      if (!Array.isArray(value)) return false;
      const innerType = t.replace(/\[\]$/, '').trim();

      if (innerType.startsWith('[') && innerType.endsWith(']')) {
        return value.every(item => validateTupleOrType(item, innerType));
      }

      if (innerType.includes('|')) {
        const variants = splitUnion(innerType);
        return value.every(item =>
          variants.some(v =>
            v.startsWith('[') && v.endsWith(']')
              ? validateTupleOrType(item, v)
              : validateType(item, [v])
          )
        );
      }

      return value.every(item => validateType(item, [innerType]));
    }

    if (t.startsWith('[') && t.endsWith(']')) {
      return validateTupleOrType(value, t);
    }
  }
  return false;
}

function validateTupleOrType(value, typeDef) {
  if (typeDef.startsWith('[') && typeDef.endsWith(']')) {
    if (!Array.isArray(value)) return false;

    const tupleTypes = typeDef
      .slice(1, -1)
      .split(',')
      .map(s => s.trim());

    const requiredLength = tupleTypes.filter(t => !t.endsWith('?')).length;
    const maxLength = tupleTypes.length;

    if (value.length < requiredLength || value.length > maxLength) {
      return false;
    }

    for (let i = 0; i < value.length; i++) {
      const expected = tupleTypes[i];
      if (!expected) return false;

      const isOptional = expected.endsWith('?');
      const cleanType = expected.replace(/\?$/, '');

      if (value[i] == null) {
        if (isOptional) continue;
        return false;
      }

      if (!validateType(value[i], [cleanType])) {
        return false;
      }
    }

    return true;
  }

  return validateType(value, [typeDef]);
}

function splitUnion(typeStr) {
  const result = [];
  let depth = 0,
    current = '';
  for (let char of typeStr) {
    if (char === '(' || char === '[') depth++;
    if (char === ')' || char === ']') depth--;
    if (char === '|' && depth === 0) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current) result.push(current.trim());
  return result;
}

function parsePropsString(str) {
  const props = {};
  const regex = /:?([a-zA-Z0-9_-]+)=("([^"]*)"|'([^']*)')/gs;
  let match;
  while ((match = regex.exec(str))) {
    const key = match[1];
    const rawValue = match[3] || match[4];
    const isExpression = match[0].startsWith(':');
    let value = rawValue.trim();

    if (isExpression) {
      if (
        (value.startsWith('[') && value.endsWith(']')) ||
        (value.startsWith('{') && value.endsWith('}'))
      ) {
        try {
          const jsonLike = value.replace(/\n/g, ' ').replace(/\s+/g, ' ').replace(/'/g, '"');
          value = JSON.parse(jsonLike);
        } catch {
          value = { __rawExpression: rawValue };
        }
      } else {
        value = { __rawExpression: rawValue };
      }
    }
    props[key] = value;
  }
  return props;
}
