<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
import { slug } from 'github-slugger';
import MarkerIcon from '~/assets/icons/marker.svg';

const props = defineProps<{ items: ParsedContent[] | null, center: number[], zoom: number }>();
const emit = defineEmits(['visibleItemsChange']);

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

const onMapMove = (ev: any) => {
  setTimeout(() => {
    const visibleMarkers: string[] = [];

    const bounds = ev.target.getBounds();
    props.items?.forEach(marker => {
      if(Array.isArray(marker.coordinates[0])) {
        marker.coordinates.forEach((item: number[]) => {
          if (bounds.contains(item)) {
            visibleMarkers.push(marker._id);
          }
        })
      } else if (bounds.contains(marker.coordinates)) {
        visibleMarkers.push(marker._id);
      }
    });

    emit('visibleItemsChange', visibleMarkers);
  }, 100)
}
</script>

<template>
  <div class="map">
    <LMap
      ref="map"
      :zoom="initialZoom"
      :center="initialCenter"
      :use-global-leaflet="false"
      @move="onMapMove"
      @ready="(target: any) => onMapMove({ target })"
    >
      <template v-for="item in items" :key="item._id">
        <template v-if="Array.isArray(item.coordinates[0])" v-for="(markerCoordinates, key) in item.coordinates" :key="key">
          <LMarker
            :lat-lng="markerCoordinates"
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
              <strong class="map-detailsLink" @click="scrollToElementBySelector(`#${slug(item.title as string)}`)">
                {{ item.title }}
              </strong>
            </LPopup>
          </LMarker>
        </template>
        <template v-else>
          <LMarker
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
              <strong class="map-detailsLink" @click="scrollToElementBySelector(`#${slug(item.title as string)}`)">
                {{ item.title }}
              </strong>
            </LPopup>
          </LMarker>
        </template>
      </template>
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

.leaflet-control-zoom a:hover {
  text-decoration: none;
}
</style>
