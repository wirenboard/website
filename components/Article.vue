<script setup lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

defineProps<{ title: string; cover: string; url: string; date: string; }>();
</script>

<template>
  <NuxtLink :to="url" class="article">
    <NuxtImg
      :src="cover"
      format="webp"
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
  color: var(--text-color);
}

.article-date {
  font-size: 16px;
  color: var(--text-color);
}
</style>