<script setup lang="ts">
interface Option {
  id: number;
  name: string;
  image: string;
  description: string;
}

defineProps<{ type: 'option' | 'component'; productId: number; options: Option[] }>();
const calculatorClass = 'add-to-basket-set';
</script>

<template>
  <div class="product-options">
    <div
      v-for="option in options"
      :class="`product-option ${calculatorClass}`"
      :data-option_id="option.id"
      :data-product_id="productId"
      :data-option_type="type"
      data-url="/basket/add/"
      data-count="1"
      :key="option.id"
    >
      <NuxtImg class="product-optionImage" :src="`https://wirenboard.com/storage/cache/${option.image}`" />
      <div class="product-optionName">{{ option.name }}</div>
      <div v-html="option.description" class="product-optionDescription"></div>
    </div>
  </div>
</template>

<style>


.product-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
}

.product-option {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 5px 0 var(--border-color);
  cursor: pointer;
}

.product-option:hover {
  outline: 1px solid var(--border-color);
  box-shadow: 0 0 8px 0 var(--border-color);
}

.product-optionImage {
  background: #f7f7f7;
  max-height: 242px;
  object-fit: contain;
}

.product-optionName {
  margin: 0 16px 8px;
  font-weight: bold;
}

.product-optionDescription {
  margin: 0 16px 8px;
  font-size: 17px;
}

.product-optionDescription p {
  margin: 0;
}

.product-optionDescription ul {
  margin: 0;
}

.product-optionDescription i {
  white-space: nowrap;
}
</style>
