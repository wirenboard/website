<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue';
import type { Video } from '~/common/types';

withDefaults(defineProps<{ data: Video[]; view?: 'tile' | 'list' }>(), {
  view: 'tile',
});

const getUrl = (url: string, time: string) => {
  const [min, sec] = time.split(':');
  return `${url}?start=${min}m${sec}s&autoplay=1&p2p=0`;
};
</script>

<template>
  <div
    v-if="data.length"
    class="videoGallery"
    :class="{
      'videoGallery-list': view === 'list',
      'videoGallery-tile': view === 'tile',
    }"
  >
    <div v-for="video in data" :key="video[0]" class="videoGallery-card" >
      <div v-if="video[1]" class="videoGallery-title">{{ video[1] }}</div>
      <VideoPlayer
        className="videoGallery-video"
        :url="video[0]"
        :cover="getImageUrl(video[2])"
        :height="162"
        width="100%"
      />
      <ul v-if="view === 'list' && video[3] && Array.isArray(video[3]) && video[3].length" class="videoGallery-navigation">
        <li v-for="item in video[3]" class="videoGallery-navItem" :key="item.time + item.title">
          <a :href="getUrl(video[0], item.time)" class="videoGallery-navItemLink" target="_blank"></a>
          {{item.time}} {{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.videoGallery {
  gap: 18px;
  max-width: 100%;
  clear: both;
}

.videoGallery-tile {
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

.videoGallery-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.videoGallery-title {
  font-size: 17px;
  grid-area: title;
}

.videoGallery-navigation {
  grid-area: navigation;
  margin: 0;
  padding: 0;
  max-height: 400px;
  overflow: auto;
  scrollbar-gutter: stable;

  @media (max-width: 768px) {
    max-height: unset;
    overflow: unset;
  }
}

.videoGallery-video {
  grid-area: video;
  height: fit-content;
}

.videoGallery-navItem {
  list-style: none;
  border: 1px solid var(--border-color);
  padding: 6px 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  transition: background 0.2s;
  margin-right: 4px;
}

.videoGallery-navItem:hover {
  background: #f5f5f5;
}

.videoGallery-navItemLink {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
}

.videoGallery-tile .videoGallery-card {
  display: grid;
  grid-template-areas: "video"
                       "title";
}

.videoGallery-list .videoGallery-card {
  display: grid;
  grid-template-columns: 360px 1fr;
  grid-template-areas: "title title"
                       "video navigation";
  width: 100%;
  gap: 12px 24px;
  padding: 18px 2px 18px 18px;
  border: 1px solid var(--border-color);
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 18px;
    grid-template-columns: 1fr;
    grid-template-areas: "title"
                         "video"
                         "navigation";
  }
}

.videoGallery-list .videoGallery-title {
  font-weight: bold;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 6px;
}

.videoGallery-list .videoGallery-video {
  overflow: hidden;
  border-radius: 6px;
}

.videoGallery-list .videoGallery-video img {
  height: 100%;
}
</style>
