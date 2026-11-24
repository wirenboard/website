import type { OrderPrefill } from '~/common/types';

/**
 * Подсказка X-WB-Order от PHP для страницы оформления заказа (server/middleware/order-prefill.ts):
 * всё, что страница при SSR иначе запрашивала бы у /order/prefill-info/, /order/payments/ и
 * /order/delivery/ — обратно у того же PHP, который в это время ждёт ответа Nuxt. Тот же приём,
 * что X-WB-Product для карточки товара (useProduct). Только на сервере; в браузере — undefined,
 * и все запросы идут в эндпоинты как обычно.
 */
export const useOrderPrefill = (): OrderPrefill | undefined => {
  if (!import.meta.server) return undefined;
  const prefill = useRequestEvent()?.context.wbOrder;
  if (!prefill) return undefined;

  const { locale } = useI18n();
  if (prefill.locale !== locale.value) {
    console.warn(`[order-prefill] X-WB-Order is for ${prefill.locale}, page is ${locale.value}; falling back to API`);
    return undefined;
  }
  return prefill;
};

/**
 * Те же ли это параметры запроса: подсказка для /order/payments/ и /order/delivery/ собрана PHP для
 * начального состояния страницы, и годится, только если страница действительно стартует с него.
 * Значения сравниваются как строки: country на странице — число, в deliveryData — строка.
 */
export const isSameQuery = (a: Record<string, any>, b: Record<string, any>): boolean => {
  const normalize = (query: Record<string, any>) =>
    Object.keys(query).sort().map((key) => `${key}=${query[key] ?? ''}`).join('|');
  return normalize(a) === normalize(b);
};
