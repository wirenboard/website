<script setup lang="ts">
const props = defineProps<{ url: string; width?: number; height?: number; float?: 'right' | 'left' }>();
const url = new URL(props.url);
const id = url.searchParams.get('v');
const start = url.searchParams.get('t');
</script>

<template>
  <iframe
    class="youtube"
    :class="{ 'youtube-floatRight': float === 'right', 'youtube-floatLeft': float === 'left' }"
    :width="width || 500"
    :height="height || 280"
    :style="`${width || 500 ? `max-width: ${width || 500}px;` : ''}`"
    :src="`https://www.youtube.com/embed/${id}${start ? `?start=${parseInt(start)}` : ''}`"
    frameborder="0"
    allowfullscreen
  />
</template>

<style>
.youtube {
  @media(max-width: 650px) {
    width:350px !important;
    height: 198px !important
  }

  @media(max-width: 350px) {
    width:250px !important;
    height: 141px !important
  }
}

.youtube-floatLeft {
  float: left;
  margin-right: 12px;

  @media (max-width: 768px) {
    float: none;
    margin-right: 0;
  }
}

.youtube-floatRight {
  float: right;
  margin-left: 12px;

  @media (max-width: 768px) {
    float: none;
    margin-left: 0;
  }
}
</style>
