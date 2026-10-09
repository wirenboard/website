import { timingSafeEqual } from 'node:crypto';

// The PHP front proxies product pages to Nuxt. To avoid a second round trip back to
// /ng/api/v1/product, it may attach the product data to the proxied request:
//   X-Internal-Api-Key: <NUXT_INTERNAL_API_KEY>
//   X-WB-Product: base64(JSON.stringify({ article, locale, product }))
// The data is trusted only when the key matches; otherwise it is ignored and the page
// falls back to the regular API call (see composables/useProduct.ts).
const isValidKey = (given: string | undefined, expected: string | undefined): boolean => {
  if (!given || !expected) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
};

export default defineEventHandler((event) => {
  const raw = getHeader(event, 'x-wb-product');
  if (!raw) return;

  const config = useRuntimeConfig(event);
  if (!isValidKey(getHeader(event, 'x-internal-api-key'), config.internalApiKey as string)) {
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
