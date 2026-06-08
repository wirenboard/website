<script lang="ts" setup>
import Loader from '~/components/Loader.vue';
import Button from '~/components/Button.vue';
import {DefaultDeliveryId} from "~/common/types";
import type {OrderInfo} from "~/common/types";

const { t, locale } = useI18n();
const payerType = ref('individual');
const paymentType = ref('card');
const totalSum = ref(0);
const pending = ref(false);
const deliveryData = ref<Record<string, any>>({});
const deliveryType = ref(DefaultDeliveryId);
const orderError = ref(false);

const { data: orderInfo } = await useApi<OrderInfo>(`/order/info/`);

const individual = ref(orderInfo.value!.customerData.individual);
const entity = ref(orderInfo.value!.customerData.entity);

useHead({
  title: t('title'),
});

const orderPayload = ref<any>(null);
const { execute: submitOrder, data: orderResult, error: orderRequestError } = await useApi<{ redirect_url: string }>(
  '/order/create/',
  null,
  { method: 'POST', body: orderPayload, immediate: false }
);

const makeOrder = async () => {
  orderError.value = false;
  orderPayload.value = {
    payerType: payerType.value,
    payerData: payerType.value === 'individual' ? individual.value : entity.value,
    paymentType: paymentType.value,
    deliveryType: deliveryType.value,
    deliveryData: deliveryData.value,
  };
  await submitOrder();
  if (orderRequestError.value) {
    orderError.value = true;
    return;
  }
  if (orderResult.value?.redirect_url) {
    await navigateTo(orderResult.value.redirect_url, { external: true });
  }
};
</script>

<template>
  <form class="order" @submit.prevent="makeOrder">
    <OrderCustomer
      v-model:payerType="payerType"
      v-model:individual="individual"
      v-model:entity="entity"
    />

    <OrderFulfillment
      v-model:deliveryType="deliveryType"
      v-model:deliveryData="deliveryData"
      v-model:totalSum="totalSum"
      v-model:pending="pending"
      :countries="orderInfo!.countries"
      :defaultCountry="orderInfo!.defaultCountry"
      :basketData="orderInfo!.basketData"
    />

    <OrderPayment
      v-model:paymentType="paymentType"
      :payerType="payerType"
    />

    <p v-if="orderError" class="order-error">
      <i18n-t keypath="error">
        <template #office>
          <a :href="locale === 'ru' ? 'https://wirenboard.com/ru/pages/contacts/' : 'https://wirenboard.com/en/pages/contacts/'" target="_blank">{{ t('office') }}</a>
        </template>
      </i18n-t>
    </p>

    <div class="order-finalize">
      <Button
        type="submit"
        size="large"
        :disabled="pending"
        :label="t('checkout')"
        :variant="'primary'"
        :outlined="false"
      />
      <div>
        <span class="order-toPay">
          {{ t('toPay') }}
          <Loader v-if="pending" />
          <span v-else class="order-sum">{{ locale === 'ru' ? `${toTriads(totalSum)} ₽` : `€${toTriads(totalSum)}` }}</span>
        </span>
      </div>
    </div>
  </form>
</template>

<style>
.order {
  color: #000;
}

.order h2 {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 500;
  line-height: 1em;
  margin-bottom: 36px;
}

.order h2:not(:first-child) {
  margin-top: 56px;
}

.order-finalize {
  display: flex;
  align-items: center;
  gap: 48px;
}

.order-toPay {
  font-weight: 500;
  font-size: 23px;
  line-height: 1em;
  margin-right: 8px;
}

.order-sum {
  font-weight: 500;
  font-size: 23px;
  line-height: 1em;
  margin-right: 16px;
  color: var(--primary-color);
}

.order-error {
  background-color: #FF474C;
  color: #fff;
  padding: 12px 16px;
  border-radius: 15px;
  opacity: 0.5;
}
</style>

<i18n>
{
  "ru": {
    "title": "Оформление заказа — Wiren Board",
    "checkout": "Оформить заказ",
    "toPay": "К оплате:",
    "error": "При создании заказа возникла ошибка. Попробуйте позднее или свяжитесь с {office}.",
    "office": "офисом"
  },
  "en": {
    "title": "Order — Wiren Board",
    "checkout": "Checkout",
    "toPay": "To pay:",
    "error": "An error occurred while creating the order. Please try again later or contact our {office}.",
    "office": "office"
  }
}
</i18n>
