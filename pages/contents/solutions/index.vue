<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';
import { categories } from '~/common/solution_categories';
import { ArticleType } from '~/common/constants';
import SelectButton from '~/components/SelectButton.vue';

const { t, locale } = useI18n();
const route = useRoute();

useHead({
  title: t('title'),
});

const filter = ref(t('filter_category'));
const filterDate = ref('filter_asc');
const options = ref([t('filter_category'), t('filter_date')]);
const filterDates = ['filter_asc', 'filter_desc'];

const query: QueryBuilderParams = { path: '/_solutions', where: [{ _locale: locale.value }] }
const { data } = await useAsyncData('solutions', () => queryContent(query.path).where({ _locale: locale.value }).find());

if (!data.value?.length) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}
</script>

<template>
  <div class="articles">
    <div v-if="filter === 'По категориям'" class="articles-content">
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
          <Article v-bind="article as any" v-for="article in data!.filter((item) => item.category === category.name).sort((a, b) => new Date(b.date) - new Date(a.date) )" :key="article._path" />
        </div>

        <hr v-if="category.type !== ArticleType.WithSubCategories && i !== flattenCategories(categories, locale).length - 1" class="articles-separator" />
      </template>
    </div>

    <div v-else class="articles-content">
      <div class="articles-list">
        <Article v-bind="article as any" v-for="article in data.sort((a, b) => filterDate === 'filter_asc' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date) )" :key="article._path" />
      </div>
    </div>

    <aside>
      <div class="articles-filter">
        <SelectButton v-model="filter" :options="options" />

        <div class="articles-filterContent">
          <ul v-if="filter === 'По категориям'">
            <li v-for="category in categories[locale]" :key="category.name">
              <div @click="scrollToElementById(category.name)">{{ category.label }}</div>
              <ul v-if="category.sub_category">
                <li v-for="category in category.sub_category" :key="category.name">
                  <div @click="scrollToElementById(category.name)">{{ category.label }}</div>
                </li>
              </ul>
            </li>
          </ul>
          <div v-else>
            <div v-for="filter in filterDates" :key="filter" class="articles-filterDate">
              <RadioButton v-model="filterDate" :inputId="filter" :value="filter" />
              <label :for="filter" class="ml-2">{{ t(filter) }}</label>
            </div>
          </div>
        </div>
      </div>
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

.articles-filter {
  position: sticky;
  top: 16px;
}

.articles-filterContent {
  margin-top: 12px;
}

.articles-filter ul {
  margin: 0;
  padding-left: 24px;
  color: var(--link-color);
}

.articles-filter li::marker {
  color: var(--text-color);
}

.articles-filter ul ul {
  padding-left: 22px;
}

.articles-filter ul li div {
  width: fit-content;
}

.articles-filter ul li div:hover {
  cursor: pointer;
  text-decoration: underline;
}

.articles-filterDate {
  display: flex;
  gap: 4px;
}

.articles-filterDate label {
  cursor: pointer;
}
</style>

<i18n>
{
  "ru": {
    "title": "Статьи — Wiren Board",
    "filter_category": "По категориям",
    "filter_date": "По дате публикации",
    "filter_asc": "Сначала новые",
    "filter_desc": "Сначала старые"
  },
  "en": {
    "title": "Solutions — Wiren Board",
    "filter_category": "By category",
    "filter_date": "By date",
    "filter_asc": "New ones first",
    "filter_desc": "Old ones first"
  }
}
</i18n>
