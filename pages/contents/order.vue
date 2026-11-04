<script lang="ts" setup>
import Alert from '~/components/Alert.vue';
import Button from '~/components/Button.vue';
import {
  DeliveryType,
  OrderErrorKind,
  type OrderInfo,
  type AvailableDeliveriesInfo,
  type BasketPricing,
  type BasketPricingResponse,
} from '~/common/types';

const { t, locale } = useI18n();

useHead({
  title: t('title'),
});

// При SSR всё, что нужно странице, PHP уже передал в заголовке X-WB-Order (useOrderPrefill):
// иначе этот запрос и два следующих (payments, delivery) шли бы из Nuxt обратно в тот же PHP,
// который в это время ждёт ответа Nuxt. Чего в заголовке нет — запрашивается у API как обычно.
const orderPrefill = useOrderPrefill();
const { data: orderInfo } = await useApi<OrderInfo>(`/order/prefill-info/`, null, { prefill: () => orderPrefill?.orderInfo });

const payerType = ref(orderInfo.value!.payerType);
const individual = ref(orderInfo.value!.payerData.individual);
const entity = ref(orderInfo.value!.payerData.entity);
const country = ref(Number(orderInfo.value!.deliveryData.country));

const { paymentsInfo, paymentType } = await useOrderPayment(payerType, country, orderPrefill);

const {
  deliveryData,
  deliveryType,
  deliveryQuery,
  deliveryInfo,
  deliveryInfoPending,
  selectedDeliveryItem,
  deliveryErrorKind,
  fulfillmentDeliveryError,
  deliveryPrice,
  deliveryPricePending,
  deliveryPromocodeIneffective,
} = await useOrderDelivery(orderInfo, country, orderPrefill);

// Все суммы приходят с бэкенда уже в валюте локали (basketData.currency) — фронт их не
// пересчитывает и не выбирает валюту по локали сам. Откат на переходный период: если бэкенд новых
// полей не прислал (не выкачен или откачен), берём старые *Rub — они всегда в рублях, поэтому и
// валюта RUB; на en это даст рубли вместо евро, но не нули.
const normalizePricing = (data: BasketPricingResponse): BasketPricing => {
  if (data.itemsSum === undefined) {
    console.warn('[order] basketData without itemsSum/currency, falling back to legacy *Rub fields');
  }
  return {
    currency: data.currency ?? 'RUB',
    itemsSum: data.itemsSum ?? data.itemsSumRub ?? 0,
    promocodeDiscount: data.promocodeDiscount ?? data.promocodeDiscountRub ?? 0,
    bulkDiscount: data.bulkDiscount ?? data.bulkDiscountRub ?? 0,
    partnerDiscount: data.partnerDiscount ?? data.partnerDiscountRub ?? 0,
  };
};

const pricing = ref(normalizePricing(orderInfo.value!.basketData));

const onPromocodeApplied = (
  basketData: BasketPricingResponse,
  deliveryOptions?: AvailableDeliveriesInfo,
) => {
  pricing.value = normalizePricing(basketData);
  if (deliveryOptions) {
    deliveryInfo.value = deliveryOptions;
  }
};

// «ИТОГО» — total выбранной доставки из /order/delivery/ (и из deliveryOptions ответа промокода):
// одно число в валюте локали, которое бэкенд считает из тех же сумм, что и строки выше и виджет
// корзины (см. CheckoutCurrency в PHP). Сумму строк считаем сами только пока выбранного варианта
// доставки ещё нет.
const linesSum = computed(() =>
  pricing.value.itemsSum
  - pricing.value.promocodeDiscount
  - pricing.value.bulkDiscount
  - pricing.value.partnerDiscount
  + deliveryPrice.value
);
const totalSum = computed(() => selectedDeliveryItem.value?.total ?? linesSum.value);

const promocodeRef = ref<{ applying: boolean } | null>(null);
const promocodeApplying = computed(() => promocodeRef.value?.applying ?? false);

const formRef = ref<HTMLFormElement | null>(null);
const submitBlocked = computed(() => fulfillmentDeliveryError.value || promocodeApplying.value);

const { submitPending, orderError, orderErrorKind, fieldErrors, makeOrder } = await useOrderSubmit({
  formRef,
  payerType,
  individual,
  entity,
  paymentType,
  deliveryType,
  deliveryData,
  blocked: submitBlocked,
});
</script>

<template>
  <p v-if="orderInfo!.basketData.cost === 0" class="order-empty">{{ t('emptyCart') }}</p>
  <form v-else ref="formRef" class="order" @submit.prevent="makeOrder">
    <div class="order-layout">
      <div class="order-mainColumn">
        <fieldset class="order-sectionCard">
          <OrderCustomer
            v-model:payerType="payerType"
            v-model:individual="individual"
            v-model:entity="entity"
            v-model:country="country"
            :countries="orderInfo!.countries"
            :cdekCountries="orderInfo!.cdekCountries"
            :recentOrgs="orderInfo!.recentOrgs"
            :fieldErrors="fieldErrors"
          />
        </fieldset>

        <fieldset class="order-sectionCard">
          <OrderFulfillment
            v-model:deliveryType="deliveryType"
            v-model:deliveryData="deliveryData"
            v-model:country="country"
            :deliveryInfo="deliveryInfo"
            :deliveryErrorKind="deliveryErrorKind"
            :basketData="orderInfo!.basketData"
            :recentAddresses="orderInfo!.recentAddresses"
            :fieldErrors="fieldErrors"
          />
        </fieldset>

        <fieldset class="order-sectionCard">
          <OrderPayment
            v-model:paymentType="paymentType"
            :paymentsInfo="paymentsInfo"
          />
        </fieldset>
      </div>

      <div class="order-checkoutColumn">
        <div class="order-sectionCard order-checkoutCard">
          <Alert v-if="orderError && !Object.keys(fieldErrors).length" variant="error" class="order-error">
            <i18n-t :keypath="orderErrorKind === OrderErrorKind.Payment ? 'paymentError' : 'error'">
              <template #office>
                <a :href="`https://wirenboard.com/${locale}/pages/contacts/`" target="_blank">{{ t('office') }}</a>
              </template>
            </i18n-t>
          </Alert>

          <OrderSummary
            :currency="pricing.currency"
            :itemsSum="pricing.itemsSum"
            :promocodeDiscount="pricing.promocodeDiscount"
            :bulkDiscount="pricing.bulkDiscount"
            :partnerDiscount="pricing.partnerDiscount"
            :showDelivery="selectedDeliveryItem?.type !== DeliveryType.Pickup"
            :deliveryPending="deliveryInfoPending"
            :deliveryPricePending="deliveryPricePending"
            :deliveryPrice="deliveryPrice"
            :totalSum="totalSum"
          />

          <OrderPromocode
            ref="promocodeRef"
            :payerType="payerType"
            :initialCode="orderInfo!.promocode"
            :initialNotices="orderInfo!.promocodeNotices"
            :fieldErrors="fieldErrors"
            :deliveryPromocodeIneffective="deliveryPromocodeIneffective"
            :deliveryQuery="deliveryQuery"
            @applied="onPromocodeApplied"
          />

          <div class="order-finalize">
            <Button
              type="submit"
              size="large"
              class="order-finalizeBtn"
              :disabled="deliveryInfoPending || submitPending || fulfillmentDeliveryError || promocodeApplying"
              :isLoading="submitPending"
              :label="t('checkout')"
              :variant="'primary'"
              :outlined="false"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style>
.order {
  color: #000;
}

.order-layout {
  display: flex;
  align-items: flex-start;
  gap: 32px;
}

.order-mainColumn {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.order-sectionCard {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--border-color) !important;
}

fieldset.order-sectionCard {
  border: none;
  margin: 0;
  min-width: 0;
}

.order-sectionCard legend {
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 500;
  line-height: 1em;
  margin-bottom: 4px;
  padding: 0 6px;
}

#wrapper {
  overflow: visible;
}

.order-checkoutColumn {
  position: relative;
  width: 360px;
  flex-shrink: 0;
  align-self: stretch;
}

.order-checkoutCard {
  width: 100%;
  z-index: 10;
  margin-top: 14px;
  position: sticky;
  top: 88px;
}

.order-checkoutCard .order-error {
  margin-bottom: 24px;
}

.order-finalize {
  display: flex;
  align-items: center;
}

.order-finalizeBtn {
  width: 100%;
}

.order-empty {
  font-size: 23px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .order-sectionCard {
    padding: 16px;
  }
}

@media (max-width: 1024px) {
  .order-layout {
    flex-direction: column;
  }

  .order-checkoutColumn {
    width: 100%;
    align-self: auto;
  }

  .order-checkoutCard {
    position: static;
  }
}
</style>

<i18n>
{
  "ru": {
    "title": "Оформление заказа",
    "emptyCart": "Ваша корзина пуста",
    "checkout": "Оформить заказ",
    "error": "При создании заказа возникла ошибка. Попробуйте позднее или свяжитесь с {office}.",
    "paymentError": "Возникла проблема с выбранным способом оплаты. Попробуйте другой способ, повторите попытку позже или свяжитесь с нашим {office}.",
    "office": "офисом"
  },
  "en": {
    "title": "Order",
    "emptyCart": "Your cart is empty",
    "checkout": "Checkout",
    "error": "An error occurred while creating the order. Please try again later or contact our {office}.",
    "paymentError": "There was an issue with your selected payment method. Please try another payment method, try again later, or contact our {office}.",
    "office": "office"
  }
}
</i18n>
