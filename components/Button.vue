<script setup lang="ts">
import Spinner from 'assets/icons/spinner.svg';

withDefaults(defineProps<{
  id?: string;
  label: string;
  type?: 'button' | 'submit';
  variant: 'primary' | 'secondary';
  outlined: boolean;
  size?: 'default' | 'large';
  isLoading?: boolean;
}>(), {
  size: 'default',
  variant: 'primary',
  type: 'button',
  isLoading: false,
});

</script>

<template>
  <button
    :type="type"
    class="wb-button"
    :class="{
      'wb-button-m': size === 'default',
      'wb-button-l': size === 'large',
      'wb-button-primary': variant === 'primary',
      'wb-button-outlined': outlined
    }"
    :id="id">
    <Spinner v-if="isLoading" class="wb-button-spinner" />
    <span :style="isLoading ? { visibility: 'hidden' } : {}">{{ label }}</span>
  </button>
</template>

<style>
.wb-button {
  font-family: 'Plumb', sans-serif;
  border-radius: 4px;
  white-space: nowrap;
  position: relative;
  min-height: 31px;
  display: inline-flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background 0.3s, color 0.3s;
  font-weight: bold;
  outline: none;
  line-height: 24px;
}

.wb-button:not(:disabled) {
  cursor: pointer;
}

.wb-button:disabled {
  filter: opacity(0.5);
}

.wb-button-primary {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: #fff;
}

.wb-button-primary:hover {
  background: var(--primary-color-hover) !important;
  color: #fff !important;
}

.wb-button-primary.wb-button-outlined {
  background: transparent;
  color: var(--primary-color)
}

.wb-button-primary.wb-button-outlined {
  background: transparent;
  color: var(--primary-color)
}

.wb-button-m {
  font-size: 16px;
  padding: 8px 16px;
}

.wb-button-l {
  padding: 12px 24px;
  font-size: 18px;
}

.wb-button-spinner {
  position: absolute;
  width: 22px;
  height: 22px;
  animation: spin 1s linear infinite;
}

.wb-button-primary .wb-button-spinner {
  color: #fff;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
