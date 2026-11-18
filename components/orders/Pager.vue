<script lang="ts" setup>
const { t } = useI18n();

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

const props = defineProps<{ pageCount: number }>();
const page = defineModel<number>('page', { required: true });
const pageSize = defineModel<number>('pageSize', { required: true });

const pageNumbers = computed(() => {
  const total = props.pageCount;
  const current = page.value;
  const delta = 2;
  const start = Math.max(1, current - delta);
  const end = Math.min(total, current + delta);
  const range: (number | '...')[] = [];
  if (start > 1) {
    range.push(1);
    if (start > 2) range.push('...');
  }
  for (let p = start; p <= end; p++) range.push(p);
  if (end < total) {
    if (end < total - 1) range.push('...');
    range.push(total);
  }
  return range;
});

const goToPage = (p: number) => {
  if (p < 1 || p > props.pageCount) return;
  page.value = p;
};
</script>

<template>
  <div class="orders-pager-row">
    <div v-if="pageCount > 1" class="orders-pager">
      <button type="button" :disabled="page <= 1" @click="goToPage(page - 1)">&larr;</button>
      <template v-for="(p, i) in pageNumbers" :key="i">
        <span v-if="p === '...'" class="orders-pager-ellipsis">&hellip;</span>
        <button v-else type="button" :class="{ active: p === page }" @click="goToPage(p)">{{ p }}</button>
      </template>
      <button type="button" :disabled="page >= pageCount" @click="goToPage(page + 1)">&rarr;</button>
    </div>
    <label class="orders-pager-size">
      {{ t('pageSizeLabel') }}
      <select v-model.number="pageSize">
        <option v-for="size in PAGE_SIZE_OPTIONS" :key="size" :value="size">{{ size }}</option>
      </select>
    </label>
  </div>
</template>

<style scoped>
.orders-pager-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.orders-pager {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.orders-pager button {
  min-width: 32px;
  height: 32px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-family: 'Plumb', sans-serif;
  font-size: 14px;
  color: var(--text-color);
}

.orders-pager button:hover:not(:disabled):not(.active) {
  border-color: var(--border-color-hover);
}

.orders-pager button.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
}

.orders-pager button:disabled {
  opacity: 0.4;
  cursor: default;
}

.orders-pager-ellipsis {
  padding: 0 4px;
  color: var(--text-secondary-color);
}

.orders-pager-size {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Plumb', sans-serif;
  font-size: 14px;
  color: var(--text-secondary-color);
  white-space: nowrap;
}

.orders-pager-size select {
  height: 32px;
  padding: 0 8px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: #fff;
  font-family: 'Plumb', sans-serif;
  font-size: 14px;
  color: var(--text-color);
  cursor: pointer;
}
</style>

<i18n>
{
  "ru": {
    "pageSizeLabel": "Показывать по:"
  },
  "en": {
    "pageSizeLabel": "Show per page:"
  }
}
</i18n>
