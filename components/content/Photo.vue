<script setup lang="ts">
import ArrowRight from '~/assets/icons/arrow-next.svg';
import ArrowLeft from '~/assets/icons/arrow-previous.svg';

const props = defineProps<{ src: string; caption?: string; width?: number | string; isGallery?: boolean; previewPreset?: string | null; withBorder?: boolean; float?: 'right' | 'left' | 'center'; }>();

const photo = ref();

defineExpose({ photo });

defineEmits(['openPhoto', 'openOtherPhoto']);
enum Directions {
  Previous = 37,
  Next = 39,
}

const computedFigureStyle = computed(() => {
  const width = typeof props.width === 'string' ? props.width : `${props.width}px`;
  return `${props.width ? `max-width: ${width};` : ''}${props.isGallery ? 'width: 100%;' : ''}`;
});
</script>

<template>
  <figure
    class="photo"
    :class="{
      'photo-withCaption': caption || withBorder,
      'photo-fromGallery': isGallery,
      'photo-floatRight': float === 'right',
      'photo-floatLeft': float === 'left',
      'photo-center': float === 'center',
      }"
    :style="computedFigureStyle"
  >
    <Image
      ref="photo"
      :src="src"
      :alt="caption"
      :width="width"
      preview
      @show="$emit('openPhoto', photo.$attrSelector)"
      @hide="$emit('openPhoto', null)"
    >
      <template #image>
        <NuxtPicture
          :src="src"
          :alt="caption"
          densities="x1"
          :class="{
            'photo-imageFromGallery': isGallery
          }"
          :preset="previewPreset || width === '100%' ? 'fullWidthPreview' : 'preview'"
          :sizes="previewPreset === '' ? 'xs:100vw' : 'lg:100vw'"
          :img-attrs="{
            width,
            class: `photo-image ${isGallery ? 'photo-imageFromGallery' : ''} ${caption ? 'photo-imageWithCaption' : ''}`,
            'data-pc-section': 'image',
          }"
          loading="lazy"
        />
      </template>
      <template #preview="slotProps">
        <button v-if="isGallery" class="photo-button photo-button-previous" @click="$emit('openOtherPhoto', Directions.Previous)">
          <ArrowLeft />
        </button>
        <NuxtPicture
          :src="src"
          :alt="caption"
          :img-attrs="{
            'data-pc-section': 'original'
          }"
          preset="original"
          sizes="(max-width: 1920px) 90vw, 1920px"
          densities="x1"
          :style="slotProps.style"
          @click="slotProps.onClick"
        />
        <button v-if="isGallery" class="photo-button photo-button-next" @click="$emit('openOtherPhoto', Directions.Next)">
          <ArrowRight />
        </button>
      </template>
    </Image>

    <figcaption v-if="caption" class="photo-imageCaption">{{ caption }}</figcaption>
  </figure>
</template>

<style>
.photo {
  text-align: center;
  font-size: 16px;
  margin: 12px 0;
  clear: both;
  display: table;
  flex-direction: column;
  gap: 6px;
  width: fit-content;
  min-height: 100px;
}

.photo-fromGallery {
  display: flex;
}

.photo-imageFromGallery {
  height: 250px !important;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.photo-center {
  margin: 0 auto;
}

.photo-floatLeft {
  float: left;
  margin-right: 12px;

  @media (max-width: 768px) {
    float: none;
    margin-right: 0;
  }
}

.photo-floatRight {
  float: right;
  margin-left: 12px;

  @media (max-width: 768px) {
    float: none;
    margin-left: 0;
  }
}

.photo-withCaption {
  background: var(--gray-color);
  border: 1px solid var(--border-color);
  border-bottom: 0;
  border-radius: 6px 6px 0 0;
  padding: 6px;
  height: fit-content;
}

.photo-fromGallery.photo-withCaption {
  border-bottom: 1px solid var(--border-color);
  border-radius: 6px;
}

.photo-image {
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

.photo-image img {
  min-height: 100px;
  max-height: 50vh;
}

.photo-imageWithCaption {
  border: 1px solid var(--border-color);
  border-radius: 6px;
}

.photo-imageCaption {
  text-align: left;
  white-space: pre-line;
  display: table-caption;
  caption-side: bottom;
  border: 1px solid var(--border-color);
  border-top: 0;
  border-radius: 0 0 6px 6px;
  background: var(--gray-color);
  padding: 6px;
}

.photo-fromGallery .photo-imageCaption {
  display: initial;
  padding: 0;
  border: 0;
  margin-top: -6px;
}

.photo:not(.photo-fromGallery) .photo-imageCaption {
  margin-top: -16px;
}

[data-pc-section="root"] {
  position: relative;
  display: inline-flex;
  line-height: 0;
}

[data-pc-section="root"]:hover [data-pc-section="previewmask"] {
  opacity: 1;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.4);
  outline: none;
  border-radius: 6px;
}

[data-pc-section="previewmask"] {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 24px;
  justify-content: center;
  opacity: 0;
  border: 0 none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  color: #e2e8f0;
  transition: background 0.2s;
}

[data-pc-section="previewicon"] {
  width: 22px;
  height: 22px;
}

[data-pc-section="mask"] {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.4);
  color: #e2e8f0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

[data-pc-section="toolbar"] {
  position: absolute;
  top: 1rem;
  right: 1rem;
  left: auto;
  bottom: auto;
  display: flex;
  z-index: 2;
  padding: .5rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-color: var(--border-color);
  border-style: solid;
  border-width: 1px;
  border-radius: 30px;
  gap: 0.5rem;
}

[data-pc-group-section="action"] {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  background: transparent;
  width: 3rem;
  height: 3rem;
  margin: 0;
  padding: 0;
  border: 0 none;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  outline-color: transparent;
  transition: background 0.2s, color 0.2s, outline-color 0.2s, box-shadow 0.2s;
}

[data-pc-group-section="action"]:hover {
  background: rgba(255,255,255,0.1);
}

[data-pc-group-section="action"] svg {
  font-size: 1.5rem;
  width: 1.2rem;
  height: 1.2rem;
}

[data-pc-section="rotaterightbutton"],
[data-pc-section="rotateleftbutton"] {
  display: none;
}

img[data-pc-section="original"] {
  transition: transform 0.15s;
  max-width: calc(100vw - 120px);
  max-height: calc(100vh - 50px);
}

.photo-button {
  position: fixed;
  top: 0;
  appearance: none;
  border: 0;
  height: 100%;
  width: 60px;
  z-index: 1;
  cursor: pointer;
  background: transparent;
  font-size: 24px;
}

.photo-button:hover {
  background: rgba(1,1,1,0.5);
}

.photo-button .nuxt-icon--fill * {
  fill: none;
}

.photo-button-previous {
  left: 0;
}

.photo-button-next {
  right: 0;
}
</style>
