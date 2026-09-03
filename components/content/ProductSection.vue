<script setup lang="ts">
defineProps<{ title: string; }>();
</script>

<template>
  <section class="productSection">
    <h3 class="productSection-title">{{ title }}</h3>
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
  margin-top: 18px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
}

.productSection:first-of-type {
  padding: 0;
}

.productSection:last-of-type:not(:has(~ .include)) {
  border-bottom: 0;
  padding-bottom: 0;
}

.productSection-title {
  color: #000;
  font-size: 22px;
  margin-top: 0;
  display: inline-block;
}

.productSection-clear {
  clear: both;
}

.productSection .photo,
.productSection ul {
  margin: 0;
}

.productSection .photo {
  @media (max-width: 768px) {
    order: 100;
    margin-top: 12px;
  }
}

.productSection table {
  border-collapse: collapse;
  border: none !important;
  width: 100%;
}

.productSection td,
.productSection th {
  border: 1px solid var(--border-color);
  padding: 6px 10px;
  font-size: 15px;
}

.productSection tr:first-child td,
.productSection tr:first-child th {
  border-top: none !important;
}

.productSection tr:last-child td,
.productSection tr:last-child th {
  border-bottom: none !important;
}

.productSection td:first-child,
.productSection th:first-child {
  border-left: none !important;
}

.productSection td:last-child,
.productSection th:last-child {
  border-right: none !important;
}

.productSection th {
  background: var(--gray-color);
  font-weight: bold;
}

.productSection td:empty,
.productSection th:empty {
  padding: 0;
}
</style>
