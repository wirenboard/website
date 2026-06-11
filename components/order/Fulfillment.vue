<script setup lang="ts">
import Button from '~/components/Button.vue';
import Select from '~/components/Select.vue';
import Textarea from '~/components/Textarea.vue';
import {DeliveryType, type AvailableDelivery, type AvailableDeliveriesInfo, type Destination, type Tariff } from '~/common/types';

const { t } = useI18n();
const totalSum = defineModel<number>('totalSum', { default: 0 });
const pendingModel = defineModel<boolean>('pending', { default: false });
const deliveryValidModel = defineModel<boolean>('deliveryValid', { default: false });
const deliveryData = defineModel<Record<string, any>>('deliveryData', { default: () => ({}) });
const selectedDeliveryType = defineModel<string>('deliveryType');
const country = defineModel<number>('country');

const { countries, basketData } = defineProps<{
  countries: Record<number, string>;
  basketData: Record<string, number>;
}>();

const deliveryQuery = ref<Record<string, any>>({});
const deliveryAddress = ref<Record<string, any>>({ country: country.value, city: deliveryData.value.city, postcode: deliveryData.value.postcode, street: deliveryData.value.street, house: deliveryData.value.house });
const deliveryAddressDetails = ref<Record<string, string>>({ room: deliveryData.value.room});
const deliveryPVZ = ref<Record<string, any>>({});
watchEffect(() => { deliveryQuery.value = { ...deliveryAddress.value, ...deliveryPVZ.value }; });
watchEffect(() => { deliveryData.value = { ...deliveryAddress.value, ...deliveryAddressDetails.value, ...deliveryPVZ.value }; });
const { data: delivery, pending, refresh } = await useApi<AvailableDeliveriesInfo>(`/order/delivery/`, deliveryQuery);

const isRussia = computed(() => country.value === 643);
const hasSavedAddress = ['city', 'street', 'house', 'postcode'].some(k => deliveryData.value[k]);
const addressMode = ref<'search' | 'fields'>(isRussia.value && !hasSavedAddress ? 'search' : 'fields');

const resetAddress = () => {
  deliveryAddressDetails.value = {};
  deliveryAddress.value = { country: country.value };
  addressMode.value = isRussia.value ? 'search' : 'fields';
};

watch(country, () => {
  resetAddress();
  refresh();
});

const selectedDelivery = computed<AvailableDelivery | null>(() =>
  delivery.value?.available.find((item: AvailableDelivery) => item.id === selectedDeliveryType.value) ?? null
);

const selectItems = computed(() => {
  return (delivery.value?.available ?? []).map((item: AvailableDelivery) => ({
    id: item.id,
    title: item.title,
    img: `/img/delivery/${item.id}.png`,
    comment: (() => {
      if (item.daysMin == null || item.daysMax == null) return undefined;
      let price = '';
      if (item.type !== DeliveryType.Pickup && item.price != null) {
        price = item.price === 0 ? ` • ${t('freeDelivery')}` : ` • ${t('price', { n: item.price })}`;
      }
      if (item.daysMin !== item.daysMax) return `${item.daysMin}–${item.daysMax} ${t('days', item.daysMax)}${price}`;
      return `${item.daysMin} ${t('days', item.daysMin)}${price}`;
    })()
  }));
});

watch(selectedDelivery, (value) => {
  totalSum.value = value?.total ?? 0;
  if (value?.type == DeliveryType.Pickup) {
    deliveryValidModel.value = true;
    return;
  }
  deliveryValidModel.value = (value?.price ?? 0) > 0 || (delivery.value?.freeDelivery ?? false);
}, { immediate: true });

watch(pending, (value) => {
  pendingModel.value = value;
});

const applyAddress = ({ city, postcode, street, house, room }: { city: string; postcode: string; street: string; house: string; room: string }) => {
  deliveryAddress.value = { ...deliveryAddress.value, city, postcode, street, house };
  if (room) deliveryAddressDetails.value = { ...deliveryAddressDetails.value, room };
  addressMode.value = 'fields';
};

let debounceTimer: ReturnType<typeof setTimeout> | null = null;
watch(deliveryAddress, () => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const { city, postcode, street, house } = deliveryAddress.value;
    if (!city?.trim() || !postcode?.trim() || !street?.trim() || !house?.trim()) return;
    refresh();
  }, 1500);
}, { deep: true });


const cdekWidget = ref<null | { open: () => void; close: () => void }>(null);
const cdekPvzData = ref<null | { tariff: Tariff; destination: Destination }>(null);
watch(cdekPvzData, (value) => {
  deliveryPVZ.value = {
    cdek_pvz_tariff: value?.tariff.tariff_code,
    cdek_pvz_country_code: value?.destination.country_code,
    cdek_pvz_city_code: value?.destination.city_code,
    cdek_pvz_city: value?.destination.city,
    cdek_pvz_id: value?.destination.code,
    cdek_pvz_address: value?.destination.address,    
    cdek_pvz_postal_code: value?.destination.postal_code
  };
  refresh();
},  { deep: true });


onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://wirenboard.com/npm/@cdek-it/widget@3';
  script.onload = () => {
    // TODO move
    const YA_MAP_KEY = '425e7dde-9a86-40d9-ade2-77369f107eaa';

    // @ts-ignore
    cdekWidget.value = new window.CDEKWidget({
      apiKey: YA_MAP_KEY,
      defaultLocation: 'Москва',
      popup: true,
      canChoose: true,
      hideDeliveryOptions: {
        door: true,
      },
      tariffs: {
        office: [136],
        pickup: [],
      },
      hideFilters: {
        is_dressing_room: true,
        have_cashless: true,
        have_cash: true,
        type: true,
      },
      forceFilters: {
        type: 'PVZ',
      },
      from: {
        country_code: 'RU',
        city: 'Долгопрудный',
        address: 'Лихачёвский проезд, 6с1',
      },
      goods: [{ width: 1, height: 1, length: 1, weight: (basketData.weight * 1000), cost: basketData.price }],
      onChoose: (type: string, tariff: Tariff, destination: Destination) => {
        cdekPvzData.value = { tariff, destination };
        cdekWidget.value!.close();
      },
      onCalculate: ({ office }: { office: Tariff[] }) => {
        if (delivery.value?.freeDelivery) {
          office.map((item: Tariff) => {
            item.delivery_sum = 0;
          });
        }
      }
    });
  };
  document.body.appendChild(script);
});
</script>

<template>
  <div class="fulfillment">
    <h2>{{ t('title') }}</h2>

    <Select
      v-model="country"
      class="fulfillment-country"
      optionLabel="label"
      optionValue="id"
      :options="Object.entries(countries).map(([id, label]) => ({ id: Number(id), label }))"
      :placeholder="t('country')"
      is-searchable
      :show-clear="false"
    />

    <OrderSelect
      v-model="selectedDeliveryType"
      :items="selectItems"
    />

    <p v-if="selectedDelivery?.error" class="fulfillment-error">{{ t('deliveryError') }}</p>
    <div class="fulfillment-details">      
      <div
        v-if="selectedDelivery?.type === DeliveryType.Pickup"
        class="fulfillment-chooseWrapper"
      >
        <p class="fulfillment-chooseTitle">Выбранный способ доставки – Самовывоз</p>
        <p><a href="https://yandex.ru/maps/-/CPB46Z4H" target="_blank">{{ selectedDelivery?.address }}</a></p>
        <p>Пн–Пт 10:00–18:00</p>
      </div>
      <div
        v-else-if="selectedDelivery?.type === DeliveryType.Point"
        class="fulfillment-chooseWrapper"
      >
        <div v-if="!cdekPvzData || selectedDelivery?.error" class="fulfillment-cdekChooseWrapper">
          <p class="fulfillment-chooseTitle">Выберите пункт выдачи заказа</p>
          <Button :label="t('cdekChoose')" outlined @click="cdekWidget!.open()"/>
        </div>
        <template v-else-if="cdekPvzData && !selectedDelivery?.error">
          <p class="fulfillment-chooseTitle">Выбранный пункт заказа СДЭК – {{cdekPvzData?.destination.code}}</p>
          <p>{{ cdekPvzData?.destination.city }}, {{ cdekPvzData?.destination.address }}</p>
          <p>{{ cdekPvzData?.destination.work_time }}</p>
          <p class="fulfillment-cdekSumWrapper">
            <Button :label="t('cdekChange')" outlined @click="cdekWidget!.open()"/>
          </p>
        </template>
      </div>
      <template v-else>
        <template v-if="isRussia && addressMode === 'search'">
          <OrderAddressAutocomplete @select="applyAddress" />
          <button type="button" class="fulfillment-manualBtn" @click="addressMode = 'fields'">
            {{ t('manualEntry') }}
          </button>
        </template>
        <template v-else>
          <button v-if="isRussia" type="button" class="fulfillment-changeAddressBtn" @click="resetAddress">
            ← {{ t('changeAddress') }}
          </button>
          <div class="fulfillment-cityRow">
            <Input id="city" v-model="deliveryAddress.city" label="Город" required />
            <Input id="postcode" v-model="deliveryAddress.postcode" label="Почтовый индекс" required />
          </div>
          <div class="fulfillment-streetRow">
            <Input id="street" v-model="deliveryAddress.street" label="Улица, переулок, проспект" required />
            <Input id="house" v-model="deliveryAddress.house" label="Дом" required />
            <Input id="room" v-model="deliveryAddressDetails.room" label="Квартира/офис" />
          </div>
          <Textarea id="fulfillmentComment" v-model="deliveryAddressDetails.comment" label="Комментарий" />
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
.fulfillment-country { 
  margin-bottom: 18px;
  display: flex;
}

.fulfillment-details {
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.fulfillment-chooseWrapper {
  padding: 12px 44px;
  border: 1px solid var(--border-color);
}

.fulfillment-chooseTitle {
  font-weight: 700;
}

.fulfillment-error {
  background-color: #FF474C;
  color: #fff;
  padding: 12px 16px;
  border-radius: 2px;
  opacity: 0.7;
}

.fulfillment-chooseWrapper p {
  margin: 12px;
}

.fulfillment-cdekChooseWrapper {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
}

.fulfillment-cdekSumWrapper {
  display: flex;
  justify-content: space-between;
}

.fulfillment-addressGuard {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
}

.fulfillment-manualBtn {
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: 16px;
  color: #aaa;
  cursor: pointer;
  text-align: left;
}

.fulfillment-manualBtn:hover {
  color: #666;
}

.fulfillment-changeAddressBtn {
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: 16px;
  color: var(--link-color);
  cursor: pointer;
  width: fit-content;
}

.fulfillment-changeAddressBtn:hover {
  opacity: 0.75;
}

.fulfillment-cityRow {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 18px;
  width: fit-content;
  min-width: 50%;
}

.fulfillment-streetRow {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 18px;
}

</style>

<i18n>
{
  "ru": {
    "title": "Выберите способ получения заказа",
    "country": "Страна",
    "cdekChoose": "Выбрать пункт выдачи",
    "cdekChange": "Изменить пункт выдачи",
    "manualEntry": "Ввести вручную",
    "changeAddress": "Изменить адрес",
    "days": "день | дня | дней",
    "freeDelivery": "Бесплатная доставка",
    "price": "{n} ₽",
    "deliveryError": "Доставка по данному адресу невозможна, проверьте страну и адрес или выберите другой тип доставки"
  },
  "en": {
    "title": "Select a delivery method",
    "country": "Country",
    "cdekChoose": "Select a pickup location",
    "cdekChange": "Change pickup location",
    "manualEntry": "Enter address manually",
    "changeAddress": "Change address",
    "days": "day | days | days",
    "freeDelivery": "Free delivery",
    "price": "€{n}",
    "deliveryError": "Delivery to this address is not available, please check the country and address or select a different delivery type"
  }
}
</i18n>
