<script lang="ts" setup>
import type { MarkdownRoot, QueryBuilderParams } from '@nuxt/content';

const { t, locale } = useI18n();

const data = await useLocalizedData('jobs');

useContentHead(data);

const query: QueryBuilderParams = { path: '/jobs/_includes', where: [{ actual: true, _locale: locale.value }] }
</script>

<template>
  <ContentRenderer>
    <ContentRendererMarkdown :value="data" />
  </ContentRenderer>

  <ContentList :query="query">
    <template #default="{ list }">
      <div v-for="article in list" :key="article._path">
        <ContentRendererMarkdown :value="article.body as MarkdownRoot" v-if="article._partial" />
      </div>
    </template>

    <template #not-found>
      <p>{{t('noVacancies')}}</p>
    </template>
  </ContentList>
</template>

<i18n>
{
  "ru": {
    "noVacancies": "Сейчас у нас нет актуальных вакансий"
  },
  "en": {
    "noVacancies": "We don't have any current vacancies at the moment"
  }
}
</i18n>
