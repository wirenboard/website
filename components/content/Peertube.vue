<script setup lang="ts">
const props = defineProps<{ url: string; width?: number; height?: number; float?: 'right' | 'left' }>();
const url = new URL(props.url);
const id = url.pathname.split('/').at(-1);
const start = url.searchParams.get('start');

const src = new URL(`https://peertube.wirenboard.com/videos/embed/${id}`);
src.searchParams.append('warningTitle', '0');
src.searchParams.append('amp;p2p', '0');
if (start) {
   src.searchParams.append('start', `${parseInt(start)}s`);
}
</script>

<template>
   <iframe
      class="peertube"
      :class="{ 'peertube-floatRight': float === 'right', 'peertube-floatLeft': float === 'left' }"
      :width="width || 500"
      :height="height || 280"
      :style="`${width || 500 ? `max-width: ${width || 500}px;` : ''}`"
      :src="src.href"
      frameborder="0"
      allowfullscreen
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
   />
</template>

<style>
.peertube {
  @media(max-width: 650px) {
    width:350px !important;
    height: 198px !important
  }

  @media(max-width: 350px) {
    width:250px !important;
    height: 141px !important
  }
}

.peertube-floatLeft {
  float: left;
  margin-right: 12px;

  @media (max-width: 768px) {
    float: none;
    margin-right: 0;
  }
}

.peertube-floatRight {
  float: right;
  margin-left: 12px;

  @media (max-width: 768px) {
    float: none;
    margin-left: 0;
  }
}
</style>
