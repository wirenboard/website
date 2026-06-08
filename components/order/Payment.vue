<script setup lang="ts">
const props = defineProps<{ payerType: string }>();
const paymentType = defineModel<string>('paymentType', { default: 'card' });

const { t } = useI18n();
const paymentTypes = computed(() => {
  const items = [
    { id: 'qr', title: t('qr'), comment: t('qrComment') },
    { id: 'card', title: t('card'), comment: t('cardComment') },
    { id: 'requisites', title: t('requisites'), comment: t('requisitesComment') },
  ];
  return items.filter(item => {
    if (props.payerType !== 'individual' && item.id === 'qr') {
      return;
    }
    return item;
  });
});

watch(() => props.payerType, (value) => {
  if (value !== 'individual' && paymentType.value === 'qr') {
    paymentType.value = 'card';
  }
});
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
