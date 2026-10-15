<script setup lang="ts">
defineProps<{
  variant?: 'info' | 'success' | 'warning' | 'error';
}>();
</script>

<template>
  <div
    class="wb-alert"
    :class="{
      'wb-alert-info': !variant || variant === 'info',
      'wb-alert-success': variant === 'success',
      'wb-alert-warning': variant === 'warning',
      'wb-alert-error': variant === 'error',
    }"
    :role="variant === 'error' ? 'alert' : 'status'"
  >
    <slot />
  </div>
</template>

<style scoped>
.wb-alert {
  padding: 12px 16px;
  border: 1px solid transparent;
  border-radius: 2px;
  font-size: 16px;
  line-height: 1.4;
}

.wb-alert-info {
  background: #eff6ff;
  border-color: #bfdbfe;
  color: #1d4ed8;
}

.wb-alert-success {
  background: #ecfdf5;
  border-color: #a7f3d0;
  color: #047857;
}

.wb-alert-warning {
  background: #fffbeb;
  border-color: #fde68a;
  color: #92400e;
}

.wb-alert-error {
  background: #fee2e2;
  border-color: var(--danger-color);
  color: var(--danger-color);
}
</style>
