<script lang="ts" setup>
import type { CatalogCategory, CatalogProduct } from '~/common/types';

const { t, locale } = useI18n();

const { data: categories } = await useApi<CatalogCategory[]>('/catalog/categories/');

useHead({
  title: t('title'),
  meta: [
    { property: 'og:title', content: t('title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: categories.value?.[0]?.image || '' },
  ],
});

function stripAndTruncate(html: string, maxLen = 500): string {
  const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).replace(/\s+\S*$/, '') + '...';
}

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
        '/_catalog-search',
        { params: { q: trimmed, locale: locale.value }, signal: searchAbort.signal },
      );
      searchPending.value = false;
    } catch (e: any) {
      if (e.name !== 'AbortError') throw e;
    }
  }, 600);
});
</script>

<template>
  <div class="catalog">
    <CatalogCategoryNav
      v-if="categories"
      v-model:search-query="searchQuery"
      :categories="categories"
      :search-pending="searchPending"
    />

    <div class="catalog-content" :class="{ loading: searchPending }">
      <template v-if="searchResults !== null">
        <div v-if="searchResults.length === 0" class="catalog-searchStatus">{{ t('noResults') }}</div>
        <div v-else class="catalog-searchResults">
          <CatalogProductCard
            v-for="product in searchResults"
            :key="product.id"
            :product="product"
            grid-layout
          />
        </div>
      </template>

      <div v-else class="catalog-categories">
        <a
          v-for="cat in categories"
          :key="cat.id"
          :href="`/${locale}/contents/catalog/${cat.slug}/`"
          class="catalog-categoryCard"
        >
          <div class="catalog-categoryInfo">
            <h2>{{ cat.name }}</h2>
            <div class="catalog-categoryDesc">{{ stripAndTruncate(cat.description) }}</div>
            <span class="catalog-categoryLink">
              {{ t('viewProducts') }}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
          <div class="catalog-categoryImg">
            <img v-if="cat.image" :src="cat.image" :alt="cat.name" loading="lazy">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog-searchStatus {
  padding: 32px 0;
  font-size: 16px;
  color: var(--text-status-color);
}

.catalog-content {
  position: relative;
}

.catalog-content.loading::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: #fff;
  opacity: 0.5;
  z-index: 1001;
}

.catalog-content.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  margin-left: -15px;
  border-radius: 50%;
  border: 2px solid var(--spinner-track-color);
  border-top-color: var(--primary-color);
  animation: catalogSearchSpinner 0.6s linear infinite;
  z-index: 1002;
}

@keyframes catalogSearchSpinner {
  to {
    transform: rotate(360deg);
  }
}

.catalog-searchResults {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 767px) {
  .catalog-searchResults {
    grid-template-columns: 1fr;
  }
}

.catalog-categories {
  display: flex;
  flex-direction: column;
}

.catalog-categoryCard {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  padding: 40px;
  text-decoration: none;
  color: inherit;
  background: var(--gray-color);
  border-radius: 4px;
  margin-bottom: 32px;
}

.catalog-categoryCard:hover {
  background-color: #f4f4f4;
}

.catalog-categoryCard:nth-child(even) {
  flex-direction: row-reverse;
}

.catalog-categoryInfo {
  flex: 1;
  min-width: 0;
}

.catalog-categoryInfo h2 {
  margin: 0 0 16px;
  font-size: 48px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--text-strong-color);
}

.catalog-categoryDesc {
  font-size: 18px;
  line-height: 24px;
  color: var(--text-body-color);
  margin-bottom: 20px;
}

.catalog-categoryLink {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--link-color);
}

.catalog-categoryCard:hover .catalog-categoryLink {
  text-decoration: underline;
}

.catalog-categoryImg {
  flex-shrink: 0;
  width: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.catalog-categoryImg img {
  max-width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .catalog-categoryCard {
    flex-direction: column-reverse;
    gap: 16px;
    padding: 24px 16px;
  }

  .catalog-categoryImg {
    width: 100%;
    max-width: 300px;
  }

  .catalog-categoryInfo h2 {
    font-size: 22px;
  }
}
</style>

<i18n>
{
  "ru": {
    "title": "Каталог продукции",
    "viewProducts": "Смотреть товары группы",
    "noResults": "По вашему запросу ничего не найдено"
  },
  "en": {
    "title": "Product Catalog",
    "viewProducts": "View products",
    "noResults": "No results found"
  }
}
</i18n>
