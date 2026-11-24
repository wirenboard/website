<script lang="ts" setup>
import type { Currency } from '~/common/types';

const { t } = useI18n();

const props = defineProps<{
  currency: Currency;
  itemsSum: number;
  promocodeDiscount: number;
  bulkDiscount: number;
  partnerDiscount: number;
  showDelivery: boolean;
  deliveryPending: boolean;
  deliveryPricePending: boolean;
  deliveryPrice: number;
  totalSum: number;
}>();

// Валюту называет бэкенд (basketData.currency), суммы приходят уже в ней — по локали здесь ничего
// не выбирается. Рубли показываем целыми, евро — с центами, как в карточке товара.
const formatMoney = (value: number) => {
  if (props.currency === 'EUR') {
    const [whole, cents] = value.toFixed(2).split('.');
    return `€${toTriads(Number(whole))}.${cents}`;
  }
  return `${toTriads(Math.round(value))} ₽`;
};
</script>

<template>
  <div class="order-summary">
    <div class="order-summaryRow">
      <span>{{ t('items') }}</span>
      <span>{{ formatMoney(props.itemsSum) }}</span>
    </div>
    <div v-if="props.promocodeDiscount > 0" class="order-summaryRow order-summaryRow--discount">
      <span>{{ t('promoCodeDiscount') }}</span>
      <span>−{{ formatMoney(props.promocodeDiscount) }}</span>
    </div>
    <div v-if="props.bulkDiscount > 0" class="order-summaryRow order-summaryRow--discount">
      <span>{{ t('bulkDiscount') }}</span>
      <span>−{{ formatMoney(props.bulkDiscount) }}</span>
    </div>
    <div v-if="props.partnerDiscount > 0" class="order-summaryRow order-summaryRow--discount">
      <span>{{ t('partnerDiscount') }}</span>
      <span>−{{ formatMoney(props.partnerDiscount) }}</span>
    </div>
    <div v-if="props.showDelivery" class="order-summaryRow">
      <span>{{ t('delivery') }}</span>
      <span v-if="props.deliveryPending" class="order-summarySkeleton" />
      <span v-else>{{ props.deliveryPricePending ? '?' : (props.deliveryPrice > 0 ? formatMoney(props.deliveryPrice) : t('priceFree')) }}</span>
    </div>
    <div class="order-summaryRow order-summaryRow--total">
      <span>{{ t('total') }}</span>
      <span v-if="props.deliveryPending" class="order-summarySkeleton order-summarySkeleton--total" />
      <span v-else>{{ formatMoney(props.totalSum) }}</span>
    </div>
  </div>
</template>

<style scoped>
.order-summary {
  margin-bottom: 32px;
}

.order-summaryRow {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 4px 0;
  font-size: 18px;
}

.order-summaryRow > span:last-child {
  white-space: nowrap;
}

.order-summaryRow--total {
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
  font-weight: 500;
  font-size: 23px;
}

.order-summaryRow--total span:last-child {
  color: var(--primary-color);
}

.order-summarySkeleton {
  display: inline-block;
  width: 90px;
  height: 1em;
  border-radius: 4px;
  background: linear-gradient(90deg, #eee 25%, #e0e0e0 37%, #eee 63%);
  background-size: 400% 100%;
  animation: order-skeletonShimmer 1.4s ease infinite;
}

.order-summarySkeleton--total {
  width: 110px;
}

@keyframes order-skeletonShimmer {
  0% { background-position: 100% 0; }
  100% { background-position: 0 0; }
}
</style>

<i18n>
{
  "ru": {
    "items": "Сумма товаров",
    "promoCodeDiscount": "Скидка по промокоду",
    "bulkDiscount": "Скидка оптовая",
    "partnerDiscount": "Скидка партнёрская",
    "delivery": "Доставка",
    "priceFree": "Бесплатно",
    "total": "ИТОГО"
  },
  "en": {
    "items": "Items total",
    "promoCodeDiscount": "Promo code discount",
    "bulkDiscount": "Bulk discount",
    "partnerDiscount": "Partner discount",
    "delivery": "Delivery",
    "priceFree": "Free",
    "total": "TOTAL"
  }
}
</i18n>
