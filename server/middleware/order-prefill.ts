import { gunzipSync } from 'node:zlib';
import { isValidInternalApiKey } from '../utils/internalApiKey';

/**
 * X-WB-Order — подсказка от PHP для страницы оформления заказа (/contents/order): всё, что страница
 * при SSR иначе запрашивала бы у /order/prefill-info/, /order/payments/ и /order/delivery/ —
 * обратно у того же PHP, который в это время ждёт ответа Nuxt. Формат: base64 от gzip от JSON
 * (в prefill-info входит список стран, без сжатия заголовок не влезал бы в лимит Node вместе с
 * куками). Состав — ExternalContentController::orderPrefillHeaders() / OrderPagePrefill в PHP.
 * Читается в composables/useOrderPrefill.ts.
 */
export default defineEventHandler((event) => {
  const raw = getHeader(event, 'x-wb-order');
  if (!raw) return;

  const config = useRuntimeConfig(event);
  if (!isValidInternalApiKey(getHeader(event, 'x-internal-api-key'), config.internalApiKey as string)) {
    console.warn(`[order-prefill] X-WB-Order ignored: missing or invalid X-Internal-Api-Key (${event.path})`);
    return;
  }

  try {
    const data = JSON.parse(gunzipSync(Buffer.from(raw, 'base64')).toString('utf8'));
    const isValid = typeof data?.locale === 'string'
      && typeof data?.orderInfo === 'object' && data.orderInfo !== null
      && typeof data?.payments?.params === 'object' && data.payments.params !== null
      && typeof data?.payments?.data === 'object' && data.payments.data !== null
      && typeof data?.deliveryOptions?.query === 'object' && data.deliveryOptions.query !== null
      && Array.isArray(data?.deliveryOptions?.data);
    if (!isValid) {
      throw new Error('expected { locale, orderInfo, payments: { params, data }, deliveryOptions: { query, data } }');
    }
    event.context.wbOrder = data;
  } catch (e) {
    console.warn(`[order-prefill] X-WB-Order ignored: ${(e as Error).message} (${event.path})`);
  }
});
