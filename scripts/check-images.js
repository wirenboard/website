import path from 'path';
import fg from 'fast-glob';
import fs from 'fs-extra';

const contentDir = 'content';
const projectRoot = process.cwd();

const colors = {
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function clickableLink(filePath) {
  const absFile = path.resolve(filePath);
  const relFile = path.relative(projectRoot, absFile);
  const url = `file://${absFile}`;
  return `${colors.blue}\u001b]8;;${url}\u001b\\${relFile}\u001b]8;;\u001b\\${colors.reset}`;
}

const imageProps = ['src', 'cover', 'image', 'background'];

export async function checkImages() {
  const files = await fg(`${contentDir}/**/*.md`);
  const errors = [];

  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');

    const frontmatterMatch = content.match(/^---([\s\S]*?)---/);
    if (frontmatterMatch) {
      const yaml = frontmatterMatch[1];

      const coverMatch = yaml.match(/cover:\s*([^\n]+)/);
      if (coverMatch) {
        const coverPath = coverMatch[1].trim();
        if (looksLikeImage(coverPath)) {
          const result = checkImagePath(coverPath, file);
          if (!result.ok) {
            errors.push(`${clickableLink(file)}\n  - ${colors.red}[IMAGE NOT FOUND]${colors.reset} "cover" → ${coverPath} (checked: ${result.checked})`);
          }
        }
      }

      const imagesMatch = yaml.match(/images:\s*\[([\s\S]*?)\]/);
      if (imagesMatch) {
        const rawArray = imagesMatch[1];
        const paths = rawArray.match(/"([^"]+\.(png|jpe?g|webp|gif|svg))"/gi) || [];
        for (const p of paths) {
          const imagePath = p.replace(/"/g, '');
          const result = checkImagePath(imagePath, file);
          if (!result.ok) {
            errors.push(`${clickableLink(file)}\n  - ${colors.red}[IMAGE NOT FOUND]${colors.reset} "images" → ${imagePath} (checked: ${result.checked})`);
          }
        }
      }
    }

    const propMatches = [...content.matchAll(/(:?)([a-zA-Z0-9_-]+)=("([^"]*)"|'([^']*)')/g)];
    for (const match of propMatches) {
      const prop = match[2];
      const value = match[4] || match[5];

      if (imageProps.includes(prop) && looksLikeImage(value)) {
        const result = checkImagePath(value, file);
        if (!result.ok) {
          errors.push(`${clickableLink(file)}\n  - ${colors.red}[IMAGE NOT FOUND]${colors.reset} "${prop}" → ${value} (checked: ${result.checked})`);
        }
      }
    }

    const dataMatches = [...content.matchAll(/:data=('([^']*)'|"([^"]*)")/g)];
    for (const match of dataMatches) {
      const raw = match[2] || match[3];
      const normalized = raw.replace(/\n/g, ' ').replace(/\s+/g, ' ').replace(/'/g, '"');
      try {
        const arr = JSON.parse(normalized);
        arr.flat().forEach(item => {
          if (typeof item === 'string' && looksLikeImage(item)) {
            const result = checkImagePath(item, file);
            if (!result.ok) {
              errors.push(`${clickableLink(file)}\n  - ${colors.red}[IMAGE NOT FOUND]${colors.reset} "data" → ${item} (checked: ${result.checked})`);
            }
          }
        });
      } catch {}
    }
  }

  return { errors };
}

function checkImagePath(imagePath, mdFile) {
  if (!imagePath || typeof imagePath !== 'string') {
    return { ok: true };
  }

  if (/^https?:\/\//.test(imagePath)) {
    return { ok: true };
  }

  let abs;
  if (imagePath.startsWith('/')) {
    abs = path.resolve(path.dirname(mdFile), imagePath.slice(1));
    if (fs.existsSync(abs)) {
      return { ok: true, checked: abs };
    }

    const publicPath = path.resolve(projectRoot, 'public', imagePath.slice(1));
    return { ok: fs.existsSync(publicPath), checked: publicPath };
  }

  if (imagePath.startsWith('img/')) {
    const absImg = path.resolve(projectRoot, 'public', imagePath);
    return { ok: fs.existsSync(absImg), checked: absImg };
  }

  abs = path.resolve(path.dirname(mdFile), imagePath);
  return { ok: fs.existsSync(abs), checked: abs };
}

function looksLikeImage(str) {
  return /\.(png|jpe?g|webp|gif|svg)$/i.test(str);
}
