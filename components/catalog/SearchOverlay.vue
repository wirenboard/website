<script lang="ts" setup>
defineProps<{
  pending: boolean;
}>();
</script>

<template>
  <div class="catalogSearchOverlay" :class="{ loading: pending }">
    <slot />
  </div>
</template>

<style scoped>
.catalogSearchOverlay {
  position: relative;
}

.catalogSearchOverlay.loading::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: #fff;
  opacity: 0.5;
  z-index: 1001;
}

.catalogSearchOverlay.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  margin-left: -15px;
  border-radius: 50%;
  border: 2px solid var(--spinner-track-color);
  border-top-color: var(--primary-color);
  animation: catalogSearchSpinner 0.6s linear infinite;
  z-index: 1002;
}

@keyframes catalogSearchSpinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
