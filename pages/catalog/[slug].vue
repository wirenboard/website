<script lang="ts" setup>
import type { CategoryResponse } from '~/common/types';

const { t, locale } = useI18n();
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
    { name: 'wb-bc', content: `${t('catalog')}|/${locale.value}/catalog/` },
    { property: 'og:title', content: data.value.category.meta_title || data.value.category.title },
    { property: 'og:description', content: data.value.category.meta_description || '' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: data.value.category.image || '' },
  ],
});

const { searchQuery, searchResults, searchPending } = useCatalogSearch();
</script>

<template>
  <div v-if="data" class="category">
    <CatalogCategoryNav
      v-model:search-query="searchQuery"
      :categories="data.nav_categories"
      :current-slug="slug"
      :search-pending="searchPending"
    />

    <CatalogSearchOverlay :pending="searchPending" class="category-content">
      <CatalogSearchResults v-if="searchResults !== null" :results="searchResults" />

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
    </CatalogSearchOverlay>
  </div>
</template>

<style scoped>
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
    "catalog": "Каталог продукции"
  },
  "en": {
    "catalog": "Product Catalog"
  }
}
</i18n>
