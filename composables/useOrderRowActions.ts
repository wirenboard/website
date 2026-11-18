import type { UserOrder } from '~/common/types';

export const useOrderRowActions = () => {
  const { locale } = useI18n();

  const repeatingId = ref<number | null>(null);
  const cancelingId = ref<number | null>(null);

  const apiPost = <T>(url: string) => $fetch<T>(`/${locale.value}/ng/api/v1${url}`, { method: 'POST' });

  const repeatOrder = async (id: number) => {
    if (repeatingId.value) return null;
    repeatingId.value = id;
    try {
      return await apiPost<{ success: boolean; unavailableProducts: string[] }>(`/user/orders/${id}/repeat/`);
    } catch {
      return null;
    } finally {
      repeatingId.value = null;
    }
  };

  const cancelOrder = async (order: UserOrder) => {
    if (cancelingId.value) return null;
    cancelingId.value = order.id;
    try {
      const res = await apiPost<{ success: boolean; message: string; status: number }>(
        `/user/orders/${order.id}/cancel/`,
      );
      if (res.success) {
        order.status = res.status;
        order.canCancel = false;
      }
      return res;
    } catch {
      return null;
    } finally {
      cancelingId.value = null;
    }
  };

  return { repeatingId, cancelingId, repeatOrder, cancelOrder };
};
