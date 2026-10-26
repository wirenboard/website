import type { Ref } from 'vue';
import { DeliveryError, type OrderInfo, type AvailableDeliveriesInfo } from '~/common/types';

const DELIVERY_DATA_KEYS = [
  'city', 'postcode', 'street', 'house', 'room',
  'cdek_pvz_id', 'cdek_pvz_address', 'cdek_pvz_country_code',
  'cdek_pvz_city_code', 'cdek_pvz_city', 'cdek_pvz_tariff', 'cdek_pvz_postal_code',
];

const normalizeDeliveryData = (value: Record<string, any>) =>
  DELIVERY_DATA_KEYS.map((key) => `${key}=${value[key] ?? ''}`).join('|');

export const useOrderDelivery = async (orderInfo: Ref<OrderInfo | null>, country: Ref<number>) => {
  const deliveryData = ref(orderInfo.value!.deliveryData);
  const deliveryType = ref(orderInfo.value!.deliveryType);

  const settledDeliveryData = ref<Record<string, any>>({ ...deliveryData.value });
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
  const { data: deliveryInfo, pending: deliveryInfoPending, error: deliveryFetchError } = await useApi<AvailableDeliveriesInfo>(
    '/order/delivery/',
    deliveryQuery,
    { watch: [deliveryType, country, settledDeliveryData] },
  );

  const selectedDeliveryItem = computed(() => deliveryInfo.value?.find((item) => item.id === deliveryType.value));
  const deliveryErrorKind = computed<DeliveryError | null>(() => {
    if (deliveryFetchError.value) return DeliveryError.Network;
    const error = selectedDeliveryItem.value?.error;
    if (!error) return null;
    return error === DeliveryError.AddressUnavailable ? DeliveryError.AddressUnavailable : DeliveryError.Network;
  });
  const fulfillmentDeliveryError = computed(() => deliveryErrorKind.value !== null);
  const deliveryPriceRub = computed(() => selectedDeliveryItem.value?.price ?? 0);
  const deliveryPricePending = computed(() => selectedDeliveryItem.value?.price == null);
  const anyDeliveryFreeFromPromocode = computed(() =>
    deliveryInfo.value?.some((item) => item.freeDelivery) ?? false,
  );
  const deliveryPromocodeIneffective = computed(() =>
    anyDeliveryFreeFromPromocode.value
    && !selectedDeliveryItem.value?.freeDelivery
    && !deliveryPricePending.value
    && deliveryPriceRub.value > 0,
  );

  return {
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
  };
};
