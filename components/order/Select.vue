<script setup lang="ts">
const props = defineProps<{
  name: string;
  items: { id: string; title: string; img?: string; comment?: string }[];
  ariaLabel?: string;
}>();

const modelValue = defineModel<string>();
const focusedId = computed(() => modelValue.value ?? props.items[0]?.id);

const itemRefs = ref<Record<string, HTMLElement | undefined>>({});
const setItemRef = (id: string) => (el: Element | null) => {
  itemRefs.value[id] = (el as HTMLElement) ?? undefined;
};

const selectAndFocus = (index: number) => {
  const item = props.items[index];
  if (!item) return;
  modelValue.value = item.id;
  nextTick(() => itemRefs.value[item.id]?.focus());
};

const onKeydown = (event: KeyboardEvent, index: number) => {
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault();
      selectAndFocus((index + 1) % props.items.length);
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault();
      selectAndFocus((index - 1 + props.items.length) % props.items.length);
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      selectAndFocus(index);
      break;
  }
};
</script>

<template>
  <div class="orderSelect-container" role="radiogroup" :aria-label="ariaLabel">
    <label
      v-for="(item, index) in items"
      :key="item.id"
      :ref="setItemRef(item.id)"
      class="orderSelect-radio"
      :class="{'orderSelect-radioActive': item.id === modelValue}"
      role="radio"
      :aria-checked="item.id === modelValue"
      :tabindex="item.id === focusedId ? 0 : -1"
      @keydown="onKeydown($event, index)"
    >
      <span class="orderSelect-itemWrapper">
        <span v-if="item.img" class="orderSelect-itemImgWrapper">
          <NuxtImg :src="item.img" :alt="item.title" class="orderSelect-itemImg" />
        </span>
        <span>
          <input type="radio" :name="name" :value="item.id" v-model="modelValue" tabindex="-1" />
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
  flex-wrap: wrap;
  gap: 18px;
}

.orderSelect-radio {
  box-sizing: border-box;
  padding: 16px 10px;
  border: 1px solid var(--border-color);
  border-radius: 2px;
  flex: 1 1 160px;
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
  font-size: 18px;
  white-space: wrap;
  line-height: 1em;
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
  height: auto;
}

@media (max-width: 768px) {
  .orderSelect-container {
    flex-direction: column;
  }

  .orderSelect-radio {
    flex-basis: auto;
  }
}
</style>
