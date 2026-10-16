<script lang="ts" setup>
import type { CatalogCategory, CategoryResponse } from '~/common/types';

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

const { searchQuery, searchResults, searchPending } = useCatalogSearch();

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

    <CatalogSearchOverlay :pending="searchPending" class="catalogList-content">
      <CatalogSearchResults v-if="searchResults !== null" :results="searchResults" />

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
                <a :href="`/${locale}/catalog/${catData.category.slug}/`">{{ catData.category.name }}</a>
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
    </CatalogSearchOverlay>
  </div>
</template>

<style scoped>
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
    "more": "Подробнее..."
  },
  "en": {
    "title": "Product Catalog",
    "more": "Read more..."
  }
}
</i18n>
