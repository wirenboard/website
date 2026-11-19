import type { OrdersPrefill } from '~/common/types';

export const useOrdersPrefill = (): OrdersPrefill | undefined => {
  if (!import.meta.server) return undefined;
  const prefill = useRequestEvent()?.context.wbOrders;
  if (!prefill) return undefined;

  const { locale } = useI18n();
  if (prefill.locale !== locale.value) {
    console.warn(`[orders-prefill] X-WB-Orders is for ${prefill.locale}, page is ${locale.value}; falling back to API`);
    return undefined;
  }
  return prefill;
};
