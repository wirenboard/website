<script lang="ts" setup>
import Loader from '~/components/Loader.vue';
import Button from '~/components/Button.vue';
import type {OrderInfo} from "~/common/types";

const { t, locale } = useI18n();

const totalSum = ref(0);
const fulfillmentPending = ref(false);
const submitPending = ref(false);

const orderError = ref(false);

const { data: orderInfo } = await useApi<OrderInfo>(`/order/prefill-info/`);

const payerType = ref(orderInfo.value!.payerType);
const individual = ref(orderInfo.value!.payerData.individual);
const entity = ref(orderInfo.value!.payerData.entity);

const deliveryData = ref(orderInfo.value!.deliveryData);
const deliveryType = ref(orderInfo.value!.deliveryType);
const country = ref(Number(orderInfo.value!.deliveryData.country));

const paymentType = ref(orderInfo.value!.paymentType);


useHead({
  title: t('title'),
});

const orderPayload = ref<any>(null);
const { execute: submitOrder, data: orderResult, error: orderRequestError } = await useApi<{ redirect_url: string }>(
  '/order/create/',
  null,
  { method: 'POST', body: orderPayload, immediate: false }
);

const formRef = ref<HTMLFormElement | null>(null);

const makeOrder = async () => {
  const firstInvalid = formRef.value?.querySelector(':invalid:not(fieldset)') as HTMLElement | null;
  if (firstInvalid) {
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstInvalid.focus();
    return;
  }

  orderError.value = false;
  submitPending.value = true;
  orderPayload.value = {
    payerType: payerType.value,
    payerData: payerType.value === 'individual' ? individual.value : entity.value,
    paymentType: paymentType.value,
    deliveryType: deliveryType.value,
    deliveryData: deliveryData.value,
  };
  await submitOrder();
  submitPending.value = false;
  if (orderRequestError.value) {
    orderError.value = true;
    return;
  }
  if (orderResult.value?.redirect_url) {
    window.location.replace(orderResult.value.redirect_url);
  }
};
</script>

<template>
  <p v-if="orderInfo!.basketData.cost === 0" class="order-empty">{{ t('emptyCart') }}</p>
  <form v-else ref="formRef" class="order" @submit.prevent="makeOrder">
    <OrderCustomer
      v-model:payerType="payerType"
      v-model:individual="individual"
      v-model:entity="entity"
      v-model:country="country"
      :countries="orderInfo!.countries"
      :cdekCountries="orderInfo!.cdekCountries"
      :recentOrgs="orderInfo!.recentOrgs"
    />

    <OrderFulfillment
      v-model:deliveryType="deliveryType"
      v-model:deliveryData="deliveryData"
      v-model:totalSum="totalSum"
      v-model:pending="fulfillmentPending"
      v-model:country="country"
      :basketData="orderInfo!.basketData"
      :recentAddresses="orderInfo!.recentAddresses"
    />

    <OrderPayment
      v-model:paymentType="paymentType"
      :payerType="payerType"
      :country="country"
    />

    <p v-if="orderError" class="order-error">
      <i18n-t keypath="error">
        <template #office>
          <a :href="`https://wirenboard.com/${locale}/pages/contacts/`" target="_blank">{{ t('office') }}</a>
        </template>
      </i18n-t>
    </p>

    <div class="order-finalize">
      <Button
        type="submit"
        size="large"
        :disabled="fulfillmentPending || submitPending"
        :isLoading="submitPending"
        :label="t('checkout')"
        :variant="'primary'"
        :outlined="false"
      />
      <div>
        <span class="order-toPay">
          {{ t('toPay') }}
          <Loader v-if="fulfillmentPending" />
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

.order-empty {
  font-size: 23px;
  font-weight: 500;
}

.order-error {
  background-color: #FFA3A5;
  color: #fff;
  padding: 12px 16px;
  border-radius: 15px;
}

.order-error a {
  color: #fff;
  text-decoration: underline;
}

.order-error a:hover {
  opacity: 0.75;
}

@media (max-width: 768px) {
  .order h2 {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .order h2:not(:first-child) {
    margin-top: 40px;
  }

  .order-finalize {
    flex-wrap: wrap;
    gap: 20px;
  }

  .order-sum {
    white-space: nowrap;
  }
}
</style>

<i18n>
{
  "ru": {
    "title": "Оформление заказа — Wiren Board",
    "emptyCart": "Ваша корзина пуста",
    "checkout": "Оформить заказ",
    "toPay": "К оплате:",
    "error": "При создании заказа возникла ошибка. Попробуйте позднее или свяжитесь с {office}.",
    "office": "офисом"
  },
  "en": {
    "title": "Order — Wiren Board",
    "emptyCart": "Your cart is empty",
    "checkout": "Checkout",
    "toPay": "To pay:",
    "error": "An error occurred while creating the order. Please try again later or contact our {office}.",
    "office": "office"
  }
}
</i18n>
