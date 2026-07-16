import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs-extra';

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

function isBinary(buffer) {
  return buffer.subarray(0, 8192).includes(0);
}

export async function checkLineEndings() {
  const files = execSync('git ls-files -z', { encoding: 'utf-8' }).split('\0').filter(Boolean);
  const errors = [];

  for (const file of files) {
    let buffer;
    try {
      buffer = await fs.readFile(file);
    } catch {
      continue;
    }
    if (isBinary(buffer)) {
      continue;
    }
    if (buffer.includes('\r')) {
      errors.push(`${clickableLink(file)}\n  - ${colors.red}[CRLF LINE ENDINGS]${colors.reset} файл содержит переводы строк CRLF, нужен LF (пересохраните файл с LF или выполните: git add --renormalize "${file}")`);
    }
  }

  return { errors };
}
