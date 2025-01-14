<script setup lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import type { Article as ArticleParams } from '~/common/types';

const props = defineProps<ArticleParams>();
const route = useRoute();
const { locale } = useI18n();
const to = props.url || `${route.path}${route.path.at(-1) === '/' ? '' : '/'}${props._path?.split('/').at(-1)}`;
</script>

<template>
  <a :href="to" class="article">
    <NuxtImg
      :src="cover"
      class="article-cover"
      loading="lazy"
      :alt="title"
    />
    <div>
      <h4 class="article-title">{{ title }}</h4>
      <time :datetime="date" class="article-date">
        {{ locale === 'ru' ? dayjs(date).locale('en').format('D MMMM YYYY') : dayjs(date).format('MMM D, YYYY') }}
      </time>
    </div>
  </a>
</template>

<style scoped>
.article {
  text-decoration: none;

  @media (min-width: 460px) and (max-width: 940px) {
    display: flex;
    gap: 12px;
  }
}

.article:hover .article-title {
  color: var(--link-color);
}

.article-cover {
  width: 100%;
  height: 160px;
  border-radius: 12px;
  text-decoration: none;
  object-fit: cover;
  border: 1px solid var(--gray-color);
  min-height: 125px;

  @media (min-width: 400px) and (max-width: 940px) {
    width: 220px;
    height: auto;
  }

  @media (max-width: 460px) {
    width: 100%;
    height: 160px;
  }
}

.article-title {
  margin: 6px 0 12px;
  font-weight: bold;
  color: var(--text-color);
}

.article-date {
  font-size: 16px;
  color: var(--text-color);
}
</style>
