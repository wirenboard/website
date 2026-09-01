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
        {{ locale === 'ru' ? dayjs(date).locale('ru').format('D MMMM YYYY') : dayjs(date).format('MMM D, YYYY') }}
      </time>
    </div>
  </a>
</template>

<style scoped>
.article {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid var(--card-border-color);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  @media (min-width: 460px) and (max-width: 940px) {
    flex-direction: row;
  }
}

.article:hover {
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-2px);
}

.article:hover .article-title {
  color: var(--link-color);
}

.article-cover {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
  flex-shrink: 0;

  @media (min-width: 460px) and (max-width: 940px) {
    width: 220px;
    max-width: 220px;
    aspect-ratio: auto;
    min-height: 100%;
  }
}

.article > div {
  padding: 16px;
}

.article-title {
  margin: 0 0 8px;
  font-weight: bold;
  color: var(--heading-color);
  line-height: 1.35;
  transition: color 0.15s ease;
}

.article-date {
  font-size: 14px;
  color: var(--text-secondary-color);
}
</style>
