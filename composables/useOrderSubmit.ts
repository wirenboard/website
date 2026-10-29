import type { Ref } from 'vue';
import { OrderErrorKind, type CustomerData } from '~/common/types';

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

export const useOrderSubmit = async (params: {
  formRef: Ref<HTMLFormElement | null>;
  payerType: Ref<string>;
  individual: Ref<CustomerData['individual']>;
  entity: Ref<CustomerData['entity']>;
  paymentType: Ref<string>;
  deliveryType: Ref<string>;
  deliveryData: Ref<Record<string, string>>;
  blocked: Ref<boolean>;
}) => {
  const submitPending = ref(false);
  const orderError = ref(false);
  const orderErrorKind = ref<OrderErrorKind | null>(null);
  const fieldErrors = ref<Record<string, string>>({});

  const orderPayload = ref<any>(null);
  const { execute: submitOrder, data: orderResult, error: orderRequestError } = await useApi<{ redirect_url: string }>(
    '/order/create/',
    null,
    { method: 'POST', body: orderPayload, immediate: false },
  );

  const makeOrder = async () => {
    if (submitPending.value) return;
    if (params.blocked.value) return;

    const firstInvalid = params.formRef.value?.querySelector(':invalid:not(fieldset)') as HTMLElement | null;
    if (firstInvalid) {
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstInvalid.focus();
      return;
    }

    fieldErrors.value = {};
    orderError.value = false;
    orderErrorKind.value = null;
    submitPending.value = true;
    orderPayload.value = {
      payerType: params.payerType.value,
      payerData: params.payerType.value === 'individual' ? params.individual.value : params.entity.value,
      paymentType: params.paymentType.value,
      deliveryType: params.deliveryType.value,
      deliveryData: params.deliveryData.value,
    };
    await submitOrder();
    submitPending.value = false;
    if (orderRequestError.value) {
      const errorData = orderRequestError.value.data as { errors?: unknown; kind?: string } | undefined;
      fieldErrors.value = parseErrors(errorData);
      orderErrorKind.value = errorData?.kind === OrderErrorKind.Payment ? OrderErrorKind.Payment : null;
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

  return { submitPending, orderError, orderErrorKind, fieldErrors, makeOrder };
};
