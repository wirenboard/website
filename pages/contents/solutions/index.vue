<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';
import { categories } from '~/common/solution_categories';
import { ArticleType, FilterDateParams, FilterTypeKeys, FilterTypeParams } from '~/common/constants';

const { t, locale } = useI18n();
const route = useRoute();

useHead({
  title: t('title'),
});

const filter = ref(Object.keys(FilterTypeParams).at(0));
const filterDate = ref(Object.keys(FilterDateParams).at(0));

const query: QueryBuilderParams = { path: '/solutions', where: [{ _locale: locale.value }] }
const { data } = await useAsyncData('solutions', () => queryContent(query.path).where({ _locale: locale.value }).find());

if (!data.value?.length) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}
</script>

<template>
  <div class="solutions page-content" id="solutions">
    <div v-if="filter === FilterTypeKeys.ByCategory" class="solutions-content">
      <template v-for="(category, i) in flattenCategories(categories, locale)" :key="category.name">
        <h3
          v-if="category.type === ArticleType.SubCategory"
          class="solutions-title"
          :id="category.name">
          <a :href="`#${category.name}`">{{ category.label }}</a>
        </h3>
        <h2
          v-else
          class="solutions-title"
          :id="category.name">
          <a :href="`#${category.name}`">{{ category.label }}</a>
        </h2>

        <div class="solutions-list" v-if="data!.filter((item) => item.category === category.name).length">
          <Article v-bind="article as any" v-for="article in getFilteredByCategory(data, category)" :key="article._path" />
        </div>

        <hr v-if="category.type !== ArticleType.WithSubCategories && i !== flattenCategories(categories, locale).length - 1" class="solutions-separator" />
      </template>
    </div>

    <div v-else class="solutions-content">
      <div class="solutions-list">
        <Article v-bind="article as any" v-for="article in getFilteredByDate(data, filterDate)" :key="article._path" />
      </div>
    </div>

    <aside class="sidebar">
      <CategoryFilter :categories="categories" v-model:filter="filter" v-model:filter-date="filterDate" page-id="solutions" />
    </aside>
  </div>
</template>

<style>
.solutions {
  display: flex;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
}

.solutions-content {
  flex-grow: 1;
}

.solutions-title {
  line-height: normal;
  scroll-margin-top: var(--app-bar-height);
}

.solutions-title:first-child {
  margin-top: 0;
}

h2.solutions-title {
  font-size: 27px;
}

h3.solutions-title {
  font-size: 21px;
}

.solutions-title a {
  color: var(--text-color);
}

.solutions-title a:hover {
  color: var(--link-color);
}

.solutions-title a:hover::before {
  content: '#';
  position: absolute;
  margin-left: -18px;
}

@media (max-width: 1340px) {
  .solutions-title a:hover::before {
    content: '';
  }
}

.solutions-list {
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

.solutions-separator {
  margin: 24px 0;
}
</style>

<i18n>
{
  "ru": {
    "title": "Примеры внедрений"
  },
  "en": {
    "title": "Solutions"
  }
}
</i18n>
