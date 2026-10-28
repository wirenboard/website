import { timingSafeEqual } from 'node:crypto';

/**
 * Проверка X-Internal-Api-Key — общего секрета с PHP (NUXT_INTERNAL_API_KEY = INTERNAL_API_KEY).
 * Только с ним принимаются данные, которые PHP-прокси присылает в заголовках X-WB-Product и
 * X-WB-Order вместо ответов API. Сравнение за постоянное время, чтобы ключ нельзя было
 * подобрать по времени ответа.
 */
export const isValidInternalApiKey = (given: string | undefined, expected: string | undefined): boolean => {
  if (!given || !expected) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
};
