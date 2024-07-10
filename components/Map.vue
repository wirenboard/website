<script setup lang="ts">
import MarkerIcon from '~/assets/marker.svg'

const props = defineProps<{ items: { title: string; coordinates: number[] }[], center: number[], zoom: number }>();

import { ref } from 'vue'

const map = ref();

watch(() => props.center, () => {
  map.value.leafletObject.setView(props.center);
});
</script>

<template>
  <div class="map">
    <LMap
      ref="map"
      :zoom="zoom"
      :center="center"
      :use-global-leaflet="false"
    >
      <LMarker
        v-for="(item, index) in items"
        :key="index"
        :lat-lng="item.coordinates"
        @click="$router.push(`#${item.title.replace(/\s/gi, '-')}`)"
      >
        <LIcon
          :icon-size="[34, 34]"
          :icon-anchor="[17, 33]"
          :popup-anchor="[0, 4]">
          <MarkerIcon
            :fontControlled="false"
          />
        </LIcon>
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

.leaflet-control-attribution {
  display: none;
}

.leaflet-div-icon {
  background: none;
  border: none;
  color: #5cb300;
}
</style>