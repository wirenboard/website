<script setup lang="ts">
defineProps<{ items: { id: string; title: string; img?: string; comment?: string }[] }>();

const modelValue = defineModel<string>();
</script>

<template>
  <div class="orderSelect-container">
    <label
      v-for="item in items"
      class="orderSelect-radio"
      :class="{'orderSelect-radioActive': item.id === modelValue}"
      tabindex="0"
      @keyup.enter="modelValue = item.id"
    >
      <span class="orderSelect-itemWrapper">
        <span v-if="item.img" class="orderSelect-itemImgWrapper">
          <NuxtImg :src="item.img" :alt="item.title" class="orderSelect-itemImg" />
        </span>
        <span>
          <input type="radio" :value="item.id" v-model="modelValue" />
          <span class="orderSelect-title">{{ item.title }}</span>
          <span class="orderSelect-comment">{{ item.comment }}</span>
        </span>
      </span>
    </label>
  </div>
</template>

<style scoped>

.orderSelect-container {
  display: flex;
  gap: 18px;
}

.orderSelect-radio {
  padding: 18px 10px;
  border: 1px solid var(--border-color);
  border-radius: 2px;
  width: 100%;
  min-width: 230px;
  cursor: pointer;
  outline: none;
  transition: border 0.2s, outline-offset 0.2s;
}

.orderSelect-radio:focus {
  outline: 2px solid var(--link-color);
  outline-offset: 3px;
}

.orderSelect-radio input {
  display: none;
}

.orderSelect-title {
  font-weight: 500;
  font-size: 20px;
  white-space: wrap;
}

.orderSelect-comment {
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2em;
  margin-top: 6px;
  color: var(--text-color);
}

.orderSelect-radioActive {
  border-color: var(--primary-color);
  box-shadow: inset 0 0 0 1px var(--primary-color);
}

.orderSelect-itemWrapper {
  display: flex;
  gap: 12px;
}

.orderSelect-itemImgWrapper {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
}

.orderSelect-itemImg {
  width: 24px;
  height: fit-content;
}

@media (max-width: 768px) {
  .orderSelect-container {
    flex-direction: column;
  }

  .orderSelect-radio {
    min-width: 0;
  }
}
</style>
