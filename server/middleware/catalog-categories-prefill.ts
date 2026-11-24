import { isValidInternalApiKey } from '../utils/internalApiKey';

const isObject = (value: unknown): value is Record<string, any> => typeof value === 'object' && value !== null;

export default defineEventHandler((event) => {
  const raw = getHeader(event, 'x-wb-catalog-categories');
  if (!raw) return;

  const config = useRuntimeConfig(event);
  if (!isValidInternalApiKey(getHeader(event, 'x-internal-api-key'), config.internalApiKey as string)) {
    console.warn(
      '[catalog-categories-prefill] X-WB-Catalog-Categories ignored: '
      + `missing or invalid X-Internal-Api-Key (${event.path})`,
    );
    return;
  }

  let data: unknown;
  try {
    data = JSON.parse(Buffer.from(raw, 'base64').toString('utf8'));
  } catch (e) {
    console.warn(
      `[catalog-categories-prefill] X-WB-Catalog-Categories ignored: ${(e as Error).message} (${event.path})`,
    );
    return;
  }
  if (!isObject(data) || typeof data.locale !== 'string' || !Array.isArray(data.categories)) {
    console.warn(
      `[catalog-categories-prefill] X-WB-Catalog-Categories ignored: expected { locale, categories } (${event.path})`,
    );
    return;
  }
  event.context.wbCatalogCategories = data;
});
