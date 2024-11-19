<script setup lang="ts">
const isVisible = ref(false);

const showHiddenContent = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div class="spoiler">
    <div class="spoiler-summary" @click="showHiddenContent">
      <Icon :name="isVisible ? 'ion:arrow-down-b' : 'ion:arrow-right-b'" class="spoiler-icon" />
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
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  cursor: pointer;
  user-select: none;
  margin-bottom: 6px;
}

.spoiler-summary p {
  margin: 0;
}

.spoiler-icon {
  font-size: 15px;
}
</style>
