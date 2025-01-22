<script setup lang="ts">
const props = defineProps<{ path: string; }>();

const { data } = await useAsyncData(props.path, () => queryContent(props.path).findOne());
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
</template>

