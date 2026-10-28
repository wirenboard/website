import { gunzipSync } from 'node:zlib';
import { isValidInternalApiKey } from '../utils/internalApiKey';

/**
 * X-WB-Order: PHP-прокси страницы /contents/order присылает вместе с запросом готовые ответы
 * /order/prefill-info, /order/payments и /order/delivery (wirenboard.com:
 * ExternalContentController::orderPrefillHeaders()), чтобы при SSR страница не ходила за ними
 * обратно в PHP. JSON сжат gzip и закодирован base64. Разобранные данные подставляет
 * composables/useOrderPrefill.ts.
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
    const isResponse = (entry: any) => typeof entry?.params === 'object' && entry.params !== null
      && typeof entry?.data === 'object' && entry.data !== null;
    const isValid = typeof data?.locale === 'string'
      && typeof data?.prefillInfo === 'object' && data.prefillInfo !== null
      && isResponse(data.payments)
      && (data.delivery === undefined || isResponse(data.delivery));
    if (!isValid) {
      throw new Error('expected { locale, prefillInfo, payments: { params, data }, delivery?: { params, data } }');
    }
    event.context.wbOrder = data;
  } catch (e) {
    console.warn(`[order-prefill] X-WB-Order ignored: ${(e as Error).message} (${event.path})`);
  }
});
