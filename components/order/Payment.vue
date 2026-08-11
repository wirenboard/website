<script setup lang="ts">
// Список способов и дефолт запрашивает и выбирает order.vue (владелец состояния) —
// см. комментарий там про SSR/hydration; здесь только отображение.
const props = defineProps<{ paymentsInfo: { methods: string[]; default: string } | null }>();
const paymentType = defineModel<string>('paymentType');

const { t } = useI18n();

const paymentTypes = computed(() =>
  (props.paymentsInfo?.methods ?? []).map(method => ({
    id: method,
    title: t(method),
    comment: t(`${method}Comment`),
  }))
);
</script>

<template>
  <div class="order-payment">
    <h2>{{ t('title') }}</h2>

    <OrderSelect
      v-model="paymentType"
      name="payment"
      :items="paymentTypes"
    />

    <p v-if="paymentType === 'card'" class="order-paymentWarning">
      <i18n-t keypath="cardWarning">
        <template #link>
          <a href="https://ria.ru/20260804/brauzery-2108832797.html" target="_blank" rel="noopener">{{ t('cardWarningLink') }}</a>
        </template>
      </i18n-t>
    </p>
  </div>
</template>

<style scoped>
.order-payment {
  margin-top: 56px;
  margin-bottom: 48px;
}

.order-paymentWarning {
  margin-top: 18px;
  padding: 14px 18px;
  border: 1px solid #f0c36d;
  border-radius: 2px;
  background: #fdf7e6;
  font-size: 20px;
  line-height: 1.4em;
  color: var(--text-color);
}

.order-paymentWarning a {
  color: var(--link-color);
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
    "requisitesComment": "По реквизитам",
    "cardWarning": "К сожалению, из-за отзыва сертификатов {link}. Для того чтобы оплатить заказ по карте, выберите на следующем шаге оплату по QR-коду, либо оформите заказ в Яндекс Браузере. Приносим свои извинения, мы сделаем все возможное для решения проблемы.",
    "cardWarningLink": "некоторые браузеры ограничивают доступ к оплате по карте"
  },
  "en": {
    "title": "Select a payment method",
    "qr": "Via QR code",
    "qrComment": "Pay via QR code using your bank's mobile app",
    "card": "By bank card",
    "cardComment": "Visa / Mastercard / MIR",
    "requisites": "By bank transfer",
    "requisitesComment": "Using bank details",
    "cardWarning": "Unfortunately, due to certificate revocation, {link}. To pay for your order by card, select QR code payment at the next step, or place your order using Yandex Browser. We apologize for the inconvenience and are doing our best to resolve the issue.",
    "cardWarningLink": "some browsers restrict access to card payments"
  }
}
</i18n>
