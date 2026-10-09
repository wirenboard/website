<script lang="ts" setup>
import Button from '~/components/Button.vue';
import { DeliveryType, DeliveryError, type OrderInfo, type PaymentsInfo, type AvailableDeliveriesInfo } from '~/common/types';

const { t, locale } = useI18n();

const submitPending = ref(false);
const couponRef = ref<{ applying: boolean } | null>(null);
const couponApplying = computed(() => couponRef.value?.applying ?? false);

const orderError = ref(false);
const fieldErrors = ref<Record<string, string>>({});

const parseErrors = (data: any): Record<string, string> => {
  const result: Record<string, string> = {};
  const errors = data?.errors;
  if (!errors) return result;

  if (Array.isArray(errors)) {
    for (const e of errors) {
      if (e.field && e.message) {
        const key = e.field.includes('.') ? e.field.split('.').pop()! : e.field;
        result[key] = e.message;
      }
    }
  } else if (typeof errors === 'object') {
    for (const [field, messages] of Object.entries(errors)) {
      const key = field.includes('.') ? field.split('.').pop()! : field;
      if (Array.isArray(messages) && messages.length) {
        result[key] = messages[0] as string;
      } else if (typeof messages === 'string') {
        result[key] = messages;
      }
    }
  }
  return result;
};

const { data: orderInfo } = await useApi<OrderInfo>(`/order/prefill-info/`);

const payerType = ref(orderInfo.value!.payerType);
const individual = ref(orderInfo.value!.payerData.individual);
const entity = ref(orderInfo.value!.payerData.entity);

const deliveryData = ref(orderInfo.value!.deliveryData);
const deliveryType = ref(orderInfo.value!.deliveryType);
const country = ref(Number(orderInfo.value!.deliveryData.country));

const paymentsParams = computed(() => ({ payerType: payerType.value, country: country.value }));
const { data: paymentsInfo } = await useApi<PaymentsInfo>(
  '/order/payments/',
  paymentsParams,
  { watch: [payerType, country] },
);

const paymentType = ref(paymentsInfo.value?.default ?? '');

const payerTypeChanged = ref(false);
watch(payerType, () => { payerTypeChanged.value = true; });

watch(paymentsInfo, (info) => {
  if (!info) return;
  if (payerTypeChanged.value || !paymentType.value || !info.methods.includes(paymentType.value)) {
    payerTypeChanged.value = false;
    paymentType.value = info.default;
  }
});


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

const settledDeliveryData = ref<Record<string, any>>({ ...deliveryData.value });
const DELIVERY_DATA_KEYS = [
  'city', 'postcode', 'street', 'house', 'room',
  'cdek_pvz_id', 'cdek_pvz_address', 'cdek_pvz_country_code',
  'cdek_pvz_city_code', 'cdek_pvz_city', 'cdek_pvz_tariff', 'cdek_pvz_postal_code',
];
const normalizeDeliveryData = (value: Record<string, any>) =>
  DELIVERY_DATA_KEYS.map(key => `${key}=${value[key] ?? ''}`).join('|');
let lastDeliveryDataJson = normalizeDeliveryData(deliveryData.value);
let deliveryDebounceTimer: ReturnType<typeof setTimeout> | null = null;
watch(deliveryData, (value, oldValue) => {
  const json = normalizeDeliveryData(value);
  if (json === lastDeliveryDataJson) return;
  lastDeliveryDataJson = json;

  if (deliveryDebounceTimer) clearTimeout(deliveryDebounceTimer);
  if (value.cdek_pvz_id !== oldValue?.cdek_pvz_id) {
    settledDeliveryData.value = { ...value };
    return;
  }
  deliveryDebounceTimer = setTimeout(() => {
    const { city, postcode, street, house } = value;
    if (!city?.trim() || !postcode?.trim() || !street?.trim() || !house?.trim()) return;
    settledDeliveryData.value = { ...value };
  }, 1500);
}, { deep: true });

const deliveryQuery = computed(() => ({ ...settledDeliveryData.value, country: country.value }));
const { data: deliveryInfo, pending: deliveryInfoPending, error: deliveryFetchError, refresh: refreshDeliveryInfo } = await useApi<AvailableDeliveriesInfo>(
  '/order/delivery/',
  deliveryQuery,
  { watch: [deliveryType, country, settledDeliveryData] },
);
const selectedDeliveryItem = computed(() => deliveryInfo.value?.find(item => item.id === deliveryType.value));
const deliveryErrorKind = computed<DeliveryError | null>(() => {
  if (deliveryFetchError.value) return DeliveryError.Network;
  const error = selectedDeliveryItem.value?.error;
  if (!error) return null;
  return error === DeliveryError.AddressUnavailable ? DeliveryError.AddressUnavailable : DeliveryError.Network;
});
const fulfillmentDeliveryError = computed(() => deliveryErrorKind.value !== null);
const deliveryPriceRub = computed(() => selectedDeliveryItem.value?.price ?? 0);
const deliveryPricePending = computed(() => selectedDeliveryItem.value?.price == null);
const anyDeliveryFreeFromCoupon = computed(() =>
  deliveryInfo.value?.some(item => item.freeDelivery) ?? false
);
const deliveryCouponIneffective = computed(() =>
  anyDeliveryFreeFromCoupon.value
  && !selectedDeliveryItem.value?.freeDelivery
  && !deliveryPricePending.value
  && deliveryPriceRub.value > 0
);

const itemsBreakdown = ref({
  itemsSumRub: orderInfo.value!.basketData.itemsSumRub,
  kuponDiscountRub: orderInfo.value!.basketData.kuponDiscountRub,
  bulkDiscountRub: orderInfo.value!.basketData.bulkDiscountRub,
  partnerDiscountRub: orderInfo.value!.basketData.partnerDiscountRub,
});

const onCouponApplied = (
  basketData: { itemsSumRub: number; kuponDiscountRub: number; bulkDiscountRub: number; partnerDiscountRub: number },
  deliveryOptions?: AvailableDeliveriesInfo,
) => {
  itemsBreakdown.value = basketData;
  if (deliveryOptions) {
    deliveryInfo.value = deliveryOptions;
  }
};

const totalSum = computed(() =>
  itemsBreakdown.value.itemsSumRub
  - itemsBreakdown.value.kuponDiscountRub
  - itemsBreakdown.value.bulkDiscountRub
  - itemsBreakdown.value.partnerDiscountRub
  + deliveryPriceRub.value
);

const formatMoney = (value: number) => locale.value === 'ru' ? `${toTriads(value)} ₽` : `€${toTriads(value)}`;

const makeOrder = async () => {
  if (submitPending.value) return;
  if (fulfillmentDeliveryError.value) return;
  if (couponApplying.value) return;

  const firstInvalid = formRef.value?.querySelector(':invalid:not(fieldset)') as HTMLElement | null;
  if (firstInvalid) {
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstInvalid.focus();
    return;
  }

  fieldErrors.value = {};
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
    fieldErrors.value = parseErrors(orderRequestError.value.data);
    orderError.value = true;
    nextTick(() => {
      if (Object.keys(fieldErrors.value).length) {
        const firstErrorInput = document.querySelector('.input-errorMessage')?.closest('.input-wrapper')?.querySelector('input');
        if (firstErrorInput) {
          firstErrorInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstErrorInput.focus();
        }
      } else {
        document.querySelector('.order-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
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
          <div v-if="orderError && !Object.keys(fieldErrors).length" class="order-error">
            <p>
              <i18n-t keypath="error">
                <template #office>
                  <a :href="`https://wirenboard.com/${locale}/pages/contacts/`" target="_blank">{{ t('office') }}</a>
                </template>
              </i18n-t>
            </p>
          </div>

          <div class="order-summary">
            <div class="order-summaryRow">
              <span>{{ t('items') }}</span>
              <span>{{ formatMoney(itemsBreakdown.itemsSumRub) }}</span>
            </div>
            <div v-if="itemsBreakdown.kuponDiscountRub > 0" class="order-summaryRow order-summaryRow--discount">
              <span>{{ t('kuponDiscount') }}</span>
              <span>−{{ formatMoney(itemsBreakdown.kuponDiscountRub) }}</span>
            </div>
            <div v-if="itemsBreakdown.bulkDiscountRub > 0" class="order-summaryRow order-summaryRow--discount">
              <span>{{ t('bulkDiscount') }}</span>
              <span>−{{ formatMoney(itemsBreakdown.bulkDiscountRub) }}</span>
            </div>
            <div v-if="itemsBreakdown.partnerDiscountRub > 0" class="order-summaryRow order-summaryRow--discount">
              <span>{{ t('partnerDiscount') }}</span>
              <span>−{{ formatMoney(itemsBreakdown.partnerDiscountRub) }}</span>
            </div>
            <div v-if="selectedDeliveryItem?.type !== DeliveryType.Pickup" class="order-summaryRow">
              <span>{{ t('delivery') }}</span>
              <span v-if="deliveryInfoPending" class="order-summarySkeleton" />
              <span v-else>{{ deliveryPricePending ? '?' : (deliveryPriceRub > 0 ? formatMoney(deliveryPriceRub) : t('priceFree')) }}</span>
            </div>
            <div class="order-summaryRow order-summaryRow--total">
              <span>{{ t('total') }}</span>
              <span v-if="deliveryInfoPending" class="order-summarySkeleton order-summarySkeleton--total" />
              <span v-else>{{ formatMoney(totalSum) }}</span>
            </div>
          </div>

          <OrderCoupon
            ref="couponRef"
            :payerType="payerType"
            :initialCode="orderInfo!.promocode"
            :initialNotices="orderInfo!.promocodeNotices"
            :fieldErrors="fieldErrors"
            :deliveryCouponIneffective="deliveryCouponIneffective"
            :deliveryQuery="deliveryQuery"
            @applied="onCouponApplied"
          />

          <div class="order-finalize">
            <Button
              type="submit"
              size="large"
              class="order-finalizeBtn"
              :disabled="deliveryInfoPending || submitPending || fulfillmentDeliveryError || couponApplying"
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
  border: 2px solid #f7f7f7 !important;
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
  background: var(--gray-color);
  margin-top: 14px;
  border: 1px solid var(--border-color) !important;
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

.order-summary {
  margin-bottom: 32px;
}

.order-summaryRow {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 4px 0;
  font-size: 18px;
}

.order-summaryRow > span:last-child {
  white-space: nowrap;
}

.order-summaryRow--total {
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
  font-weight: 500;
  font-size: 23px;
}

.order-summaryRow--total span:last-child {
  color: var(--primary-color);
}

.order-summarySkeleton {
  display: inline-block;
  width: 90px;
  height: 1em;
  border-radius: 4px;
  background: linear-gradient(90deg, #eee 25%, #e0e0e0 37%, #eee 63%);
  background-size: 400% 100%;
  animation: order-skeletonShimmer 1.4s ease infinite;
}

.order-summarySkeleton--total {
  width: 110px;
}

@keyframes order-skeletonShimmer {
  0% { background-position: 100% 0; }
  100% { background-position: 0 0; }
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
    "items": "Сумма товаров",
    "kuponDiscount": "Скидка по купону",
    "bulkDiscount": "Скидка оптовая",
    "partnerDiscount": "Скидка партнёрская",
    "delivery": "Доставка",
    "priceFree": "Бесплатно",
    "total": "ИТОГО",
    "error": "При создании заказа возникла ошибка. Попробуйте позднее или свяжитесь с {office}.",
    "office": "офисом"
  },
  "en": {
    "title": "Order",
    "emptyCart": "Your cart is empty",
    "checkout": "Checkout",
    "items": "Items total",
    "kuponDiscount": "Coupon discount",
    "bulkDiscount": "Bulk discount",
    "partnerDiscount": "Partner discount",
    "delivery": "Delivery",
    "priceFree": "Free",
    "total": "TOTAL",
    "error": "An error occurred while creating the order. Please try again later or contact our {office}.",
    "office": "office"
  }
}
</i18n>
