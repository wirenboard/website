<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';

defineProps<{ options: string[]; }>();

const model = defineModel();

const change = ({ value }) => {
  if (!value) {
    const reValue = model.value;
    setTimeout(() => {
      model.value = reValue;
    });
  }
};
</script>

<template>
  <SelectButton v-model="model" :options="options" @change="change" />
</template>

<style>
[data-pc-name="selectbutton"] {
  display: inline-flex;
  border-radius: 6px;
  overflow: hidden;
}

[data-pc-name="pcbutton"] {
  font-family: 'Plumb', sans-serif;
  border-radius: 1px;
  white-space: nowrap;
  position: relative;
  min-height: 33px;
  font-size: 16px;
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: var(--text-color);
  background: var(--gray-color);
  padding: 7px 14px;
  border: 0;
}

[data-pc-name="pcbutton"]:hover {
  color: #0f172a;
}

[data-pc-name="pcbutton"][data-p-checked="true"] {
  z-index: 1;
  color: #0f172a;
}

[data-pc-name="pcbutton"][data-p-checked="true"]::before {
  content: "";
  background: #fff;
  z-index: -1;
  position: absolute;
  left: 4px;
  top: 4px;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  border-radius: 6px;
  box-shadow: 0 0 3px #cacaca;
}
</style>
