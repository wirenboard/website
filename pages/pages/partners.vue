<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';

const { t, locale } = useI18n();

useHead({
  title: t('title'),
})

const query: QueryBuilderParams = { path: '/_partners/software', where: [{  _locale: locale.value }], sort: [{ title: 1 }, { priority: 1 }] }
</script>

<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div class="partners">
        <template v-for="(partner, i) in list" :key="partner._path">
          <Partner v-bind="partner">
            <ContentRendererMarkdown :value="partner" />
          </Partner>

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
