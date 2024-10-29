<script setup lang="ts">
const props = defineProps<{ url: string; width?: number | string; height?: number; float?: 'right' | 'left'; cover?: string; }>();
const src = computed(() => {
  const url = new URL(props.url);
  const isYoutube = props.url.includes('youtube');
  const id = isYoutube
    ? url.searchParams.get('v')
    : url.pathname.split('/').at(-1);
  const start = url.searchParams.get('start');
  const source = reactive(new URL(isYoutube ? 'https://youtube.com' : 'https://peertube.wirenboard.com'));

  if (isYoutube) {
    source.pathname = 'embed/'
    if (url.searchParams.get('list')) {
      source.searchParams.append('list', url.searchParams.get('list'));
    }
  } else {
    if (url.pathname.includes('video-playlists')) {
      source.pathname = 'video-playlists/embed/'
    } else {
      source.pathname = 'videos/embed/'
    }
    source.searchParams.append('warningTitle', '0');
    source.searchParams.append('amp;p2p', '0');
  }
  source.pathname += id
  if (start) {
    source.searchParams.append('start', `${parseInt(start)}s`);
  }
  return source.href
});

const width = Number.isInteger(props.width) ? `${(props.width || 500)}px` : props.width;
</script>

<template>
  <a
    v-if="cover"
    :href="url"
    target="_blank"
    class="videoPlayer-cover"
    :class="{ 'videoPlayer-floatRight': float === 'right', 'videoPlayer-floatLeft': float === 'left' }"
    :style="`${width ? `max-width: ${width}` : ''}`"
  >
    <svg class="videoPlayer-coverPlay" width="80" height="80" viewBox="0 0 512 512" fill="#222f3d">
      <path fill="currentColor" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" />
      <path d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z" />
    </svg>
    <NuxtImg
      :src="cover"
      class="videoPlayer videoPlayer-coverImage"
      :width="width || 500"
      :height="height || 280"
      :style="`${width ? `max-width: ${width || 500}px;` : ''}`"
      loading="lazy"
      alt=""
    />
  </a>

  <iframe
    v-if="!cover"
    class="videoPlayer"
    :class="{ 'videoPlayer-floatRight': float === 'right', 'videoPlayer-floatLeft': float === 'left' }"
    :width="width || 500"
    :height="height || 280"
    :style="`${width ? `max-width: ${width}` : ''}`"
    :src="src"
    frameborder="0"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
    sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-forms"
  />
</template>

<style>
.videoPlayer {
  @media(max-width: 650px) {
    width:350px !important;
    height: 198px !important;
  }
  @media(max-width: 350px) {
    width:250px !important;
    height: 141px !important;
  }
}

.videoPlayer-floatLeft {
  float: left;
  margin-right: 12px;
  @media (max-width: 768px) {
    float: none;
    margin-right: 0;
  }
}

.videoPlayer-floatRight {
  float: right;
  margin-left: 12px;
  @media (max-width: 768px) {
    float: none;
    margin-left: 0;
  }
}

.videoPlayer-cover {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.videoPlayer-coverImage {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.videoPlayer-coverPlay {
  position: absolute;
  color: #fff;
  opacity: 0.8;
}

.videoPlayer-cover:hover .videoPlayer-coverPlay {
  color: var(--primary-color);
  fill: #fff;
  opacity: 0.9;
}
</style>
