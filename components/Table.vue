<script lang="ts" setup>
import ChevronUp from '~/assets/icons/chevron-up.svg';
import ChevronDown from '~/assets/icons/chevron-down.svg';

export interface TableColumn {
  sortAttr: string;
  label: string;
  class?: string;
}

const props = withDefaults(defineProps<{
  columns: TableColumn[];
  sortAttr: string;
  sortDesc: boolean;
  pending: boolean;
  empty: boolean;
  bordered?: boolean;
  striped?: boolean;
}>(), {
  bordered: false,
  striped: true,
});

const emit = defineEmits<{
  toggleSort: [attr: string];
}>();
</script>

<template>
  <div class="data-table-wrapper">
    <table class="data-table" :class="{ 'data-table--bordered': bordered, 'data-table--striped': striped }">
      <thead>
        <tr class="data-table-headrow">
          <th
            v-for="col in columns"
            :key="col.sortAttr"
            class="data-table-th-sortable"
            :class="col.class"
            role="button"
            tabindex="0"
            :aria-sort="sortAttr === col.sortAttr ? (sortDesc ? 'descending' : 'ascending') : 'none'"
            @click="emit('toggleSort', col.sortAttr)"
            @keydown.enter.prevent="emit('toggleSort', col.sortAttr)"
            @keydown.space.prevent="emit('toggleSort', col.sortAttr)"
          >
            <span class="data-table-th-label">
              <span>{{ col.label }}</span>
              <span class="data-table-sort-icon" :class="{ 'data-table-sort-icon-active': sortAttr === col.sortAttr }">
                <ChevronDown v-if="sortAttr !== col.sortAttr" />
                <ChevronUp v-else-if="!sortDesc" />
                <ChevronDown v-else />
              </span>
            </span>
          </th>
          <th></th>
        </tr>
        <tr class="data-table-filterrow">
          <slot name="filters" />
        </tr>
      </thead>
      <tbody v-if="pending">
        <tr v-for="n in 6" :key="`skeleton-${n}`" class="data-table-skeleton-row">
          <td v-for="col in columns.length + 1" :key="col"><div class="data-table-skeleton-bar"></div></td>
        </tr>
      </tbody>
      <tbody v-else-if="!empty">
        <slot name="rows" />
      </tbody>
    </table>
    <div v-if="!pending && empty" class="data-table-empty"><slot name="empty" /></div>
  </div>
</template>

<style>
.data-table-wrapper {
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 24px;
}

.data-table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  font-family: 'Plumb', sans-serif;
}

.data-table-wrapper .data-table {
  border: none;
}

.data-table-wrapper .data-table th,
.data-table-wrapper .data-table td {
  border: none;
  border-bottom: 1px solid var(--border-color);
  padding: 10px 12px;
  text-align: left;
  font-size: 14px;
  word-break: break-word;
}

.data-table-wrapper .data-table tbody tr:last-child td {
  border-bottom: none;
}

.data-table-wrapper .data-table--bordered th,
.data-table-wrapper .data-table--bordered td {
  border: 1px solid var(--border-color);
}

.data-table-wrapper .data-table--bordered thead tr:first-child th {
  border-top: none;
}

.data-table-wrapper .data-table--bordered th:first-child,
.data-table-wrapper .data-table--bordered td:first-child {
  border-left: none;
}

.data-table-wrapper .data-table--bordered th:last-child,
.data-table-wrapper .data-table--bordered td:last-child {
  border-right: none;
}

.data-table-headrow th {
  background: var(--gray-color);
  color: var(--heading-color);
  font-weight: 600;
  user-select: none;
}

.data-table-th-sortable {
  cursor: pointer;
}

.data-table-th-sortable:hover {
  color: var(--link-color);
}

.data-table-th-sortable:focus-visible {
  outline: 2px solid var(--link-color);
  outline-offset: -2px;
}

.data-table-th-label {
  display: inline-flex;
  align-items: center;
}

.data-table-sort-icon {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  opacity: 0.35;
}

.data-table-sort-icon-active {
  opacity: 1;
  color: var(--link-color);
}

.data-table-sort-icon svg {
  width: 10px;
  height: 10px;
}

.data-table-filterrow th {
  background: #fff;
  padding: 8px 10px;
  font-weight: normal;
}

.data-table--striped tbody tr:nth-child(even) {
  background: var(--gray-color);
}

.data-table-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px;
  font-size: 16px;
  color: var(--text-secondary-color);
  white-space: normal;
}

.data-table-skeleton-row td {
  height: 51px;
}

.data-table-skeleton-bar {
  height: 14px;
  border-radius: 4px;
  background: var(--gray-color);
  animation: data-table-skeleton-pulse 1.4s ease-in-out infinite;
}

.data-table-skeleton-row td:nth-child(1) .data-table-skeleton-bar { width: 60%; }
.data-table-skeleton-row td:nth-child(2) .data-table-skeleton-bar { width: 80%; }
.data-table-skeleton-row td:nth-child(3) .data-table-skeleton-bar { width: 85%; }
.data-table-skeleton-row td:nth-child(4) .data-table-skeleton-bar { width: 70%; }
.data-table-skeleton-row td:nth-child(5) .data-table-skeleton-bar { width: 75%; }
.data-table-skeleton-row td:nth-child(6) .data-table-skeleton-bar { width: 75%; }
.data-table-skeleton-row td:nth-child(7) .data-table-skeleton-bar { width: 55%; }
.data-table-skeleton-row td:nth-child(8) .data-table-skeleton-bar { width: 40%; }

.data-table-skeleton-row:nth-child(even) .data-table-skeleton-bar {
  animation-delay: 0.2s;
}

@keyframes data-table-skeleton-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>
