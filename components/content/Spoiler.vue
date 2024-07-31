<script setup lang="ts">
const isVisible = ref(false);

const showHiddenContent = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div class="spoiler">
    <div class="spoiler-summary" @click="showHiddenContent">
      <span class="spoiler-icon">{{isVisible ? '⯆' : '⯈'}}</span>
      <ContentSlot :use="$slots.summary" />
    </div>
    <div v-show="isVisible">
      <ContentSlot :use="$slots.content" />
    </div>
  </div>
</template>

<style>
.spoiler-summary {
  color: var(--link-color);
  display: flex;
  gap: 6px;
  cursor: pointer;
}

.spoiler-icon {
  font-size: 14px;
}
</style>
