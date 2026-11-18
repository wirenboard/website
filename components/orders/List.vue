<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import Select from '~/components/Select.vue';
import { toTriads } from '~/utils/toTriads';
import type { UserOrder, UserOrdersResponse } from '~/common/types';
import type { OrdersFiltersState } from '~/composables/useOrdersFilters';
import type { TableColumn } from '~/components/Table.vue';

const props = withDefaults(defineProps<{
  data: UserOrdersResponse | null | undefined;
  pending: boolean;
  filters: OrdersFiltersState;
  sortAttr: string;
  sortDesc: boolean;
  repeatingId: number | null;
  cancelingId: number | null;
  bordered?: boolean;
}>(), {
  bordered: false,
});

const emit = defineEmits<{
  toggleSort: [attr: string];
  repeat: [id: number];
  cancel: [order: UserOrder];
}>();

const dateRange = defineModel<(Date | null)[] | null>('dateRange');

const { t, locale } = useI18n();

const { statusList, payStatusList, statusOptions, payStatusOptions, statusVariant, payStatusVariant } = useOrderStatusLabels();

const sawOrgColumn = ref(false);
watchEffect(() => {
  if (props.data?.orders.some((order) => order.orgName)) {
    sawOrgColumn.value = true;
  }
});

const columns = computed<TableColumn[]>(() => [
  { sortAttr: 'id', label: t('fieldId') },
  { sortAttr: 'created', label: t('fieldDate'), class: 'orders-col-date' },
  { sortAttr: 'email', label: t('fieldEmail'), class: 'orders-col-email' },
  ...(sawOrgColumn.value ? [{ sortAttr: 'org_name', label: t('fieldOrgName') }] : []),
  { sortAttr: 'status', label: t('fieldStatus'), class: 'orders-col-status' },
  { sortAttr: 'pay_status', label: t('fieldPayStatus'), class: 'orders-col-paystatus' },
  { sortAttr: 'sum_search', label: t('fieldSum'), class: 'orders-col-sum' },
]);

const orderInfoUrl = (id: number) => `/${locale.value}/order/info/${id}/`;

// Calling t() directly inside a <template #slotName> that Table renders via <slot> throws
// "$setup.t is not a function" — the local-scope i18n macro's injected t isn't reachable from
// inside a slot closure passed into a child component. Resolving the strings here, outside any
// slot, and referencing the plain values in the template sidesteps it.
const filterLabels = computed(() => ({
  id: t('fieldId'),
  email: t('fieldEmail'),
  orgName: t('fieldOrgName'),
  status: t('fieldStatus'),
  payStatus: t('fieldPayStatus'),
  sum: t('fieldSum'),
}));
const emptyLabel = computed(() => t('empty'));

const formatSum = (order: UserOrder) => (
  order.language === 'ru'
    ? `${toTriads(Math.floor(order.sum))} ₽`
    : `$${(order.sum / order.rate).toFixed(2)}`
);

const formatDate = (timestamp: number) => new Date(timestamp * 1000).toLocaleDateString(locale.value === 'ru' ? 'ru-RU' : 'en-GB', {
  day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
});
</script>

<template>
  <Table
    :columns="columns"
    :sortAttr="sortAttr"
    :sortDesc="sortDesc"
    :bordered="bordered"
    :striped="false"
    :pending="pending"
    :empty="!data?.orders.length"
    @toggle-sort="emit('toggleSort', $event)"
  >
    <template #filters>
      <th><InputText v-model="filters.id" :placeholder="filterLabels.id" :aria-label="filterLabels.id" /></th>
      <th class="orders-col-date"><OrdersDateRangeFilter v-model="dateRange" /></th>
      <th class="orders-col-email"><InputText v-model="filters.email" :placeholder="filterLabels.email" :aria-label="filterLabels.email" /></th>
      <th v-if="sawOrgColumn"><InputText v-model="filters.orgName" :placeholder="filterLabels.orgName" :aria-label="filterLabels.orgName" /></th>
      <th class="orders-col-status">
        <Select
          v-model="filters.status"
          :options="statusOptions"
          optionLabel="label"
          optionValue="value"
          :placeholder="filterLabels.status"
          size="small"
          showClear
        />
      </th>
      <th class="orders-col-paystatus">
        <Select
          v-model="filters.payStatus"
          :options="payStatusOptions"
          optionLabel="label"
          optionValue="value"
          :placeholder="filterLabels.payStatus"
          size="small"
          showClear
        />
      </th>
      <th class="orders-col-sum"><InputText v-model="filters.sum" :placeholder="filterLabels.sum" :aria-label="filterLabels.sum" /></th>
      <th></th>
    </template>

    <template #rows>
      <tr v-for="order in data?.orders ?? []" :key="order.id">
        <td><a :href="orderInfoUrl(order.id)" target="_blank">{{ order.id }}</a></td>
        <td class="orders-col-date">{{ formatDate(order.created) }}</td>
        <td class="orders-col-email">{{ order.email }}</td>
        <td v-if="sawOrgColumn">{{ order.orgName ?? '-' }}</td>
        <td class="orders-col-status"><Badge :variant="statusVariant(order.status)">{{ statusList[order.status] }}</Badge></td>
        <td class="orders-col-paystatus"><Badge :variant="payStatusVariant(order.payStatus)">{{ payStatusList[order.payStatus] }}</Badge></td>
        <td class="orders-col-sum">{{ formatSum(order) }}</td>
        <td>
          <OrdersRowActions
            :order="order"
            :repeatingId="repeatingId"
            :cancelingId="cancelingId"
            @repeat="emit('repeat', $event)"
            @cancel="emit('cancel', $event)"
          />
        </td>
      </tr>
    </template>

    <template #empty>{{ emptyLabel }}</template>
  </Table>
</template>

<style>
.data-table th:first-child,
.data-table td:first-child {
  width: 70px;
}

.data-table th.orders-col-date,
.data-table td.orders-col-date {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.data-table th.orders-col-sum,
.data-table td.orders-col-sum {
  width: 110px;
  white-space: nowrap;
}

.data-table th:last-child,
.data-table td:last-child {
  width: 70px;
  white-space: nowrap;
}

.data-table th.orders-col-email,
.data-table td.orders-col-email {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.data-table th.orders-col-status,
.data-table td.orders-col-status {
  width: 200px;
}

.data-table th.orders-col-paystatus,
.data-table td.orders-col-paystatus {
  min-width: 140px;
}

.data-table-filterrow [data-pc-name="inputtext"],
.data-table-filterrow [data-pc-extend="inputtext"] {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 7px 10px;
  border: 1px solid var(--border-color);
  border-radius: 2px;
  font-family: 'Plumb', sans-serif;
  font-size: 13px;
  color: var(--text-color);
  background: #fff;
}

.data-table-filterrow [data-pc-name="inputtext"]:focus,
.data-table-filterrow [data-pc-extend="inputtext"]:focus {
  outline: 2px solid var(--link-color);
  outline-offset: 2px;
  border-color: var(--border-color-hover);
}

.data-table-filterrow [data-pc-name="select"] {
  width: 100%;
  height: 31px;
  font-size: 13px;
  box-shadow: none;
}

.data-table-filterrow [data-pc-section="label"] {
  font-size: 13px;
  line-height: normal;
  color: var(--text-color);
}

.data-table-filterrow [data-pc-section="dropdown"],
.data-table-filterrow [data-pc-section="clearicon"] {
  margin-right: 6px;
}
</style>

<i18n>
{
  "ru": {
    "fieldId": "№",
    "fieldDate": "Дата",
    "fieldEmail": "Email",
    "fieldOrgName": "Организация",
    "fieldStatus": "Статус заказа",
    "fieldPayStatus": "Статус оплаты",
    "fieldSum": "Сумма",
    "empty": "Заказов не найдено"
  },
  "en": {
    "fieldId": "#",
    "fieldDate": "Date",
    "fieldEmail": "Email",
    "fieldOrgName": "Organization",
    "fieldStatus": "Order status",
    "fieldPayStatus": "Payment status",
    "fieldSum": "Sum",
    "empty": "No orders found"
  }
}
</i18n>
