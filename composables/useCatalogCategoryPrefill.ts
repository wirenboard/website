import type { CategoryResponse } from '~/common/types';

interface CatalogCategoryPrefill {
  locale: string;
  slug: string;
  data: CategoryResponse;
}

export const useCatalogCategoryPrefill = (): CatalogCategoryPrefill | undefined => {
  if (!import.meta.server) return undefined;
  const prefill = useRequestEvent()?.context.wbCatalogCategory;
  if (!prefill) return undefined;

  const { locale } = useI18n();
  if (prefill.locale !== locale.value) {
    console.warn(
      `[catalog-category-prefill] X-WB-Catalog-Category is for ${prefill.locale}, `
      + `page is ${locale.value}; falling back to API`,
    );
    return undefined;
  }
  return prefill;
};
