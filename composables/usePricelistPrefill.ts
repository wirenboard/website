import type { Pricelist } from '~/common/types';

export const usePricelistPrefill = (): Pricelist | undefined => {
  if (!import.meta.server) return undefined;
  const prefill = useRequestEvent()?.context.wbPricelist;
  if (!prefill) return undefined;

  const { locale } = useI18n();
  if (prefill.locale !== locale.value) {
    console.warn(
      `[pricelist-prefill] X-WB-Pricelist is for ${prefill.locale}, page is ${locale.value}; falling back to API`,
    );
    return undefined;
  }
  return prefill.pricelist;
};
