import type { UserOrder } from '~/common/types';

export const useOrderRowActions = () => {
  const { locale } = useI18n();

  const repeatingId = ref<number | null>(null);
  const cancelingId = ref<number | null>(null);

  const apiPost = <T>(url: string) => $fetch<T>(`/${locale.value}/ng/api/v1${url}`, { method: 'POST' });

  // This page is proxied into the Yii layout's own DOM (ExternalContentController extracts
  // just its <body> and inlines it — not an iframe), so the header's basket icon and the
  // mini-cart popup are driven by that same window's jquery.main.js, not by us. Repeating an
  // order adds items through our own API call, bypassing that script's AJAX handlers
  // entirely, so without this nudge both the mini-cart popup and the .basket-count badge stay
  // stale until a full page reload — same trick components/order/Promocode.vue uses for
  // coupon apply/clear.
  const refreshSurroundingCart = () => {
    (window as any).renderBasket?.();
    (window as any).updateBasketCount?.();
  };

  const repeatOrder = async (id: number) => {
    if (repeatingId.value) return null;
    repeatingId.value = id;
    try {
      const res = await apiPost<{ success: boolean; unavailableProducts: string[] }>(`/user/orders/${id}/repeat/`);
      refreshSurroundingCart();
      return res;
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
