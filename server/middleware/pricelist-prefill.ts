import { gunzipSync } from 'node:zlib';
import { isValidInternalApiKey } from '../utils/internalApiKey';

export default defineEventHandler((event) => {
  const raw = getHeader(event, 'x-wb-pricelist');
  if (!raw) return;

  const config = useRuntimeConfig(event);
  if (!isValidInternalApiKey(getHeader(event, 'x-internal-api-key'), config.internalApiKey as string)) {
    console.warn(`[pricelist-prefill] X-WB-Pricelist ignored: missing or invalid X-Internal-Api-Key (${event.path})`);
    return;
  }

  try {
    const data = JSON.parse(gunzipSync(Buffer.from(raw, 'base64')).toString('utf8'));
    const isValid = typeof data?.locale === 'string'
      && typeof data?.pricelist === 'object' && data.pricelist !== null;
    if (!isValid) {
      throw new Error('expected { locale, pricelist }');
    }
    event.context.wbPricelist = data;
  } catch (e) {
    console.warn(`[pricelist-prefill] X-WB-Pricelist ignored: ${(e as Error).message} (${event.path})`);
  }
});
