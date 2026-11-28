<script lang="ts" setup>
import type { CatalogListResponse } from '~/common/types';

const { t, locale } = useI18n();

// При SSR всё, что нужно странице, PHP уже передал в заголовке X-WB-Catalog-List
// (useCatalogListPrefill): иначе Nuxt при отрисовке сам шёл за списком категорий, а затем ещё по
// одному запросу на каждую категорию — обратно в тот же PHP, который в это время ждёт ответа
// Nuxt (см. CatalogController::catalogListPrefillHeaders() на бэке). Без подсказки — один
// запрос в ng/api/v1/catalog/list вместо прежнего N+1.
const catalogListPrefill = useCatalogListPrefill();
const { data } = await useApi<CatalogListResponse>('/catalog/list/', null, {
  prefill: () => catalogListPrefill,
});

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Categories not found' });
}

const categories = computed(() => data.value!.categories);
const categoryDetails = computed(() => data.value!.categoryDetails);

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
