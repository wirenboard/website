<script setup lang="ts">
import Photo from './Photo.vue';

const props = defineProps<{ data: [string, string, number][]; }>();

const numberOfColumns = props.data.length >= 5 ? 5 : props.data.length;
</script>

<template>
  <div class="gallery">
    <Photo :src="src" :caption="caption" :height="300" isGallery v-for="([src, caption], i) in data" :key="i"/>
  </div>
</template>

<style>
.gallery {
  gap: 0 12px;
  max-width: 100%;
  clear: both;
  display: grid;
  grid-template-columns: repeat(v-bind('numberOfColumns'), 1fr);
  width: fit-content;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}
</style>
