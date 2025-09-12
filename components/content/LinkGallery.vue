<script setup lang="ts">
import type { PhotoLink } from '~/common/types';

const props = defineProps<{ data: PhotoLink[]; }>();

const numberOfGalleryColumns = computed(() => props.data.length >= 4 ? 4 : props.data.length);
</script>

<template>
  <div class="linkGallery-container">
    <a v-for="([link, caption, src], i) in data" :href="link" class="linkGallery-link" :key="i">
      <NuxtImg
        :src="getImageUrl(src)"
        class="linkGallery-photo"
        loading="lazy"
        :alt="caption"
      />
      <div>
        <h4 class="linkGallery-title">{{ caption }}</h4>
      </div>
    </a>
  </div>
</template>

<style scoped>
.linkGallery-container {
  gap: 0 12px;
  max-width: 100%;
  clear: both;
  display: grid;
  grid-template-columns: repeat(v-bind('numberOfGalleryColumns'), 1fr);
  width: 100%;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

.linkGallery-link {
  text-decoration: none;

  @media (min-width: 460px) and (max-width: 940px) {
    display: flex;
    gap: 12px;
  }
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
  border: 1px solid var(--gray-color);
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
  font-weight: bold;
  color: var(--text-color);
}
</style>
