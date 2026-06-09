<script setup lang="ts">
const props = defineProps<{ payerType: string; country: number }>();
const paymentType = defineModel<string>('paymentType', { default: '' });

const { t } = useI18n();

const params = computed(() => ({ payerType: props.payerType, country: props.country }));
const { data: paymentMethods } = await useApi<string[]>(
  '/order/payments/',
  params,
);

const paymentTypes = computed(() =>
  (paymentMethods.value!).map(method => ({
    id: method,
    title: t(method),
    comment: t(`${method}Comment`),
  }))
);

watch(paymentMethods, (methods) => {
  if (!methods) return;
  if (!methods.includes(paymentType.value)) {
    paymentType.value = methods[0] ?? '';
  }
}, { immediate: true });
</script>

<template>
  <div class="order-payment">
    <h2>{{ t('title') }}</h2>

    <OrderSelect
      v-model="paymentType"
      :items="paymentTypes"
    />
  </div>
</template>

<style scoped>
.order-payment {
  margin-top: 56px;
  margin-bottom: 48px;
}
</style>

<i18n>
{
  "ru": {
    "title": "Выберите способ оплаты",
    "qr": "По QR–коду",
    "qrComment": "Оплата по QR–коду через мобильное приложение банка",
    "card": "Банковской картой",
    "cardComment": "Visa / Mastercard / МИР",
    "requisites": "Банковским переводом",
    "requisitesComment": "По реквизитам"
  },
  "en": {
    "title": "Select a payment method",
    "qr": "Via QR code",
    "qrComment": "Pay via QR code using your bank's mobile app",
    "card": "By bank card",
    "cardComment": "Visa / Mastercard / MIR",
    "requisites": "By bank transfer",
    "requisitesComment": "Using bank details"
  }
}
</i18n>
