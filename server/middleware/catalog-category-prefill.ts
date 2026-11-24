import { gunzipSync } from 'node:zlib';
import { isValidInternalApiKey } from '../utils/internalApiKey';

const isObject = (value: unknown): value is Record<string, any> => typeof value === 'object' && value !== null;

export default defineEventHandler((event) => {
  const raw = getHeader(event, 'x-wb-catalog-category');
  if (!raw) return;

  const config = useRuntimeConfig(event);
  if (!isValidInternalApiKey(getHeader(event, 'x-internal-api-key'), config.internalApiKey as string)) {
    console.warn(
      `[catalog-category-prefill] X-WB-Catalog-Category ignored: missing or invalid X-Internal-Api-Key (${event.path})`,
    );
    return;
  }

  let data: unknown;
  try {
    data = JSON.parse(gunzipSync(Uint8Array.from(Buffer.from(raw, 'base64'))).toString('utf8'));
  } catch (e) {
    console.warn(`[catalog-category-prefill] X-WB-Catalog-Category ignored: ${(e as Error).message} (${event.path})`);
    return;
  }
  if (!isObject(data) || typeof data.locale !== 'string' || typeof data.slug !== 'string' || !isObject(data.data)) {
    console.warn(
      `[catalog-category-prefill] X-WB-Catalog-Category ignored: expected { locale, slug, data } (${event.path})`,
    );
    return;
  }
  event.context.wbCatalogCategory = data;
});
