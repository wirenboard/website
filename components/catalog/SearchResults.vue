<script lang="ts" setup>
import type { CatalogProduct } from '~/common/types';

defineProps<{
  results: CatalogProduct[];
}>();
</script>

<template>
  <div v-if="results.length === 0" class="catalogSearchResults-status">{{ $t('noResults') }}</div>
  <div v-else class="catalogSearchResults-grid">
    <CatalogProductCard
      v-for="product in results"
      :key="product.id"
      :product="product"
      grid-layout
    />
  </div>
</template>

<style scoped>
.catalogSearchResults-status {
  padding: 32px 0;
  font-size: 16px;
  color: var(--text-status-color);
}

.catalogSearchResults-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 767px) {
  .catalogSearchResults-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<i18n>
{
  "ru": { "noResults": "По вашему запросу ничего не найдено" },
  "en": { "noResults": "No results found" }
}
</i18n>
