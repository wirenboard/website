<script lang="ts" setup>
import type { CategoryResponse, CatalogProduct } from '~/common/types';

const { t, locale } = useI18n();
const config = useRuntimeConfig();
const route = useRoute();
const slug = route.params.slug as string;

const { data } = await useApi<CategoryResponse>(`/catalog/categories/${slug}/`);

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found' });
}

useHead({
  title: data.value.category.meta_title || data.value.category.title,
  meta: [
    { name: 'description', content: data.value.category.meta_description || '' },
    { name: 'keywords', content: data.value.category.meta_keywords || '' },
    { name: 'wb-bc', content: `${t('catalog')}|/${locale.value}/contents/catalog/` },
    { property: 'og:title', content: data.value.category.meta_title || data.value.category.title },
    { property: 'og:description', content: data.value.category.meta_description || '' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: data.value.category.image || '' },
  ],
});

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
        `${config.public.apiUrl}/${locale.value}/ng/api/v1/catalog/search/`,
        { params: { q: trimmed }, signal: searchAbort.signal },
      );
      searchPending.value = false;
    } catch (e: any) {
      if (e.name !== 'AbortError') throw e;
    }
  }, 600);
});
</script>

<template>
  <div v-if="data" class="category">
    <CatalogCategoryNav
      v-model:search-query="searchQuery"
      :categories="data.nav_categories"
      :current-slug="slug"
      :search-pending="searchPending"
    />

    <div class="category-content" :class="{ loading: searchPending }">
      <template v-if="searchResults !== null">
        <div v-if="searchResults.length === 0" class="category-searchStatus">{{ t('noResults') }}</div>
        <div v-else class="category-searchResults">
          <CatalogProductCard
            v-for="product in searchResults"
            :key="product.id"
            :product="product"
            grid-layout
          />
        </div>
      </template>

      <template v-else>
        <div class="category-header">
          <div class="category-headerImg" v-if="data.category.image">
            <img :src="data.category.image" :alt="data.category.name" loading="lazy">
          </div>
          <div class="category-headerDesc" v-html="data.category.description"></div>
        </div>

        <div class="category-products">
          <CatalogProductCard
            v-for="product in data.products"
            :key="product.id"
            :product="product"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.category-searchStatus {
  padding: 32px 0;
  color: var(--text-status-color);
  text-align: center;
  font-size: 18px;
}

.category-content {
  position: relative;
}

.category-content.loading::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: #fff;
  opacity: 0.5;
  z-index: 1001;
}

.category-content.loading::after {
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

.category-searchResults {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 767px) {
  .category-searchResults {
    grid-template-columns: 1fr;
  }
}

.category-header {
  display: flex;
  align-items: center;
  background: var(--gray-color);
  border-radius: 4px;
  padding: 40px;
  margin-bottom: 32px;
}

.category-headerImg {
  flex-shrink: 0;
  width: 40%;
  max-width: 480px;
  padding-left: 24px;
}

.category-headerImg img {
  max-width: 100%;
  height: auto;
  display: block;
}

.category-headerDesc {
  order: -1;
  flex: 1;
  min-width: 0;
  font-size: 18px;
  line-height: 24px;
  color: var(--text-muted-color);
}

.category-headerDesc :deep(img) {
  max-width: 100%;
  height: auto;
}

.category-headerDesc :deep(a) {
  color: inherit;
  text-decoration: underline;
}

.category-headerDesc :deep(u) {
  text-decoration: none;
}

.category-products {
  border-top: 1px solid var(--border-color);
}

@media (max-width: 767px) {
  .category-header {
    padding: 24px;
  }

  .category-headerImg {
    display: none;
  }
}
</style>

<i18n>
{
  "ru": {
    "catalog": "Каталог продукции",
    "noResults": "По вашему запросу ничего не найдено"
  },
  "en": {
    "catalog": "Product Catalog",
    "noResults": "No results found"
  }
}
</i18n>
