<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';
import { videoCategories } from '~/common/video_categories';
import { ArticleType, FilterDateParams, FilterTypeKeys, FilterTypeParams } from '~/common/constants';
import VideoGallery from '~/components/content/VideoGallery.vue';
import type { Video } from '~/common/types';

const { t, locale } = useI18n();
const route = useRoute();

useHead({
  title: t('title'),
});

const filter = ref(Object.keys(FilterTypeParams).at(0));
const filterDate = ref(Object.keys(FilterDateParams).at(0));

const query: QueryBuilderParams = { path: '/video', where: [{ _locale: locale.value }] };
const { data } = await useAsyncData('video', () => queryContent(query.path).where({ _locale: locale.value }).find());

defineOptions({
  name: 'Video',
});

if (!data.value?.length) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}

const flattenedCategories = computed(() => flattenCategories(videoCategories, locale.value));
</script>

<template>
  <div class="video page-content" id="video">
    <div v-if="filter === FilterTypeKeys.ByCategory">
      <template v-for="(category, i) in flattenedCategories" :key="category.name">
        <h3
          v-if="category.type === ArticleType.SubCategory"
          class="video-title"
          :id="category.name">
          <a :href="`#${category.name}`">{{ category.label }}</a>
        </h3>
        <h2
          v-else
          class="video-title"
          :id="category.name">
          <a :href="`#${category.name}`">{{ category.label }}</a>
        </h2>

        <VideoGallery :data="getFilteredByCategory(data, category).map(video => [video.url, video.title, video.cover]) as Video[]" view="tile" />

        <hr v-if="category.type !== ArticleType.WithSubCategories && i !== flattenedCategories.length - 1" class="video-separator" />
      </template>
    </div>

    <VideoGallery v-else :data="getFilteredByDate(data, filterDate).map(video => [video.url, video.title, video.cover]) as Video[]" view="tile" />

    <aside class="sidebar">
      <CategoryFilter :categories="videoCategories" v-model:filter="filter" v-model:filter-date="filterDate" page-id="video" />
    </aside>
  </div>
</template>

<style>
.video {
  display: flex;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
}

.video-title {
  line-height: normal;
  scroll-margin-top: var(--app-bar-height);
}

.video-title:first-child {
  margin-top: 0;
}

h2.video-title {
  font-size: 27px;
}

h3.video-title {
  font-size: 21px;
}

.video-title a {
  color: var(--text-color);
}

.video-title a:hover {
  color: var(--link-color);
}

.video-title a:hover::before {
  content: '#';
  position: absolute;
  margin-left: -18px;
}

@media (max-width: 1340px) {
  .video-title a:hover::before {
    content: '';
  }
}

.video-separator {
  margin: 24px 0;
}
</style>

<i18n>
{
  "ru": {
    "title": "Видео"
  },
  "en": {
    "title": "Video"
  }
}
</i18n>
