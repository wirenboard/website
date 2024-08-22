<script setup lang="ts">
import Photo from './Photo.vue';

const props = defineProps<{ data: [string, string, number][]; }>();

const numberOfColumns = props.data.length >= 5 ? 5 : props.data.length;
</script>

<template>
  <div class="gallery">
    <div v-for="([src, caption, width], i) in data" :key="i">
      <Photo :src="src" :caption="caption" :width="width" />
    </div>
  </div>
</template>

<style>
.gallery {
  gap: 12px;
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
