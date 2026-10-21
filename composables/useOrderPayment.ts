import type { Ref } from 'vue';
import type { PaymentsInfo } from '~/common/types';

export const useOrderPayment = async (payerType: Ref<string>, country: Ref<number>) => {
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

  return { paymentsInfo, paymentType };
};
