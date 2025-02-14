<script setup lang="ts">
import Photo from './Photo.vue';

const props = defineProps<{ data: [string, string, number][]; withBorder?: boolean; }>();
const photos = ref();
const openedPhoto = ref(null);

const numberOfGalleryColumns = computed(() => props.data.length >= 5 ? 5 : props.data.length);

 const susbscribeKeyPress = debounce(function({ keyCode }) {
    if (!openedPhoto.value) {
       return;
    }
    const currentPhoto = photos.value?.find((item: any) => item.photo.$attrSelector === openedPhoto.value);
    const openPhotoByIndex = (index: number) => {
       photos.value[index].photo.$el.querySelector('button').click();
    };

    const LEFT_ARROW = 37;
    const RIGHT_ARROW = 39;
    if (keyCode === LEFT_ARROW) {
       const index = photos.value.indexOf(currentPhoto) === 0 ? photos.value.length - 1 : photos.value.indexOf(currentPhoto) - 1;
       currentPhoto?.photo.hidePreview();
       openPhotoByIndex(index);
    }

    if (keyCode === RIGHT_ARROW) {
       const index = photos.value.indexOf(currentPhoto) === photos.value.length - 1 ? 0 : photos.value.indexOf(currentPhoto) + 1;
       currentPhoto?.photo.hidePreview();
       openPhotoByIndex(index);
    }
 }, 500, true);

watch(openedPhoto, () => {
   if (openedPhoto.value) {
      document.addEventListener('keyup', susbscribeKeyPress, false);
   } else {
      document.removeEventListener('keyup', susbscribeKeyPress, false);
   }
});
</script>

<template>
  <div class="gallery">
    <Photo
       v-for="([src, caption], i) in data"
       ref="photos"
       :src="src"
       :caption="caption"
       :height="300"
       :withBorder="withBorder"
       isGallery
       :key="i"
       @open-photo="(openedPhotoAttr) => openedPhoto = openedPhotoAttr"
       @open-other-photo="(keyCode) => susbscribeKeyPress({ keyCode })"
    />
  </div>
</template>

<style scoped>
.gallery {
  gap: 0 12px;
  max-width: 100%;
  clear: both;
  display: grid;
  grid-template-columns: repeat(v-bind('numberOfGalleryColumns'), 1fr);
  width: fit-content;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

body:has(div[role="dialog"][data-pc-section="mask"]) {
  overflow: hidden !important;
  scrollbar-gutter: stable;
}
</style>
