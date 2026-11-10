import { gunzipSync } from 'node:zlib';
import type { OrderPrefill } from '~/common/types';
import { isValidInternalApiKey } from '../utils/internalApiKey';

/**
 * X-WB-Order — подсказка от PHP для страницы оформления заказа (/contents/order): всё, что страница
 * при SSR иначе запрашивала бы у /order/prefill-info/, /order/payments/ и /order/delivery/ —
 * обратно у того же PHP, который в это время ждёт ответа Nuxt. Формат: base64 от gzip от JSON
 * (в prefill-info входит список стран, без сжатия заголовок не влезал бы в лимит Node вместе с
 * куками). Состав — ExternalContentController::orderPrefillHeaders() / OrderPagePrefill в PHP.
 * Читается в composables/useOrderPrefill.ts.
 *
 * Части orderInfo, payments и deliveryOptions проверяются независимо: отсутствующая или невалидная
 * часть отбрасывается, и страница запрашивает именно её у API как обычно, остальные используются.
 * Заголовок целиком игнорируется только без верного ключа, при ошибке разбора и если не уцелела
 * ни одна часть.
 *
 * Бюджет размера: Node принимает заголовки суммарно до --max-http-header-size (Dockerfile: 64 КБ,
 * по умолчанию было бы 16 КБ); при превышении запрос отбивается с 431 ещё до этого middleware,
 * без отката к API. Аноним — ~4–5 КБ после gzip+base64, основная часть — список стран.
 */
const isObject = (value: unknown): value is Record<string, any> => typeof value === 'object' && value !== null;

export default defineEventHandler((event) => {
  const raw = getHeader(event, 'x-wb-order');
  if (!raw) return;

  const config = useRuntimeConfig(event);
  if (!isValidInternalApiKey(getHeader(event, 'x-internal-api-key'), config.internalApiKey as string)) {
    console.warn(`[order-prefill] X-WB-Order ignored: missing or invalid X-Internal-Api-Key (${event.path})`);
    return;
  }

  let data: unknown;
  try {
    data = JSON.parse(gunzipSync(Buffer.from(raw, 'base64')).toString('utf8'));
  } catch (e) {
    console.warn(`[order-prefill] X-WB-Order ignored: ${(e as Error).message} (${event.path})`);
    return;
  }
  if (!isObject(data) || typeof data.locale !== 'string') {
    console.warn(
      `[order-prefill] X-WB-Order ignored: top level must be { locale: string, … } (${event.path})`,
    );
    return;
  }

  const prefill: OrderPrefill = { locale: data.locale };
  const dropped: string[] = [];

  // orderInfo годится, только если в basketData есть суммы — новые (itemsSum) или старые (itemsSumRub);
  // иначе странице нечего показывать, пусть спросит /order/prefill-info/ сама.
  const basket = isObject(data.orderInfo) ? data.orderInfo.basketData : undefined;
  if (isObject(basket) && (typeof basket.itemsSum === 'number' || typeof basket.itemsSumRub === 'number')) {
    prefill.orderInfo = data.orderInfo;
  } else if (data.orderInfo !== undefined) {
    dropped.push('orderInfo');
  }

  if (isObject(data.payments) && isObject(data.payments.params) && isObject(data.payments.data)) {
    prefill.payments = data.payments as OrderPrefill['payments'];
  } else if (data.payments !== undefined) {
    dropped.push('payments');
  }

  if (isObject(data.deliveryOptions) && isObject(data.deliveryOptions.query)
    && Array.isArray(data.deliveryOptions.data)) {
    prefill.deliveryOptions = data.deliveryOptions as OrderPrefill['deliveryOptions'];
  } else if (data.deliveryOptions !== undefined) {
    dropped.push('deliveryOptions');
  }

  if (dropped.length) {
    console.warn(
      `[order-prefill] X-WB-Order: invalid ${dropped.join(', ')} dropped, will be fetched from API (${event.path})`,
    );
  }
  if (!prefill.orderInfo && !prefill.payments && !prefill.deliveryOptions) {
    console.warn(`[order-prefill] X-WB-Order ignored: no usable parts (${event.path})`);
    return;
  }
  event.context.wbOrder = prefill;
});
