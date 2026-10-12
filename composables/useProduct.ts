import type { Product } from '~/common/types';
import { useApi } from '~/composables/useApi';

export const useProduct = async (article: string) => {
  const { locale } = useI18n();
  const url = `/product/${article}/?locale=${locale.value}`;

  if (import.meta.server) {
    const prefill = useRequestEvent()?.context.wbProduct;
    if (prefill) {
      if (prefill.article.toLowerCase() === article.toLowerCase() && prefill.locale === locale.value) {
        return useAsyncData<Product>(url, () => Promise.resolve(prefill.product)) as ReturnType<typeof useApi<Product>>;
      }
      console.warn(
        `[product-prefill] X-WB-Product is for ${prefill.article}/${prefill.locale}, `
        + `page is ${article}/${locale.value}; falling back to API`,
      );
    }
  }

  return useApi<Product>(url, null, {
    getCachedData: (key, nuxtApp) => (import.meta.server || nuxtApp.isHydrating
      ? nuxtApp.payload.data[key]
      : nuxtApp.static.data[key]),
  });
};
