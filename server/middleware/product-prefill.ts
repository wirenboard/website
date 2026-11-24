import { isValidInternalApiKey } from '../utils/internalApiKey';

export default defineEventHandler((event) => {
  const raw = getHeader(event, 'x-wb-product');
  if (!raw) return;

  const config = useRuntimeConfig(event);
  if (!isValidInternalApiKey(getHeader(event, 'x-internal-api-key'), config.internalApiKey as string)) {
    console.warn(`[product-prefill] X-WB-Product ignored: missing or invalid X-Internal-Api-Key (${event.path})`);
    return;
  }

  try {
    const data = JSON.parse(Buffer.from(raw, 'base64').toString('utf8'));
    const isValid = typeof data?.article === 'string'
      && typeof data?.locale === 'string'
      && typeof data?.product === 'object' && data.product !== null;
    if (!isValid) {
      throw new Error('expected { article, locale, product }');
    }
    event.context.wbProduct = data;
  } catch (e) {
    console.warn(`[product-prefill] X-WB-Product ignored: ${(e as Error).message} (${event.path})`);
  }
});
