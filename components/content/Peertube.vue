<script setup lang="ts">
const props = defineProps<{ url: string; width?: number; height?: number; float?: 'right' | 'left'; cover?: string; }>();
const url = new URL(props.url);
const isShowCover = ref(!!props.cover);
const isAutoplay = ref(0);
const video = ref();
const id = url.pathname.split('/').at(-1);
const start = url.searchParams.get('start');

const src = computed(() => {
   const source = reactive(new URL(`https://peertube.wirenboard.com/videos/embed/${id}`));
   source.searchParams.set('autoplay', String(isAutoplay.value));
   source.searchParams.append('warningTitle', '0');
   source.searchParams.append('amp;p2p', '0');
   if (start) {
      source.searchParams.append('start', `${parseInt(start)}s`);
   }

   return source.href
});

const playVideo = () => {
   isAutoplay.value = 1;
   isShowCover.value = false;
};
</script>

<template>
   <div
      v-if="isShowCover"
      class="peertube-cover"
      :class="{ 'peertube-floatRight': float === 'right', 'peertube-floatLeft': float === 'left' }"
      :style="`${width || 500 ? `max-width: ${width || 500}px;` : ''}`"
   >
      <svg class="peertube-coverPlay" width="80" height="80" viewBox="0 0 512 512" fill="#222F3D" style="font-size: 2.88em;">
         <path fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"></path>
         <path d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z"></path>
      </svg>
      <img
         :src="cover"
         class="peertube"
         :width="width || 500"
         :height="height || 280"
         :style="`${width || 500 ? `max-width: ${width || 500}px;` : ''}`"
         @click="playVideo"
         alt=""
      />
   </div>

   <iframe
      ref="video"
      v-if="!isShowCover"
      class="peertube"
      :class="{ 'peertube-floatRight': float === 'right', 'peertube-floatLeft': float === 'left' }"
      :width="width || 500"
      :height="height || 280"
      :style="`${width || 500 ? `max-width: ${width || 500}px;` : ''}`"
      :src="src"
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

.peertube-cover {
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}

.peertube-coverPlay {
   position: absolute;
   color: #fff
}

.peertube-cover:hover .peertube-coverPlay {
   color: var(--primary-color)
}
</style>
