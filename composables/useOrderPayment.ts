import type { Ref } from 'vue';
import type { PaymentsInfo, OrderPrefill } from '~/common/types';
import { isSameQuery } from '~/composables/useOrderPrefill';

export const useOrderPayment = async (payerType: Ref<string>, country: Ref<number>, prefill?: OrderPrefill) => {
  const paymentsParams = computed(() => ({ payerType: payerType.value, country: country.value }));
  const { data: paymentsInfo } = await useApi<PaymentsInfo>(
    '/order/payments/',
    paymentsParams,
    {
      watch: [payerType, country],
      // При SSR — из X-WB-Order, если PHP собрал способы оплаты для тех же payerType и country.
      prefill: () => (prefill && isSameQuery(prefill.payments.params, paymentsParams.value) ? prefill.payments.data : undefined),
    },
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

  return { paymentsInfo, paymentType };
};
