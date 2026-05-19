<script setup lang="ts">
import Select from 'primevue/select';

defineProps<{
  options: any[];
  optionLabel: string;
  optionValue: string;
  placeholder: string;
  disabled?: boolean;
  size?: 'small' | 'default';
  isSearchable: boolean;
  changeCallback?: () => void;
}>();

const model = defineModel();
</script>

<template>
  <Select
    :class="{
      'wb-select-small': size === 'small',
      'wb-select-default': size !== 'small',
      }"
    v-model="model"
    :options="options"
    :optionLabel="optionLabel"
    :optionValue="optionValue"
    :placeholder="placeholder"
    :filter="isSearchable"
    :disabled="disabled"
    scrollHeight="300px"
    :overlayStyle="{
      zIndex: 100,
    }"
    :showClear="!disabled"
    @change="changeCallback"
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
  border-radius: 2px;
  outline-color: transparent;
  box-shadow: var(--input-shadow);
  font-size: 16px;
  font-family: 'Plumb', sans-serif;
  transition: border-color 0.2s, outline-offset 0.2s;

}

[data-pc-name="select"]:has([role="combobox"]:focus) {
  outline: 2px solid var(--link-color);
  outline-offset: 3px;
}

[data-pc-section="root"]:has([aria-disabled="true"]) {
  background: var(--gray-color);
}

[aria-disabled="true"] + [data-pc-section="dropdown"] {
  display: none;
}

[data-pc-name="select"]:focus {
  outline: 2px solid var(--link-color);
  outline-offset: 3px;
}

[data-pc-section="label"] {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  flex: 1 1 auto;
  width: 1%;
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
  z-index: 1000;
}

[data-pc-section="clearicon"] {
  margin-right: 12px;
}

[data-pc-section="listcontainer"] {
  margin-top: 3px;
  overflow: auto;
  display: block;
  z-index: 1000;
}

[data-pc-section="overlay"] {
  box-shadow: 1px 1px 12px var(--gray-color);
  border: 1px solid #e2e8f0;
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
}

[data-pc-section="list"] {
  margin: 0;
  padding: 3px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

[data-pc-section="option"] {
  border-radius: 2px;
  padding: 6px 10px;
  cursor: pointer;
  margin-bottom: 2px;
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

[data-pc-section="header"][data-pc-section="root"] {
  position: relative;
  display: block;
}

[data-pc-name="pcfilter"] {
  width: calc(100% - 12px);
  padding-inline-end: 20px;
  margin: 6px;
  height: 30px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

[data-pc-name="inputicon"] {
  position: absolute;
  top: 2px;
  right: 12px;
  margin-top: 12px;
  color: darkgray;
  line-height: 1;
  z-index: 1;
}

[data-pc-section="label"] {
  color: #000;
  font-size: 16px;
  //font-weight: 500;
}

[data-pc-name="iconfield"] {
  background: #fff;
}

.wb-select-default {
  padding: 26px 12px 18px;
}

.wb-select-default [data-pc-section="label"]  {
  font-size: 24px;
  font-weight: 500;
}

.wb-select-small {
  padding: 7px 12px 7px 12px;
}
</style>
