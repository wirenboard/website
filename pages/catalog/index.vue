<script lang="ts" setup>
import type { CatalogCategory } from '~/common/types';

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

const { searchQuery, searchResults, searchPending } = useCatalogSearch();
</script>

<template>
  <div class="catalog">
    <CatalogCategoryNav
      v-if="categories"
      v-model:search-query="searchQuery"
      :categories="categories"
      :search-pending="searchPending"
    />

    <CatalogSearchOverlay :pending="searchPending" class="catalog-content">
      <CatalogSearchResults v-if="searchResults !== null" :results="searchResults" />

      <div v-else class="catalog-categories">
        <a
          v-for="cat in categories"
          :key="cat.id"
          :href="`/${locale}/catalog/${cat.slug}/`"
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
    </CatalogSearchOverlay>
  </div>
</template>

<style scoped>
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
    "viewProducts": "Смотреть товары группы"
  },
  "en": {
    "title": "Product Catalog",
    "viewProducts": "View products"
  }
}
</i18n>
