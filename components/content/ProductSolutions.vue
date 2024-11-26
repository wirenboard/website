<script setup lang="ts">
const { locale } = useI18n();
const props = defineProps<{ data: string[]; }>();

const query = { path: '/_solutions', where: [{ _locale: locale.value }, { _path: { $in: props.data.map(item => `/_solutions/${item}`) } }] };

const { data } = await useAsyncData('solutions', () => queryContent(query.path)
  .where({ _path: { $in: props.data.map(item => `/_solutions/${item}`) } })
  .where({ _locale: locale.value })
  .find());
</script>

<template>
  <section class="productSolutions">
    <div class="productSolutions-list">
      <Article v-bind="article as any" v-for="article in data" :key="article._path" />
    </div>
  </section>
</template>

<style>
.productSolutions-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  font-size: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
}
</style>
