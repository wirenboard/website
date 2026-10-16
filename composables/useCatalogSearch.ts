import type { CatalogProduct } from '~/common/types';

export const useCatalogSearch = () => {
  const { locale } = useI18n();

  const searchQuery = ref('');
  const searchResults = ref<CatalogProduct[] | null>(null);
  const searchPending = ref(false);

  let searchTimer: ReturnType<typeof setTimeout> | null = null;
  let searchAbort: AbortController | null = null;

  watch(searchQuery, (q) => {
    if (searchTimer) clearTimeout(searchTimer);
    if (searchAbort) searchAbort.abort();
    const trimmed = q.trim();
    if (trimmed.length < 3) {
      searchResults.value = null;
      searchPending.value = false;
      return;
    }
    searchPending.value = true;
    searchTimer = setTimeout(async () => {
      searchAbort = new AbortController();
      try {
        searchResults.value = await $fetch<CatalogProduct[]>(
          `/${locale.value}/ng/api/v1/catalog/search/`,
          { params: { q: trimmed }, signal: searchAbort.signal },
        );
        searchPending.value = false;
      } catch (e: any) {
        if (e.name === 'AbortError') return;
        console.error('Catalog search failed', e);
        searchResults.value = [];
        searchPending.value = false;
      }
    }, 600);
  });

  return { searchQuery, searchResults, searchPending };
};
