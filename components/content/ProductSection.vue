<script setup lang="ts">
defineProps<{ title: string; }>();
</script>

<template>
  <section class="productSection">
    <h3>{{ title }}</h3>
    <ContentSlot :use="$slots.default" />
    <div class="productSection-clear" />
  </section>
</template>

<style>
.productSection {
  padding: 20px 0;
  font-size: 16px;
  border-bottom: 1px solid var(--border-color);
  line-height: 24px;
}

.productSection:first-of-type {
  padding: 0;
}

.productSection:last-of-type {
  border-bottom: 0;
  padding-bottom: 0;
}

.productSection-clear {
  clear: both;
}
</style>
