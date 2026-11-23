<script lang="ts" setup>
import { toTriads } from '~/utils/toTriads';

defineProps<{
  price: {
    primary: { amount: string; currency: 'rub' | 'usd' };
    secondary: { amount: string; currency: 'rub' | 'usd' } | null;
  };
}>();

const currencySymbol: Record<string, string> = { rub: '₽', usd: '€' };
</script>

<template>
  <span class="price">
    <strong>{{ toTriads(price.primary.amount as unknown as number) }}</strong>&nbsp;<span class="ruble">{{ currencySymbol[price.primary.currency] }}</span>
    <span v-if="price.secondary" class="pricelist-secondaryPrice">
      (&#8776;<strong>{{ toTriads(price.secondary.amount as unknown as number) }}</strong>&nbsp;<span class="ruble">{{ currencySymbol[price.secondary.currency] }}</span>)
    </span>
  </span>
</template>

<style>
.pricelist-secondaryPrice {
  color: var(--text-secondary-color);
  font-size: 13px;
}
</style>
