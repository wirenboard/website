<script setup lang="ts">
withDefaults(defineProps<{ id?: string; label: string; size?: 'default' | 'large' }>(), {
  size: 'default',
});

</script>

<template>
  <button
    type="button"
    class="wb-button"
    :class="{
      'wb-button-m': size === 'default',
      'wb-button-l': size === 'large',
    }"
    :id="id">
    {{ label }}
  </button>
</template>

<style>
.wb-button {
  font-family: 'Plumb', sans-serif;
  border-radius: 4px;
  white-space: nowrap;
  position: relative;
  min-height: 33px;
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--primary-color);
  color: #fff;
  border: 0;
  transition: background 0.2s;
  font-weight: bold;
  outline: none;
  line-height: 24px;
}

.wb-button:hover {
  background: var(--primary-color-hover);
}

.wb-button-m {
  font-size: 16px;
  padding: 8px 16px;
}

.wb-button-l {
  padding: 12px 24px;
  font-size: 18px;
}
</style>
