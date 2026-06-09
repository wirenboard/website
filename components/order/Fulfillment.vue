<script setup lang="ts">
import Button from '~/components/Button.vue';
import Select from '~/components/Select.vue';
import Textarea from '~/components/Textarea.vue';
import {DefaultDeliveryId, DeliveryType, type Delivery, type DeliveryInfo, type Destination, type Tariff } from '~/common/types';

const { t } = useI18n();
const totalSum = defineModel<number>('totalSum', { default: 0 });
const pendingModel = defineModel<boolean>('pending', { default: false });
const deliveryData = defineModel<Record<string, any>>('deliveryData', { default: () => ({}) });
const selectedDeliveryId = defineModel<string>('deliveryType');

const country = defineModel<number>('country');

const { countries, basketData } = defineProps<{
  countries: Record<number, string>;
  basketData: Record<string, number>;
}>();

const deliveryQuery = ref<Record<string, any>>({ country: country.value });
const deliveryDetails = ref<Record<string, string>>({});
watchEffect(() => { deliveryData.value = { ...deliveryQuery.value, ...deliveryDetails.value }; });
const { data: delivery, pending, refresh } = await useApi<DeliveryInfo>(`/order/delivery/`, deliveryQuery);


watch(country, (value) => {
  deliveryQuery.value = { country: value };
  selectedDeliveryId.value = DefaultDeliveryId;
  refresh();
});

const selectItems = computed(() => {
  return (delivery.value?.available ?? []).map((item: Delivery) => ({
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

const selectedDelivery = computed(() =>
  delivery.value?.available.find((item: Delivery) => item.id === selectedDeliveryId.value)
);
watchEffect(() => {totalSum.value = selectedDelivery.value!.total;});
watch(pending, (value) => {
  pendingModel.value = value;
});

let debounceTimer: ReturnType<typeof setTimeout> | null = null;
watch(deliveryQuery, () => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const { city, postcode, address } = deliveryQuery.value;
    if (!city?.trim() || !postcode?.trim() || !address?.trim()) return;
    refresh();
  }, 1500);
}, { deep: true });


const cdekWidget = ref<null | { open: () => void; close: () => void }>(null);
const cdekPvzData = ref<null | { tariff: Tariff; destination: Destination }>(null);
watch(cdekPvzData, (value) => {
  deliveryQuery.value = { ...deliveryQuery.value,
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
      v-model="selectedDeliveryId"
      :items="selectItems"
    />

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
        <div v-if="!cdekPvzData" class="fulfillment-cdekChooseWrapper">
          <p class="fulfillment-chooseTitle">Выберите пункт выдачи заказа</p>
          <Button :label="t('cdekChoose')" outlined @click="cdekWidget!.open()"/>
        </div>
        <template v-else>
          <p class="fulfillment-chooseTitle">Выбранный пункт заказа СДЭК – {{cdekPvzData?.destination.code}}</p>
          <p>{{ cdekPvzData?.destination.city }}, {{ cdekPvzData?.destination.address }}</p>
          <p>{{ cdekPvzData?.destination.work_time }}</p>
          <p class="fulfillment-cdekSumWrapper">
            <Button :label="t('cdekChange')" outlined @click="cdekWidget!.open()"/>
          </p>
        </template>
      </div>
      <template v-else>
        <div class="fulfillment-placeWrapper">
          <Input id="city" v-model="deliveryQuery.city" label="Город" required />
          <Input id="postcode" v-model="deliveryQuery.postcode" label="Почтовый индекс" required />
          <Input id="address" v-model="deliveryQuery.address" label="Адрес" required />
        </div>
        <div class="fulfillment-detailsWrapper">
          <Input id="room" v-model="deliveryDetails.room" label="Квартира/офис" />
          <Input id="entrance" v-model="deliveryDetails.entrance" label="Подъезд" />
          <Input id="floor" v-model="deliveryDetails.floor" label="Этаж" />

        </div>
        <Textarea id="fukfillmentComment" label="Комментарий" />
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

.fulfillment-placeWrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 3fr;
  gap: 18px;
}

.fulfillment-detailsWrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
    "days": "день | дня | дней",
    "freeDelivery": "Бесплатная доставка",
    "price": "{n} ₽"
  },
  "en": {
    "title": "Select a delivery method",
    "country": "Country",
    "cdekChoose": "Select a pickup location",
    "cdekChange": "Change pickup location",
    "days": "day | days | days",
    "freeDelivery": "Free delivery",
    "price": "€{n}"
  }
}
</i18n>
