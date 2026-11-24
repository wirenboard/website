import type { CatalogListResponse } from '~/common/types';

export const useCatalogListPrefill = (): CatalogListResponse | undefined => {
  if (!import.meta.server) return undefined;
  const prefill = useRequestEvent()?.context.wbCatalogList;
  if (!prefill) return undefined;

  const { locale } = useI18n();
  if (prefill.locale !== locale.value) {
    console.warn(
      `[catalog-list-prefill] X-WB-Catalog-List is for ${prefill.locale}, page is ${locale.value}; falling back to API`,
    );
    return undefined;
  }
  return prefill.data;
};
