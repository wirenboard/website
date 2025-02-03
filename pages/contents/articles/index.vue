<script lang="ts" setup>
import { categories } from '~/common/article_categories';
import { ArticleType, FilterDateParams, FilterTypeKeys, FilterTypeParams } from '~/common/constants';
import type { QueryBuilderParams } from '@nuxt/content';

const { t, locale } = useI18n();
const route = useRoute();

useHead({
  title: t('title'),
});

const filter = ref(Object.keys(FilterTypeParams).at(0));
const filterDate = ref(Object.keys(FilterDateParams).at(0));

const query: QueryBuilderParams = { path: '/_articles', where: [{ _locale: locale.value }] }
const { data } = await useAsyncData('articles', () => queryContent(query.path).where({ _locale: locale.value }).find());

if (!data.value?.length) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}
</script>

<template>
  <div class="articles page-content" id="articles">
    <div v-if="filter === FilterTypeKeys.ByCategory" class="articles-content">
      <template v-for="(category, i) in flattenCategories(categories, locale)" :key="category.name">
        <h3
          v-if="category.type === ArticleType.SubCategory"
          class="articles-title"
          :id="category.name">
          <a :href="`#${category.name}`">{{ category.label }}</a>
        </h3>
        <h2
          v-else
          class="articles-title"
          :id="category.name">
          <a :href="`#${category.name}`">{{ category.label }}</a>
        </h2>

        <div class="articles-list" v-if="data!.filter((item) => item.category === category.name).length">
          <Article v-bind="article as any" v-for="article in getFilteredByCategory(data, category)" :key="article._path" />
        </div>

        <hr v-if="category.type !== ArticleType.WithSubCategories && i !== flattenCategories(categories, locale).length - 1" class="articles-separator" />
      </template>
    </div>

    <div v-else class="articles-content">
      <div class="articles-list">
        <Article v-bind="article as any" v-for="article in getFilteredByDate(data, filterDate)" :key="article._path" />
      </div>
    </div>

    <aside class="sidebar">
      <CategoryFilter :categories="categories" v-model:filter="filter" v-model:filter-date="filterDate" page-id="articles" />
    </aside>
  </div>
</template>

<style>
.articles {
  display: flex;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
}

.articles-content {
  flex-grow: 1;
}

.articles-title {
  line-height: normal;
  scroll-margin-top: var(--app-bar-height);
}

.articles-title:first-child {
  margin-top: 0;
}

h2.articles-title {
  font-size: 27px;
}

h3.articles-title {
  font-size: 21px;
}

.articles-title a {
  color: var(--text-color);
}

.articles-title a:hover {
  color: var(--link-color);
}

.articles-title a:hover::before {
  content: '#';
  position: absolute;
  margin-left: -18px;
}

@media (max-width: 1340px) {
  .articles-title a:hover::before {
    content: '';
  }
}

.articles-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;


  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
}

.articles-separator {
  margin: 24px 0;
}
</style>

<i18n>
{
  "ru": {
    "title": "Статьи"
  },
  "en": {
    "title": "Articles"
  }
}
</i18n>
