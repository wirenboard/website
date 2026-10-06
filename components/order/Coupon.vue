<script setup lang="ts">
import Button from '~/components/Button.vue';
import Alert from '~/components/Alert.vue';
import type { KuponNotice, AvailableDeliveriesInfo } from '~/common/types';

const { t } = useI18n();
const applying = ref(false);
defineExpose({ applying });

const props = defineProps<{
  payerType: string;
  initialCode?: string;
  initialNotices?: KuponNotice[];
  fieldErrors?: Record<string, string>;
  deliveryCouponIneffective?: boolean;
  deliveryQuery?: Record<string, any>;
}>();

type KuponBasketData = { itemsSumRub: number; kuponDiscountRub: number; bulkDiscountRub: number; partnerDiscountRub: number };

const emit = defineEmits<{
  applied: [basketData: KuponBasketData, deliveryOptions: AvailableDeliveriesInfo | undefined];
}>();

const code = ref(props.initialCode ?? '');
const active = ref(!!props.initialCode);
const notices = ref<KuponNotice[]>(props.initialNotices ?? []);
const hasBlockingNotice = computed(() => notices.value.some(n => n.type === 'sum_from'));

const payload = ref<{ code: string; payerType: string; deliveryQuery?: Record<string, any> }>({ code: '', payerType: props.payerType });
const { execute: checkCoupon, data: result } = await useApi<{ active: boolean; notices: KuponNotice[]; basketData: KuponBasketData; deliveryOptions?: AvailableDeliveriesInfo }>(
  '/basket/kupon/',
  null,
  { method: 'POST', body: payload, immediate: false },
);

const refreshSurroundingCart = () => {
  (window as any).renderBasket?.();
};

const apply = async () => {
  if (applying.value) {
    payerTypeChangedWhileApplying = true;
    return;
  }
  applying.value = true;
  payload.value = { code: code.value.trim(), payerType: props.payerType, deliveryQuery: props.deliveryQuery };
  try {
    await checkCoupon();
    active.value = !!result.value?.active;
    notices.value = result.value?.notices ?? [];
    if (result.value?.basketData) {
      emit('applied', result.value.basketData, result.value.deliveryOptions);
    }
    refreshSurroundingCart();
  } finally {
    applying.value = false;
    if (payerTypeChangedWhileApplying) {
      payerTypeChangedWhileApplying = false;
      if (code.value.trim()) apply();
    }
  }
};

const clear = async () => {
  if (applying.value) return;
  applying.value = true;
  payload.value = { code: '', payerType: props.payerType, deliveryQuery: props.deliveryQuery };
  try {
    await checkCoupon();
    code.value = '';
    active.value = false;
    notices.value = [];
    if (result.value?.basketData) {
      emit('applied', result.value.basketData, result.value.deliveryOptions);
    }
    refreshSurroundingCart();
  } finally {
    applying.value = false;
  }
};

let payerTypeChangedWhileApplying = false;
watch(() => props.payerType, () => {
  if (code.value.trim()) apply();
});
</script>

<template>
  <div class="order-coupon">
    <Input v-model="code" id="promocode" :label="t('label')" autocomplete="off" :disabled="active" :errorMessage="fieldErrors?.promocode" @keydown.enter.prevent="apply">
      <template #action>
        <Button
          v-if="active"
          type="button"
          :label="t('clear')"
          variant="secondary"
          :outlined="false"
          :isLoading="applying"
          :disabled="applying"
          @click="clear"
        />
        <Button
          v-else
          type="button"
          :label="t('apply')"
          variant="secondary"
          :outlined="false"
          :isLoading="applying"
          :disabled="applying || !code.trim()"
          @click="apply"
        />
      </template>
    </Input>
    <div v-if="active || notices.length" class="order-couponAlerts">
      <Alert v-if="active && !hasBlockingNotice && !deliveryCouponIneffective" variant="success">{{ t('applied') }}</Alert>
      <Alert v-if="active && deliveryCouponIneffective" variant="warning">{{ t('deliveryNotApplicable') }}</Alert>
      <Alert v-for="notice in notices" :key="notice.type" :variant="notice.severity">{{ notice.message }}</Alert>
    </div>
  </div>
</template>

<style scoped>
.order-coupon {
  margin-bottom: 24px;
}

.order-couponAlerts {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>

<i18n>
{
  "ru": {
    "label": "Код купона",
    "apply": "Применить",
    "clear": "Очистить",
    "applied": "Купон применён",
    "deliveryNotApplicable": "Купон недоступен для выбранного способа доставки"
  },
  "en": {
    "label": "Coupon code",
    "apply": "Apply",
    "clear": "Clear",
    "applied": "Coupon applied",
    "deliveryNotApplicable": "The coupon isn't available for the selected delivery method"
  }
}
</i18n>
