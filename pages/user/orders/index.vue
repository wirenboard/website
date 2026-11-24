<script lang="ts" setup>
import Alert from '~/components/Alert.vue';
import type { UserOrder, UserOrdersResponse } from '~/common/types';
import { isSameQuery } from '~/composables/useOrderPrefill';

definePageMeta({ middleware: ['auth'] });

const { t, locale } = useI18n();

useHead({ title: t('title') });

const { filters, dateRange, page, pageSize, sortAttr, sortDesc, toggleSort, queryParams } = useOrdersFilters();

// При SSR всё, что нужно странице, PHP уже передал в заголовке X-WB-Orders (useOrdersPrefill):
// иначе этот запрос шёл бы из Nuxt обратно в тот же PHP, который в это время ждёт ответа Nuxt.
const ordersPrefill = useOrdersPrefill();
const { data, pending } = await useApi<UserOrdersResponse>(
  '/user/orders/',
  queryParams,
  {
    watch: [queryParams],
    prefill: () => (ordersPrefill && isSameQuery(ordersPrefill.query, queryParams.value) ? ordersPrefill.data : undefined),
  },
);

const { repeatingId, cancelingId, repeatOrder: postRepeat, cancelOrder: postCancel } = useOrderRowActions();
const actionMessage = ref<{ type: 'success' | 'warning' | 'error'; text: string; orderId?: number } | null>(null);

const repeatOrder = async (id: number) => {
  const res = await postRepeat(id);
  if (!res) {
    actionMessage.value = { type: 'error', text: t('genericError') };
    return;
  }
  actionMessage.value = res.unavailableProducts.length
    ? { type: 'warning', text: t('repeatPartial', { products: res.unavailableProducts.join(', ') }) }
    : { type: 'success', text: t('repeatSuccess') };
};

const cancelDialogOrder = ref<UserOrder | null>(null);
const cancelOrder = (order: UserOrder) => {
  cancelDialogOrder.value = order;
};

const confirmCancelOrder = async () => {
  const order = cancelDialogOrder.value;
  cancelDialogOrder.value = null;
  if (!order) return;
  const res = await postCancel(order);
  if (!res) {
    actionMessage.value = { type: 'error', text: t('genericError') };
    return;
  }
  actionMessage.value = res.success
    ? { type: 'success', text: '', orderId: order.id }
    : { type: 'error', text: t('cancelError') };
};

const orderInfoUrl = (id: number) => `/${locale.value}/order/info/${id}/`;
</script>

<template>
  <div class="orders">
    <Alert v-if="actionMessage" :variant="actionMessage.type" class="orders-message">
      <i18n-t v-if="actionMessage.orderId" keypath="cancelSuccess">
        <template #order>
          <a :href="orderInfoUrl(actionMessage.orderId)" target="_blank">№{{ actionMessage.orderId }}</a>
        </template>
      </i18n-t>
      <template v-else>{{ actionMessage.text }}</template>
      <button type="button" class="orders-message-close" @click="actionMessage = null">&times;</button>
    </Alert>

    <OrdersList
      v-model:dateRange="dateRange"
      :data="data"
      :pending="pending"
      :filters="filters"
      :sortAttr="sortAttr"
      :sortDesc="sortDesc"
      :repeatingId="repeatingId"
      :cancelingId="cancelingId"
      @toggle-sort="toggleSort"
      @repeat="repeatOrder"
      @cancel="cancelOrder"
    />

    <OrdersPager
      v-if="data && data.orders.length"
      v-model:page="page"
      v-model:pageSize="pageSize"
      :pageCount="data.pagination.pageCount"
    />

    <Alert variant="info" class="orders-hint">
      <i18n-t keypath="hint">
        <template #settings>
          <a :href="`/${locale}/user/settings/`">{{ t('hintSettingsLink') }}</a>
        </template>
      </i18n-t>
    </Alert>

    <ConfirmDialog
      :visible="!!cancelDialogOrder"
      :message="t('cancelConfirm')"
      @confirm="confirmCancelOrder"
      @cancel="cancelDialogOrder = null"
    />
  </div>
</template>

<style>
.orders-hint {
  margin-top: 24px;
}

.orders-hint a {
  text-decoration: underline;
}

.orders-message {
  position: relative;
  margin-bottom: 20px;
}

.orders-message-close {
  position: absolute;
  right: 12px;
  top: 8px;
  border: 0;
  background: none;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
}
</style>

<i18n>
{
  "ru": {
    "title": "Мои заказы",
    "hint": "Здесь отображаются заказы, сделанные с вашего email и с дополнительных email, указанных в {settings}",
    "hintSettingsLink": "настройках",
    "cancelConfirm": "Вы уверены, что хотите отменить этот заказ?",
    "cancelSuccess": "Заказ {order} был отменён",
    "cancelError": "Невозможно отменить этот заказ",
    "repeatSuccess": "Товары заказа были успешно добавлены в корзину",
    "repeatPartial": "Часть товаров заказа не удалось добавить в корзину, так как они не доступны к продаже: {products}",
    "genericError": "Произошла ошибка"
  },
  "en": {
    "title": "My Orders",
    "hint": "Here is the list of orders made using your email and also additional emails from the {settings}",
    "hintSettingsLink": "account settings",
    "cancelConfirm": "Are you sure you want to cancel this order?",
    "cancelSuccess": "Order {order} has been cancelled",
    "cancelError": "Unable to cancel this order",
    "repeatSuccess": "Order items have been added to the cart",
    "repeatPartial": "Some order items could not be added to the cart as they are no longer available: {products}",
    "genericError": "An error occurred"
  }
}
</i18n>
