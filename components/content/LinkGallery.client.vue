<script setup lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import type { PhotoLink } from '~/common/types';

const props = defineProps<{ data: PhotoLink[]; }>();
const { locale } = useI18n();
const numberOfGalleryColumns = useColumns(props.data.length, 4, [460, 600, 800]);
</script>

<template>
  <div class="linkGallery-container">
    <a v-for="([link, src, caption, date], i) in data" :href="link" class="linkGallery-link" :key="i">
      <NuxtImg
        :src="getImageUrl(src)"
        class="linkGallery-photo"
        loading="lazy"
        :alt="caption"
      />
      <div>
        <div class="linkGallery-title">{{ caption }}</div>
        <time v-if="date" :datetime="date" class="linkGallery-date">
          {{ locale === 'ru' ? dayjs(date).locale('ru').format('D MMMM YYYY') : dayjs(date).format('MMM D, YYYY') }}
        </time>
      </div>
    </a>
  </div>
</template>

<style scoped>
.linkGallery-container {
  gap: 12px;
  max-width: 100%;
  clear: both;
  display: grid;
  grid-template-columns: repeat(v-bind('numberOfGalleryColumns'), 1fr);
  width: 100%;
}

.linkGallery-link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
}

.linkGallery-link:focus {
  outline: none;
}

.linkGallery-link:focus .linkGallery-title,
.linkGallery-link:hover .linkGallery-title {
  color: var(--link-color);
}

.linkGallery-photo {
  width: 100%;
  height: 160px;
  border-radius: 12px;
  text-decoration: none;
  object-fit: cover;
  border: 1px solid var(--image-border-color);
  min-height: 125px;
  flex-shrink: 0;

  @media (min-width: 400px) and (max-width: 940px) {
    width: 100%;
    max-width: 220px;
    height: 100%;
    max-height: 126px;
  }

  @media (max-width: 460px) {
    width: 100%;
    height: 160px;
  }
}

.linkGallery-title {
  margin: 6px 0 12px;
  color: var(--text-color);
}

.linkGallery-date {
  font-size: 16px;
  color: var(--text-color);
}
</style>
