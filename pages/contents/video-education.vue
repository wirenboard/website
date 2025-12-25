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
  <div class="" id="video">
    <VideoGallery :data="data.map(video => [video.url, video.title, video.cover, video.chapters]) as Video[]" view="list" />
  </div>
</template>

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
