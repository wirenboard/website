<script lang="ts" setup>
import type { CatalogCategory, CategoryResponse, CatalogProduct } from '~/common/types';

const { t, locale } = useI18n();

const { data: categories } = await useApi<CatalogCategory[]>('/catalog/categories/');

if (!categories.value) {
  throw createError({ statusCode: 404, statusMessage: 'Categories not found' });
}

const config = useRuntimeConfig();
const cookieHeader = import.meta.server ? useRequestHeader('cookie') : undefined;

const DESCRIPTION_TRUNCATE_LENGTH = 400;
const expandedCategories = ref<Record<number, boolean>>({});

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const isLongDescription = (description: string) => stripHtml(description).length > DESCRIPTION_TRUNCATE_LENGTH;
const truncateDescription = (description: string) => `${stripHtml(description).slice(0, DESCRIPTION_TRUNCATE_LENGTH)}...`;

useHead({
  title: t('title'),
  meta: [
    { property: 'og:title', content: t('title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: categories.value?.[0]?.image || '' },
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

const { data: categoryDetails } = await useAsyncData('catalog-list-details', async () => {
  const headers: Record<string, string> = {};
  if (import.meta.server) {
    if (config.siteLogin) {
      headers['Authorization'] = `Basic ${btoa(`${config.siteLogin}:${config.sitePassword}`)}`;
    }
    if (cookieHeader) headers['Cookie'] = cookieHeader;
    if (config.internalApiKey) headers['X-Internal-Api-Key'] = config.internalApiKey as string;
  } else {
    if (config.public.siteLogin) {
      headers['Authorization'] = `Basic ${btoa(`${config.public.siteLogin}:${config.public.sitePassword}`)}`;
    }
  }
  const apiBase = import.meta.server ? (config.apiUrl || '') : '';

  const results = await Promise.allSettled(
    categories.value!.map(cat =>
      $fetch<CategoryResponse>(`${apiBase}/${locale.value}/ng/api/v1/catalog/categories/${cat.slug}/`, { headers })
    )
  );
  return results
    .filter((r): r is PromiseFulfilledResult<CategoryResponse> => r.status === 'fulfilled')
    .map(r => r.value);
});
</script>

<template>
  <div class="catalogList">
    <CatalogCategoryNav
      v-if="categories"
      v-model:search-query="searchQuery"
      :categories="categories"
      view-mode="list"
      :search-pending="searchPending"
    />

    <div class="catalogList-content" :class="{ loading: searchPending }">
      <template v-if="searchResults !== null">
        <div v-if="searchResults.length === 0" class="catalogList-searchStatus">{{ t('noResults') }}</div>
        <div v-else class="catalogList-searchResults">
          <CatalogProductCard
            v-for="product in searchResults"
            :key="product.id"
            :product="product"
            grid-layout
          />
        </div>
      </template>

      <template v-else>
        <div
          v-for="(catData, index) in categoryDetails"
          :key="catData.category.id"
          :id="`category-${catData.category.slug}`"
          class="catalogList-section"
          :class="{ 'catalogList-section--reverse': index % 2 === 0 }"
        >
          <div class="catalogList-header">
            <div class="catalogList-headerImg" v-if="catData.category.image">
              <img :src="catData.category.image" :alt="catData.category.name" loading="lazy">
            </div>
            <div class="catalogList-headerInfo">
              <h2>
                <a :href="`/${locale}/contents/catalog/${catData.category.slug}/`">{{ catData.category.name }}</a>
              </h2>
              <div class="catalogList-headerDesc">
                <template v-if="isLongDescription(catData.category.description) && !expandedCategories[catData.category.id]">
                  <p>{{ truncateDescription(catData.category.description) }}</p>
                  <a href="#" class="catalogList-more" @click.prevent="expandedCategories[catData.category.id] = true">{{ t('more') }}</a>
                </template>
                <noindex v-else-if="isLongDescription(catData.category.description)" v-html="catData.category.description"></noindex>
                <div v-else v-html="catData.category.description"></div>
              </div>
            </div>
          </div>
          <div class="catalogList-products">
            <CatalogProductCard
              v-for="product in catData.products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.catalogList-searchStatus {
  padding: 32px 0;
  font-size: 16px;
  color: var(--text-status-color);
}

.catalogList-content {
  position: relative;
}

.catalogList-content.loading::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: #fff;
  opacity: 0.5;
  z-index: 1001;
}

.catalogList-content.loading::after {
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

.catalogList-searchResults {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 767px) {
  .catalogList-searchResults {
    grid-template-columns: 1fr;
  }
}

.catalogList-section {
  margin-bottom: 48px;
}

.catalogList-header {
  display: flex;
  align-items: flex-start;
  background: var(--gray-color);
  border-radius: 4px;
  padding: 40px;
  margin-bottom: 0;
}

.catalogList-headerImg {
  flex-shrink: 0;
  width: 40%;
  max-width: 480px;
  padding-right: 24px;
}

.catalogList-section--reverse .catalogList-headerInfo {
  order: -1;
}

.catalogList-section--reverse .catalogList-headerImg {
  padding-right: 0;
  padding-left: 24px;
}

.catalogList-headerImg img {
  max-width: 100%;
  height: auto;
  display: block;
}

.catalogList-headerInfo {
  flex: 1;
  min-width: 0;
}

.catalogList-headerInfo h2 {
  margin: 0 0 16px;
  font-size: 48px;
  font-weight: 400;
  text-transform: uppercase;
}

.catalogList-headerInfo h2 a {
  color: var(--text-strong-color);
  text-decoration: none;
}

.catalogList-headerInfo h2 a:hover {
  color: var(--primary-color);
}

.catalogList-headerDesc {
  font-size: 18px;
  line-height: 24px;
  color: var(--text-body-color);
}

.catalogList-headerDesc noindex {
  display: block;
}

.catalogList-headerDesc :deep(img) {
  max-width: 100%;
  height: auto;
}

.catalogList-headerDesc :deep(a) {
  color: inherit;
  text-decoration: underline;
}

.catalogList-headerDesc .catalogList-more {
  display: inline-block;
  color: var(--link-color);
  font-weight: normal;
  text-decoration: none;
}

.catalogList-headerDesc .catalogList-more:hover {
  text-decoration: underline;
}

.catalogList-headerDesc :deep(u) {
  text-decoration: none;
}

.catalogList-products {
  border-top: 1px solid var(--border-color);
}

@media (max-width: 767px) {
  .catalogList-header {
    padding: 24px;
  }

  .catalogList-headerImg {
    display: none;
  }

  .catalogList-headerInfo h2 {
    font-size: 22px;
  }
}
</style>

<i18n>
{
  "ru": {
    "title": "Каталог продукции",
    "noResults": "По вашему запросу ничего не найдено",
    "more": "Подробнее..."
  },
  "en": {
    "title": "Product Catalog",
    "more": "Read more...",
    "noResults": "No results found"
  }
}
</i18n>
