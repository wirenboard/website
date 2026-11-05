import { timingSafeEqual } from 'node:crypto';

/**
 * Проверка X-Internal-Api-Key, которым PHP подписывает подсказки X-WB-Product и X-WB-Order:
 * без верного ключа заголовки с данными страницы игнорируются.
 */
export const isValidInternalApiKey = (given: string | undefined, expected: string | undefined): boolean => {
  if (!given || !expected) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
};
