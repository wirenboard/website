<script lang="ts" setup>
import CartAdd from '~/assets/icons/cart-add.svg';
import Document from '~/assets/icons/document.svg';
import Close from '~/assets/icons/close.svg';
import type { UserOrder } from '~/common/types';

defineProps<{
  order: UserOrder;
  repeatingId: number | null;
  cancelingId: number | null;
}>();

const emit = defineEmits<{
  repeat: [id: number];
  cancel: [order: UserOrder];
}>();

const { t, locale } = useI18n();

const updUrl = (id: number) => `/${locale.value}/ng/api/v1/user/orders/${id}/upd/`;
</script>

<template>
  <div class="orders-actions">
    <button
      v-tooltip.top="t('buttonRepeat')"
      type="button"
      class="orders-action orders-action-icon"
      :disabled="repeatingId === order.id"
      :aria-label="t('buttonRepeat')"
      @click="emit('repeat', order.id)"
    ><CartAdd /></button>
    <a
      v-if="order.canUpd"
      v-tooltip.top="t('buttonUpd')"
      class="orders-action orders-action-icon orders-action-upd"
      :href="updUrl(order.id)"
      :aria-label="t('buttonUpd')"
      target="_blank"
    ><Document :filled="true" /></a>
    <button
      v-if="order.canCancel"
      v-tooltip.top="t('buttonCancel')"
      type="button"
      class="orders-action orders-action-icon orders-action-cancel"
      :disabled="cancelingId === order.id"
      :aria-label="t('buttonCancel')"
      @click="emit('cancel', order)"
    ><Close /></button>
  </div>
</template>

<style>
.orders-actions {
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
}

.orders-action {
  flex-shrink: 0;
  white-space: nowrap;
  border: 0;
  background: none;
  color: var(--link-color);
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-family: 'Plumb', sans-serif;
}

.orders-action-icon {
  display: inline-flex;
  align-items: center;
}

.orders-action-icon svg {
  width: 17px;
  height: 17px;
}

[role="tooltip"] {
  position: absolute;
  z-index: 1100;
}

[role="tooltip"] [data-pc-section="text"] {
  background: #1f2937;
  color: #fff;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-family: 'Plumb', sans-serif;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

[role="tooltip"] [data-pc-section="arrow"] {
  display: none;
}

.orders-action:hover:not(:disabled) {
  text-decoration: underline;
}

.orders-action-icon:hover:not(:disabled) {
  text-decoration: none;
  opacity: 0.75;
}

.orders-action:disabled {
  opacity: 0.5;
  cursor: default;
}

.orders-action-cancel {
  color: var(--danger-color);
}
</style>

<i18n>
{
  "ru": {
    "buttonRepeat": "Положить товары заказа в корзину",
    "buttonUpd": "УПД",
    "buttonCancel": "Отменить"
  },
  "en": {
    "buttonRepeat": "Add order items to cart",
    "buttonUpd": "Document",
    "buttonCancel": "Cancel"
  }
}
</i18n>
