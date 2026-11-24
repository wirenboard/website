import type { CatalogCategory } from '~/common/types';

export const useCatalogCategoriesPrefill = (): CatalogCategory[] | undefined => {
  if (!import.meta.server) return undefined;
  const prefill = useRequestEvent()?.context.wbCatalogCategories;
  if (!prefill) return undefined;

  const { locale } = useI18n();
  if (prefill.locale !== locale.value) {
    console.warn(
      `[catalog-categories-prefill] X-WB-Catalog-Categories is for ${prefill.locale}, `
      + `page is ${locale.value}; falling back to API`,
    );
    return undefined;
  }
  return prefill.categories;
};
