import type { Product } from '~/common/types';
import { useApi } from '~/composables/useApi';

// Product data for the product page. Uses the data the PHP front attached to the request
// (server/middleware/product-prefill.ts) when it matches this article and locale, otherwise
// requests /product/{article}/ from the API. Both paths share the useAsyncData key, so the
// result lands in the SSR payload and the browser does not refetch it on hydration.
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

  // The page and the ::product component both call this during one SSR render. By default
  // useAsyncData reuses fetched data only while hydrating, so on the server it would hit the
  // API twice; reuse the payload there too.
  return useApi<Product>(url, null, {
    getCachedData: (key, nuxtApp) => (import.meta.server || nuxtApp.isHydrating
      ? nuxtApp.payload.data[key]
      : nuxtApp.static.data[key]),
  });
};
