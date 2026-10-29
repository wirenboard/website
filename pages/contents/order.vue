<script lang="ts" setup>
import Alert from '~/components/Alert.vue';
import Button from '~/components/Button.vue';
import { DeliveryType, OrderErrorKind, type OrderInfo, type AvailableDeliveriesInfo } from '~/common/types';

const { t, locale } = useI18n();

useHead({
  title: t('title'),
});

const { data: orderInfo } = await useApi<OrderInfo>(`/order/prefill-info/`);

const payerType = ref(orderInfo.value!.payerType);
const individual = ref(orderInfo.value!.payerData.individual);
const entity = ref(orderInfo.value!.payerData.entity);
const country = ref(Number(orderInfo.value!.deliveryData.country));

const { paymentsInfo, paymentType } = await useOrderPayment(payerType, country);

const {
  deliveryData,
  deliveryType,
  deliveryQuery,
  deliveryInfo,
  deliveryInfoPending,
  selectedDeliveryItem,
  deliveryErrorKind,
  fulfillmentDeliveryError,
  deliveryPriceRub,
  deliveryPricePending,
  deliveryPromocodeIneffective,
} = await useOrderDelivery(orderInfo, country);

type BasketPricing = { itemsSumRub: number; promocodeDiscountRub: number; bulkDiscountRub: number; partnerDiscountRub: number };

const normalizePricing = (data: Partial<BasketPricing>): BasketPricing => ({
  itemsSumRub: data.itemsSumRub ?? 0,
  promocodeDiscountRub: data.promocodeDiscountRub ?? 0,
  bulkDiscountRub: data.bulkDiscountRub ?? 0,
  partnerDiscountRub: data.partnerDiscountRub ?? 0,
});

const pricing = ref(normalizePricing(orderInfo.value!.basketData));

const onPromocodeApplied = (
  basketData: Partial<BasketPricing>,
  deliveryOptions?: AvailableDeliveriesInfo,
) => {
  pricing.value = normalizePricing(basketData);
  if (deliveryOptions) {
    deliveryInfo.value = deliveryOptions;
  }
};

const totalSum = computed(() =>
  pricing.value.itemsSumRub
  - pricing.value.promocodeDiscountRub
  - pricing.value.bulkDiscountRub
  - pricing.value.partnerDiscountRub
  + deliveryPriceRub.value
);

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
            :itemsSumRub="pricing.itemsSumRub"
            :promocodeDiscountRub="pricing.promocodeDiscountRub"
            :bulkDiscountRub="pricing.bulkDiscountRub"
            :partnerDiscountRub="pricing.partnerDiscountRub"
            :showDelivery="selectedDeliveryItem?.type !== DeliveryType.Pickup"
            :deliveryPending="deliveryInfoPending"
            :deliveryPricePending="deliveryPricePending"
            :deliveryPriceRub="deliveryPriceRub"
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
