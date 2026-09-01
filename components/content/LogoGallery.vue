<script setup lang="ts">
import ChevronDownIcon from '~/assets/icons/chevron-down.svg';
import ChevronUpIcon from '~/assets/icons/chevron-up.svg';
import type { LogoLink } from '~/common/types';

const { t } = useI18n();
const props = defineProps<{ data: LogoLink[] }>();
const isOpen = ref(false);
const visibleItems = computed(() => isOpen.value ? props.data : props.data.slice(0, 8));

const toggleSpoiner = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="logoGallery-container">
    <a
      v-for="([src, link, caption], i) in visibleItems"
      :href="link"
      target="_blank"
      class="logoGallery-link"
      :key="i"
    >
      <NuxtImg
        :src="getImageUrl(src)"
        class="logoGallery-photo"
        loading="lazy"
        :alt="caption"
      />
    </a>
  </div>

  <div v-if="data.length > 8" class="logoGallery-spoilerContainer">
    <button
      class="logoGallery-spoiler"
      @click="toggleSpoiner"
    >
      {{ isOpen ? t('hide') : t('show') }}
      <ChevronUpIcon class="logoGallery-chevron" v-if="isOpen" />
      <ChevronDownIcon class="logoGallery-chevron" v-else />
    </button>
  </div>
</template>

<style scoped>
.logoGallery-container {
  gap: 24px;
  max-width: 100%;
  clear: both;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.logoGallery-link {
  height: 100px;
  min-width: 100px;
  width: calc(25% - 18px);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none !important;
}

.logoGallery-link:focus .logoGallery-photo,
.logoGallery-link:hover .logoGallery-photo {
  filter: none;
  opacity: 1;
}

.logoGallery-photo {
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 70px;
  object-fit: contain;
  flex-shrink: 0;
  filter: grayscale(100%);
  opacity: 0.3;
  transition: opacity 0.5s, filter 0.5s;
}

.logoGallery-spoilerContainer {
  position: relative;
  width: 100%;
  margin: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logoGallery-spoilerContainer::after {
  content: "";
  position: absolute;
  top: 55%;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--border-color);
  transform: translateY(-50%);
}

.logoGallery-spoiler {
  all: unset;
  display: flex;
  gap: 6px;
  background: #fff;
  color: #cfcfcf;
  font-size: 28px;
  cursor: pointer;
  z-index: 1;
  padding: 0 12px;
  transition: color 0.5s;
}

.logoGallery-spoiler:hover,
.logoGallery-spoiler:focus {
  color: var(--text-color);
}

.logoGallery-chevron {
  stroke: #cfcfcf;
  color: transparent;
  transition: stroke 0.5s;
}

.logoGallery-spoiler:focus .logoGallery-chevron,
.logoGallery-spoiler:hover .logoGallery-chevron {
  stroke: var(--text-color);
}
</style>

<i18n>
{
  "ru": {
    "show": "Развернуть",
    "hide": "Свернуть"
  },
  "en": {
    "show": "Show",
    "hide": "Hide"
  }
}
</i18n>
