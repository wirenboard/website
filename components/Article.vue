<script setup lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import type { Article as ArticleParams } from '~/common/types';

defineProps<ArticleParams>();
</script>

<template>
  <NuxtLink :to="url || `${$route.path}/${_path.split('/').at(-1)}`" class="article">
    <NuxtImg
      :src="cover"
      class="article-cover"
      loading="lazy"
      :alt="title"
    />
    <div>
      <h4 class="article-title">{{ title }}</h4>
      <time :datetime="date" class="article-date">{{ dayjs(date).locale('ru').format('D MMMM YYYY') }}</time>
    </div>
  </NuxtLink>
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
