<script setup lang="ts">
defineProps<{
  variant?: 'neutral' | 'info' | 'success' | 'warning' | 'error';
}>();
</script>

<template>
  <span class="wb-badge" :class="`wb-badge-${variant || 'neutral'}`"><slot /></span>
</template>

<style scoped>
.wb-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 9px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: 'Plumb', sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
}

.wb-badge-neutral {
  background: var(--gray-color);
  border-color: var(--border-color);
  color: var(--text-color);
}

.wb-badge-info {
  background: #eff6ff;
  border-color: #bfdbfe;
  color: #1d4ed8;
}

.wb-badge-success {
  background: #eff8e6;
  border-color: #b7e0a0;
  color: var(--primary-color-hover);
}

.wb-badge-warning {
  background: #fffbeb;
  border-color: #fde68a;
  color: #92400e;
}

.wb-badge-error {
  background: #fee2e2;
  border-color: var(--danger-color);
  color: var(--danger-color);
}
</style>
