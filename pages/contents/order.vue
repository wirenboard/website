<script lang="ts" setup>
import Loader from '~/components/Loader.vue';
import Button from '~/components/Button.vue';
import type {OrderInfo} from "~/common/types";

const { t, locale } = useI18n();
const payerType = ref('individual');
const paymentType = ref('');
const deliveryType = ref('wirenboard');
const deliveryData = ref({});
const individual = ref({ fio: '', phone: '', email: '', comment: '' });
const entity = ref({ inn: '', orgName: '', address: '', email: '', comment: '' });
const pvzQuery = ref({});

const { data: orderInfo } = await useApi<OrderInfo>(`/order/info/`);
const { data: calculate, pending, refresh } = await useApi(`/order/calculate/`, pvzQuery.value ? { query: pvzQuery.value } : null);
// TODO пересчитывать стоимость
// totalSum.value = locale.value === 'ru' ? calculate.value!.total_sum : calculate.value!.total_sum;
//  http://localhost:8321/ru/ng/api/v1/order/calculate/?delivery_type=cdek&country_id=643&city=%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&postcode=196084&region=qwe

individual.value = orderInfo.value.savedForm.individual;
entity.value = orderInfo.value.savedForm.entity;

useHead({
  title: t('title'),
});

const makeOrder = async () => {};
watch(() => deliveryData.value, async (value) => {
  pvzQuery.value = {
    delivery_type: deliveryData.value.type,
    cdek_pvz_cost: deliveryData.value.tariff.delivery_sum,
    cdek_pvz_tariff: deliveryData.value.tariff.tariff_code,
    cdek_pvz_country_code: deliveryData.value.destination.country_code,
    cdek_pvz_city_code: deliveryData.value.destination.city_code,
  };

  refresh();
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
      />
      <div>
        <span class="order-toPay">
          {{ t('toPay') }}
          <Loader v-if="pending" />
          <span v-else class="order-sum">{{ locale === 'ru' ? `${toTriads(calculate.total_sum)} ₽` : `€${toTriads(calculate.total_sum)}` }}</span>
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
