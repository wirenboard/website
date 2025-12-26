<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';
import VideoGallery from '~/components/content/VideoGallery.vue';
import type { Video } from '~/common/types';

const { t, locale } = useI18n();
const route = useRoute();

useHead({
  title: t('title'),
});

const query: QueryBuilderParams = { path: '/video-education', where: [{ _locale: locale.value }] };
const { data: description } = await useLocalizedData('pages/video-education');
const { data } = await useAsyncData('video', () => queryContent(query.path).where({ _locale: locale.value }).find());

defineOptions({
  name: 'VideoEducation',
});

if (!data.value?.length) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}
</script>

<template>
  <div id="video-education" class="videoEducation">
    <ContentRenderer>
      <ContentRendererMarkdown :value="description" />
    </ContentRenderer>

    <VideoGallery :data="data?.map(video => [video.url, video.title, video.cover, video.chapters]) as Video[]" view="list" />
  </div>
</template>

<style>
.videoEducation h2 a {
  color: var(--text-color);
  text-decoration: none;
  cursor: text;
}
</style>

<i18n>
{
  "ru": {
    "title": "Обучающие видео"
  },
  "en": {
    "title": "Educational videos"
  }
}
</i18n>
