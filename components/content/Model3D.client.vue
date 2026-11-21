<script setup lang="ts">
import SelectButton from '~/components/SelectButton.vue';

const props = defineProps<{ src: string; nocaseSrc?: string; alt?: string; }>();
const { t } = useI18n();

const view = ref('case');
const options = computed(() => [
  { label: t('withCase'), value: 'case' },
  { label: t('withoutCase'), value: 'nocase' },
]);
// A case-less model is a separate file: compression merges all parts into one mesh, so the case
// cannot be hidden inside the main one.
const current = computed(() => (view.value === 'nocase' && props.nocaseSrc ? props.nocaseSrc : props.src));

onMounted(async () => {
  // model-viewer reads this global in every element's constructor; it must be set before the
  // module defines <model-viewer> and upgrades the element below. The decoder is served by
  // nitro.publicAssets in nuxt.config.ts.
  (window as any).ModelViewerElement = { ...((window as any).ModelViewerElement || {}), dracoDecoderLocation: '/_nuxt/draco/' };
  await import('@google/model-viewer');
});
</script>

<template>
  <div class="model3d">
    <!-- A three-quarter view: the default front view shows DIN-rail devices end-on. Zoom is off so the
         mouse wheel over the header scrolls the page instead of zooming the model. -->
    <model-viewer :src="current" :alt="alt" camera-controls disable-zoom camera-orbit="-30deg 65deg auto" touch-action="pan-y" class="model3d-viewer" />
    <!-- allowEmpty off: a click on the active option must not reset the view, even for a moment. -->
    <SelectButton v-if="nocaseSrc" v-model="view" :options="options as any" optionLabel="label" optionValue="value" :allowEmpty="false" />
  </div>
</template>

<style scoped>
.model3d {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.model3d-viewer {
  /* Keeps the box size while the element is still undefined, so the page does not jump. */
  display: block;
  width: 100%;
  height: 480px;

  @media (max-width: 768px) {
    height: 320px;
  }
}
</style>

<i18n>
{
  "ru": {
    "withCase": "С корпусом",
    "withoutCase": "Без корпуса"
  },
  "en": {
    "withCase": "With case",
    "withoutCase": "Without case"
  }
}
</i18n>
