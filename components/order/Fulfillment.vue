<script setup lang="ts">
import Button from '~/components/Button.vue';
import Select from '~/components/Select.vue';
import Textarea from '~/components/Textarea.vue';
import { Delivery, type DeliveryType, type Destination, type OrderInfo, type Tariff } from '~/common/types';

const RUSSIA_CODE = '643';
const DEFAULT_CITY = 'Москва';

const { t } = useI18n();
const deliveryType = defineModel<string>('deliveryType');
const deliveryData = defineModel<any>('deliveryData');
const country = ref(RUSSIA_CODE);
const cdekWidget = ref<null | { open: () => void; close: () => void }>(null);
const cdekPvzData = ref<null | { tariff: Tariff; destination: Destination }>(null);
const { data: orderInfo } = await useApi<OrderInfo>(`/order/info/`);
const selectItems = computed(() => {
  return orderInfo.value!.delivery.map((item: DeliveryType) => ({
    id: item.id,
    title: item.title,
    img: `/img/delivery/${item.id}.png`,
    comment: item.daysMin !== item.daysMax ? `${item.daysMin}–${item.daysMax} дня` : `${item.daysMin} дней`
  }));
});

// TODO
// const isFreeDelivery = true;
const isFreeDelivery = false;

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://wirenboard.com/npm/@cdek-it/widget@3';
  script.onload = () => {
    // TODO move
    const YA_MAP_KEY = '425e7dde-9a86-40d9-ade2-77369f107eaa';
    const basketWeight = 12;

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
      goods: [{ width: 1, height: 1, length: 1, weight: (+basketWeight * 1000) }],
      onChoose: (type: string, tariff: Tariff, destination: Destination) => {
      //   var days = tariff.period_min === tariff.period_max
      //     ? tariff.period_min + ' ' + declOfNum(tariff.period_min)
      //     : tariff.period_min + '-' + tariff.period_max + ' ' + declOfNum(tariff.period_max);
      //
      //   // update order address form
      //   var countryId = window.CountryCodes[destination.country_code];
      //   $('.bootstrap-select select').selectpicker('val', countryId);
      //   document.querySelector('#orderform-address_full').value = address;
      //   document.querySelector('#orderform-city').value = destination.city;
      //   document.querySelector('#orderform-address').value = destination.address;
      //   document.querySelector('#orderform-postcode').value = destination.postal_code;
      //
      //   // for widget persistence
      //   document.querySelector('#cdekPVZAddress').value = address;
      //   document.querySelector('#cdekPVZCost').value = tariff.delivery_sum;
      //   document.querySelector('#cdekPVZDays').value = days;
      //
      //   // for internal data processing
      //   document.querySelector('#cdekPVZCode').value = destination.code;
      //   document.querySelector('#cdekPVZTariff').value = tariff.tariff_code;
      //   document.querySelector('#cdekPVZCityCode').value = destination.city_code;
      //   document.querySelector('#cdekPVZCountryCode').value = destination.country_code;

        cdekPvzData.value = {
          tariff,
          destination
        };
        deliveryData.value = { ...cdekPvzData.value, type: deliveryType.value };

        cdekWidget.value!.close();
      },
      onCalculate: ({ office }: { office: Tariff[] }) => {
        // // hide price for free delivery
        if (isFreeDelivery) {
          office.map((item: Tariff) => {
            item.delivery_sum = 0;
          });
        }
      }
    });
  };
  document.body.appendChild(script);
});

watch(() => deliveryType.value, (value) => {
  if (value === 'msk') {
    country.value = RUSSIA_CODE;
  }
});
</script>

<template>
  <div class="fulfillment">
    <h2>{{ t('title') }}</h2>

    <OrderSelect
      v-model="deliveryType"
      :items="selectItems"
    />

    <div class="fulfillment-details">
      <div
        v-if="orderInfo!.delivery.find((item: DeliveryType) => item.id === deliveryType)?.type === Delivery.Pickup"
        class="fulfillment-chooseWrapper"
      >
        <p class="fulfillment-chooseTitle">Выбранный способ доставки – Самовывоз</p>
        <p><a href="https://yandex.ru/maps/-/CPB46Z4H" target="_blank">г. Долгопрудный, Лихачёвский проезд, дом 6, строение 1</a></p>
        <p>Пн–Пт 10:00–18:00</p>
      </div>
      <div
        v-else-if="orderInfo!.delivery.find((item: DeliveryType) => item.id === deliveryType)?.type === Delivery.Point"
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
            <span>{{ cdekPvzData?.tariff.delivery_sum }}</span>
            <Button :label="t('cdekChange')" outlined @click="cdekWidget!.open()"/>
          </p>
        </template>
      </div>
      <template v-else>
        <Select
          v-model="country"
          optionLabel="label"
          optionValue="id"
          :disabled="orderInfo!.delivery.find((item: DeliveryType) => item.id === deliveryType)?.type === Delivery.Taxi"
          :options="Object.entries(orderInfo!.countries).map(([id, label]) => ({ id, label }))"
          :placeholder="t('Страна')"
          is-searchable
        />

        <div class="fulfillment-placeWrapper">
          <Input id="city" label="Город" required />
          <Input id="address" label="Адрес" required />
        </div>
        <div class="fulfillment-detailsWrapper">
          <Input id="room" label="Квартира/офис" />
          <Input id="entrance" label="Подъезд" />
          <Input id="floor" label="Этаж" />
        </div>
        <Textarea id="fukfillmentComment" label="Комментарий" />
      </template>
    </div>
  </div>
</template>

<style scoped>
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
  grid-template-columns: 1fr 3fr;
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
    "cdekChoose": "Выбрать пункт выдачи",
    "cdekChange": "Изменить пункт выдачи"
  },
  "en": {
    "title": "Select a delivery method",
    "cdekChoose": "Select a pickup location",
    "cdekChange": "Change pickup location"
  }
}
</i18n>
