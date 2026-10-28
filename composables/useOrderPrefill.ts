import type { AvailableDeliveriesInfo, OrderInfo, PaymentsInfo } from '~/common/types';

/** Ответ эндпоинта вместе с параметрами запроса, для которых он посчитан. */
export interface PrefilledResponse<T> {
  params: Record<string, string | number>;
  data: T;
}

/** Содержимое заголовка X-WB-Order, см. server/middleware/order-prefill.ts. */
export interface OrderPrefill {
  locale: string;
  prefillInfo: OrderInfo;
  payments: PrefilledResponse<PaymentsInfo>;
  /** Нет при пустой корзине: форма доставки тогда не рисуется и запрос не делается. */
  delivery?: PrefilledResponse<AvailableDeliveriesInfo>;
}

/**
 * Данные формы заказа, которые PHP-прокси прислал вместе с запросом страницы, чтобы при SSR не
 * ходить за ними обратно в PHP. Только на сервере: на клиенте и без заголовка — undefined, и
 * useApi идёт в эндпоинт как обычно.
 */
export const useOrderPrefill = (): OrderPrefill | undefined => {
  if (!import.meta.server) return undefined;

  const prefill = useRequestEvent()?.context.wbOrder as OrderPrefill | undefined;
  if (!prefill) return undefined;

  const { locale } = useI18n();
  if (prefill.locale !== locale.value) {
    console.warn(`[order-prefill] X-WB-Order is for locale ${prefill.locale}, page is ${locale.value}; falling back to API`);
    return undefined;
  }
  return prefill;
};

/**
 * Ответ из prefill, если он посчитан для тех же параметров, что useApi отправил бы в эндпоинт
 * (без user_id — его useApi добавляет сам). Сравниваются строковые представления: в query
 * string всё равно уходят строки. Параметры со значением undefined $fetch не отправляет,
 * поэтому они не учитываются.
 */
export const prefilledFor = <T>(
  response: PrefilledResponse<T> | undefined,
  params: Record<string, unknown>,
): T | undefined => {
  if (!response) return undefined;

  const sent = Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => [key, String(value)] as const);
  const recorded = new Map(Object.entries(response.params).map(([key, value]) => [key, String(value)]));
  const same = sent.length === recorded.size && sent.every(([key, value]) => recorded.get(key) === value);
  if (!same) {
    console.warn(
      `[order-prefill] prefilled response is for ${JSON.stringify(response.params)}, `
      + `request is ${JSON.stringify(Object.fromEntries(sent))}; falling back to API`,
    );
    return undefined;
  }
  return response.data;
};
