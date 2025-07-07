<script setup lang="ts">
const props = defineProps<{ path: string; }>();
const { locale } = useI18n();

const { data } = await useAsyncData(props.path, () => queryContent(props.path).where({ _locale: locale.value }).findOne());
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
</template>

