<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
import { slug } from 'github-slugger';
import MarkerIcon from '~/assets/marker.svg'

const props = defineProps<{ items: ParsedContent[] | null, center: number[], zoom: number }>();

const map = ref();
// new props can conflict with setView method, so we hardcode them
const initialCenter = props.center;
const initialZoom = props.zoom;

watch(() => props.center, () => {
  map.value.leafletObject.setView(props.center, props.zoom);
});

const scrollToElement = (title: string) => {
  document.querySelector(`#${slug(title)}`)?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <div class="map">
    <LMap
      ref="map"
      :zoom="initialZoom"
      :center="initialCenter"
      :use-global-leaflet="false"
    >
      <LMarker
        v-for="(item, index) in items"
        :key="index"
        :lat-lng="item.coordinates"
      >
        <LIcon
          :icon-size="[34, 34]"
          :icon-anchor="[17, 33]"
          :popup-anchor="[0, 4]">
          <MarkerIcon
            :fontControlled="false"
          />
        </LIcon>
        <LPopup>
          <NuxtImg :src="item.logo" class="partner-logo" />
          <strong class="map-detailsLink" @click="scrollToElement(item.title as string)">{{ item.title }}</strong>
        </LPopup>
      </LMarker>
      <LTileLayer
        :no-wrap="true"
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        layer-type="base"
      />
    </LMap>
  </div>
</template>

<style>
.map {
  height: 400px;

  @media (max-width: 500px) {
    height: 200px;
  }
}

.map-detailsLink {
  margin-top: 6px;
  color: var(--link-color);
  cursor: pointer;
}

.map-detailsLink:hover {
  text-decoration: underline;
}

.leaflet-control-attribution {
  display: none;
}

.leaflet-container {
  z-index: 1;
  outline: none;
}

.leaflet-div-icon {
  background: none;
  border: none;
  color: #5cb300;
}
</style>