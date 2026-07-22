<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  id: string;
  label?: string;
  autofocus?: boolean;
  type?: 'text' | 'number' | 'email';
  inputmode?: 'search' | 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal';
  autocomplete?: string;
  required?: boolean;
  disabled?: boolean;
  pattern?: string;
  title?: string;
}>();

const model = defineModel<string>();

const touched = ref(false);
const error = ref(false);

const validate = () => {
  touched.value = true;
  error.value = !!props.required && !model.value;
};
</script>

<template>
  <div class="input-wrapper">
    <input
      v-if="!disabled"
      v-model="model"
      :type="type"
      placeholder=" "
      class="input"
      :class="{
        'input-filled': !!model,
        'input-error': error
      }"
      :id="id"
      :autofocus="autofocus"
      :aria-invalid="error"
      :inputmode="inputmode"
      :required="required"
      :autocomplete="autocomplete"
      :pattern="pattern"
      :title="title"
      @blur="validate"
      @input="validate"
    />
    <div v-else class="input input-static" :id="id">{{ model }}</div>

    <label v-if="label" class="input-label" :class="{ 'input-label--static': disabled }" :for="id">
      {{ label }}
      <span v-if="required" class="input-required">*</span>
    </label>
  </div>
</template>

<style>
.input-wrapper {
  position: relative;
}

.input {
  width: 100%;
  color: #000;
  font-family: 'Plumb', sans-serif;
  border: 1px solid var(--border-color);
  padding: 26px 12px 18px;
  transition: background 0.2s, border 0.2s, outline-offset 0.2s;
  font-size: 24px;
  line-height: 24px;
  border-radius: 2px;
  outline-offset: 0;
}

.input:focus {
  outline: 2px solid var(--link-color);
  outline-offset: 3px;
}

.input-required {
  color: var(--danger-color);
}

.input-error {
  border-color: var(--danger-color);
}

.input-label {
  position: absolute;
  z-index: 1;
  top: 26px;
  left: 12px;
  color: #ccc;
  font-size: 16px;
  font-weight: 500;
  transition: top 0.2s, font-weight 0.2s, font-size 0.2s;
}

.input:not(:placeholder-shown) + .input-label,
.input:focus + .input-label {
  top: 8px;
  font-size: 14px;
}

.input-error + .input-label {
  color: var(--danger-color);
}

.input:disabled {
  background: var(--bg-secondary, #f5f5f5);
  color: #666;
  cursor: not-allowed;
}

.input:disabled + .input-label {
  color: #aaa;
}

.input-static {
  min-height: 74px;
  height: auto;
  white-space: normal;
  overflow-wrap: anywhere;
  background: var(--bg-secondary, #f5f5f5);
  color: #666;
  cursor: not-allowed;
}

.input-label--static {
  top: 8px;
  font-size: 14px;
  color: #aaa;
}
</style>
