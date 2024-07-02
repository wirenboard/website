<script lang="ts" setup>
import type { MarkdownRoot, QueryBuilderParams } from '@nuxt/content';

const { t, locale } = useI18n();

// const data = await useLocalizedData('jobs');

// useContentHead(data);

const query: QueryBuilderParams = { path: '/_partners', where: [{  _locale: locale.value }], sort: [{ sort: 1 }] }
</script>

<template>
  <!--  <ContentRenderer>
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>-->

  <ContentList :query="query">
    <template #default="{ list }">
      <div class="partners">
        <template v-for="article in list" :key="article._path">
          <ContentRendererMarkdown :value="article.body as MarkdownRoot" v-if="article._partial" />
        </template>
      </div>
    </template>

    <template #not-found>
      aaaaa
      <!--      <p>{{t('noVacancies')}}</p>-->
    </template>
  </ContentList>
</template>

<style>
.partners {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
</style>

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
