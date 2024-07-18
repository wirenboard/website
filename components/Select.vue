<script setup lang="ts">
import Select from 'primevue/select';

defineProps<{ options: any[]; optionLabel: string; optionValue: string; placeholder: string; changeCallback: () => void; }>();

const model = defineModel();
</script>

<template>
  <Select
    v-model="model"
    :options="options"
    :optionLabel="optionLabel"
    :optionValue="optionValue"
    :placeholder="placeholder"
    @change="changeCallback"
    showClear
    :overlayStyle="{
      zIndex: 100,
    }"
  />
</template>

<style>
[data-pc-name="select"] {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  user-select: none;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  outline-color: transparent;
  box-shadow: var(--input-shadow);
  font-size: 16px;
  font-family: 'Plumb', sans-serif;
  transition: border-color 0.2s;
}

[data-pc-name="select"]:hover {
  border: 1px solid var(--border-color-hover);
}

[data-pc-section="label"] {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  flex: 1 1 auto;
  width: 1%;
  padding: 7px 12px 7px 12px;
  text-overflow: ellipsis;
  cursor: pointer;
  border: 0 none;
  outline: 0 none;
}

[data-pc-section="dropdown"] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 12px;
  background: transparent;
}

[data-pc-section="clearicon"] {
  margin-right: 12px;
}

[data-pc-section="listcontainer"] {
  margin-top: 3px;
}

[role="listbox"] {
  box-shadow: 1px 1px 12px var(--gray-color);
  border: 1px solid #e2e8f0;
  background: #fff;
  border-radius: 6px;
}

[data-pc-section="list"] {
  margin: 0;
  padding: 3px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

[data-pc-section="option"] {
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
  font-family: 'Plumb', sans-serif;
}

[data-pc-section="option"]:hover,
[data-pc-section="option"][data-p-focused="true"] {
  background: var(--primary-color);
  opacity: 0.9;
  color: #fff;
}

[data-pc-section="option"][data-p-selected="true"] {
  background: var(--primary-color);
  color: #fff;
}
</style>