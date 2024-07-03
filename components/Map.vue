<script setup lang="ts">
defineProps<{ items: { coordinates: number[] }[] }>();

import { ref } from 'vue'
const zoom = ref(4)
</script>

<template>
  <div class="map">
    <LMap
      ref="map"
      :zoom="zoom"
      :center="items[0].coordinates"
      :use-global-leaflet="false"
    >
      <LMarker
        v-for="(item, index) in items"
        :key="index"
        :lat-lng="item.coordinates" />
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
}

.leaflet-control-attribution {
  display: none;
}
</style>