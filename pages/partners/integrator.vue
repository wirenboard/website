<script lang="ts" setup>
import type { MarkdownRoot, QueryBuilderParams } from '@nuxt/content';

const { t, locale } = useI18n();

useHead({
  title: t('title'),
})

const query: QueryBuilderParams = { path: '/_partners/integrator', where: [{  _locale: locale.value }], sort: [{ sort: 1 }] };

const { data } = await useAsyncData('home', () => queryContent(query.path).find())
</script>

<template>
  <Map :items="data" />

  <ContentList :query="query">
    <template #default="{ list }">
      <div class="partners">
        <template v-for="(article, i) in list" :key="article._path">
          <ContentRendererMarkdown :value="article.body as MarkdownRoot" v-if="article._partial" />
          <hr class="partners-separator" v-if="i !== list.length - 1" />
        </template>
      </div>
    </template>
  </ContentList>
</template>

<style>
.partners {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.partners-separator {
  margin: 0;
}
</style>

<i18n>
{
  "ru": {
    "title": "Партнёры — Wiren Board"
  },
  "en": {
    "title": "Partners — Wiren Board"
  }
}
</i18n>
