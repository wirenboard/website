<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  id: string
  label?: string
  autocomplete?: string
  autofocus?: boolean
}>()

const model = defineModel<string>()

const error = ref(false)
</script>

<template>
  <div class="textarea-wrapper">
    <textarea
      v-model="model"
      placeholder=" "
      class="textarea"
      :id="id"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :aria-invalid="error"
      rows="4"
    />

    <label v-if="label" class="textarea-label" :for="id">
      {{ label }}
    </label>
  </div>
</template>

<style>
.textarea-wrapper {
  position: relative;
}

.textarea {
  width: 100%;
  color: #000;
  border: 1px solid var(--border-color);
  padding: 26px 12px 18px;
  transition: background 0.2s, border 0.2s, outline-offset 0.2s;
  font-size: 24px;
  line-height: 24px;
  border-radius: 2px;
  outline-offset: 0;
}

.textarea:focus {
  outline: 2px solid var(--link-color);
  outline-offset: 3px;
}

.textarea-label {
  position: absolute;
  z-index: 10;
  top: 26px;
  left: 12px;
  color: #ccc;
  font-size: 16px;
  font-weight: 500;
  transition: top 0.2s, font-weight 0.2s, font-size 0.2s;
}

.textarea:not(:placeholder-shown) + .textarea-label,
.textarea:focus + .textarea-label {
  display: none;
}
</style>
