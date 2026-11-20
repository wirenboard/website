<script setup lang="ts">
type RouteSegment = { points: [number, number][]; color?: string };

const props = withDefaults(defineProps<{
  lat: number;
  lon: number;
  zoom?: number;
  height?: string;
  routeSegments?: RouteSegment[];
}>(), {
  zoom: 16,
  height: '450px',
});

const mapContainer = ref<HTMLElement>();

function initMap() {
  const ymaps = (window as any).ymaps;
  if (!mapContainer.value || !ymaps) return;
  ymaps.ready(() => {
    const map = new ymaps.Map(mapContainer.value, {
      center: [props.lat, props.lon],
      zoom: props.zoom,
    });

    map.geoObjects.add(new ymaps.Placemark([props.lat, props.lon]));

    if (props.routeSegments && props.routeSegments.length) {
      for (const segment of props.routeSegments) {
        map.geoObjects.add(new ymaps.Polyline(segment.points, {}, {
          strokeColor: segment.color || '#1E98FF',
          strokeWidth: 4,
        }));
      }
    }
  });
}

onMounted(() => {
  if ((window as any).ymaps) {
    initMap();
    return;
  }
  const existing = document.querySelector('script[data-yandex-maps-api]');
  if (existing) {
    existing.addEventListener('load', initMap);
    return;
  }
  const script = document.createElement('script');
  script.src = 'https://api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU';
  script.setAttribute('data-yandex-maps-api', '');
  script.onload = initMap;
  document.head.appendChild(script);
});
</script>

<template>
  <div ref="mapContainer" class="yandex-map" :style="{ height }" />
</template>

<style>
.yandex-map {
  width: 100%;
  margin: 32px 0;
  border-radius: 4px;
  background-color: var(--gray-color, #e2e2e2);
}
</style>
