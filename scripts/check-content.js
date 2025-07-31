import { checkComponents } from './check-components.js';
import { checkImages } from './check-images.js';

(async function main() {
  const { errors: compErrors, warnings: compWarnings } = await checkComponents();
  const { errors: imgErrors } = await checkImages();

  const allErrors = [...compErrors, ...imgErrors];
  const allWarnings = [...compWarnings];

  if (allErrors.length > 0) {
    console.error('\n❌  Ошибки:');
    for (const err of allErrors) {
      console.error(err);
    }
  }

  if (allWarnings.length > 0) {
    console.warn('\n⚠️  Предупреждения:');
    for (const warn of allWarnings) {
      console.warn(warn);
    }
  }

  if (allErrors.length > 0) {
    process.exit(1);
  } else {
    console.log('✅  Все проверки пройдены!');
  }
})();
