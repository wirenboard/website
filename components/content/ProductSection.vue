<script setup lang="ts">
defineProps<{ title: string; }>();
</script>

<template>
  <section class="productSection">
    <ContentSlot :use="$slots.default" />
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
</style>
