<script setup lang="ts">
const props = defineProps<{ path: string; withSeparator?: string; }>();
const { locale } = useI18n();

const { data } = await useAsyncData(props.path, () => queryContent(props.path).where({ _locale: locale.value }).findOne());

const includePath = data.value!._path?.substring(0, data.value!._path.lastIndexOf('/'));

// includes can contain images and it's url is incorrect, because photo component didn't know about include
const updateImagePath = (obj: any) => {
  if (obj.tag === 'photo') {
    const src = obj.props.src.replace(/^(?:[^/]+\/)?(?:catalog|articles|integrators|jobs|partners|solutions|video)\//, '');

    // check is it contains included path to prevent reassign url on rehydration
    if (!obj.props.src.includes(includePath)) {
      obj.props.src = `${locale.value}${includePath}/${src}`;
    }
  }
  if (obj.children && obj.children.length) {
    obj.children.forEach((child: any) => {
      updateImagePath(child);
    })
  }
};

updateImagePath(data.value?.body);
</script>

<template>
  <div :class="{'include-withSeparator': withSeparator === 'true'}">
    <ContentRenderer v-if="data" :value="data" />
  </div>
</template>

<style>
.include-withSeparator {
  border-bottom: 1px solid var(--border-color);
}
</style>
