<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue';

type Url = string;
type Title = string;
type Cover = string;
type Video = [Url, Title, Cover];

const props = defineProps<{ data: Video[]; }>();
</script>

<template>
  <div class="videoGallery" v-if="data.length">
    <div v-for="video in data" :key="video[0]">
      <VideoPlayer
        :url="video[0]"
        :cover="video[2]"
        :height="162"
        width="100%"
      />
      <div class="videoGallery-title" v-if="video[1]">{{ video[1] }}</div>
    </div>
  </div>
</template>

<style>
.videoGallery {
  gap: 18px;
  max-width: 100%;
  clear: both;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: fit-content;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 510px) {
    grid-template-columns: 1fr;
  }
}

.videoGallery-title {
  font-size: 17px;
}
</style>
