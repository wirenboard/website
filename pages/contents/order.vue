<script lang="ts" setup>
import Loader from '~/components/Loader.vue';
import Button from '~/components/Button.vue';
import type {OrderInfo, DeliveryInfo} from "~/common/types";

const { t, locale } = useI18n();
const payerType = ref('individual');
const paymentType = ref('');
const deliveryType = ref('wirenboard');
const deliveryData = ref({});
const deliveryQuery = ref({});

const { data: orderInfo } = await useApi<OrderInfo>(`/order/info/`);
const { data: delivery, pending, refresh: refreshDelivery } = await useApi<DeliveryInfo>(`/order/delivery/`, deliveryQuery.value);

const individual = ref(orderInfo.value!.customerData.individual);
const entity = ref(orderInfo.value!.customerData.entity);

useHead({
  title: t('title'),
});

const makeOrder = async () => {};
watch(() => deliveryData.value, async (value) => {
  deliveryQuery.value = {
    delivery_type: deliveryData.value.type,
    cdek_pvz_cost: deliveryData.value.tariff.delivery_sum,
    cdek_pvz_tariff: deliveryData.value.tariff.tariff_code,
    cdek_pvz_country_code: deliveryData.value.destination.country_code,
    cdek_pvz_city_code: deliveryData.value.destination.city_code,
  };

  refreshDelivery();
});
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
      :delivery="delivery!"
      :countries="orderInfo!.countries"
    />

    <OrderPayment
      v-model:paymentType="paymentType"
      :payerType="payerType"
    />

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
          <span v-else class="order-sum">{{ locale === 'ru' ? `${toTriads(delivery?.total_sum)} ₽` : `€${toTriads(delivery?.total_sum)}` }}</span>
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
</style>

<i18n>
{
  "ru": {
    "title": "Оформление заказа — Wiren Board",
    "checkout": "Оформить заказ",
    "toPay": "К оплате:"
  },
  "en": {
    "title": "Order — Wiren Board",
    "checkout": "Checkout",
    "toPay": "To pay:"
  }
}
</i18n>
