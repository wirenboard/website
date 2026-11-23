const STATUS_LABELS: Record<string, Record<number, string>> = {
  ru: {
    0: 'Новый',
    2: 'Передан в сборку',
    3: 'Готов к отгрузке',
    4: 'Отгружен',
    8: 'Частично отгружен',
    9: 'Готов к выдаче',
    10: 'Частично готов к выдаче',
    100: 'Отменён',
  },
  en: {
    0: 'New',
    2: 'Agreed',
    3: 'Ready to ship',
    4: 'Shipped',
    8: 'Partially shipped',
    9: 'Ready for pickup',
    10: 'Partially ready for pickup',
    100: 'Cancelled',
  },
};
const PAY_STATUS_LABELS: Record<string, Record<number, string>> = {
  ru: { 0: 'Не оплачен', 1: 'Оплачен', 2: 'Частично оплачен' },
  en: { 0: 'Not paid', 1: 'Paid', 2: 'Partially paid' },
};

export type BadgeVariant = 'neutral' | 'info' | 'success' | 'warning' | 'error';

const STATUS_VARIANTS: Record<number, BadgeVariant> = {
  0: 'neutral', // Новый
  2: 'info', // Передан в сборку
  3: 'info', // Готов к отгрузке
  4: 'success', // Отгружен
  8: 'warning', // Частично отгружен
  9: 'success', // Готов к выдаче
  10: 'warning', // Частично готов к выдаче
  100: 'error', // Отменён
};
const PAY_STATUS_VARIANTS: Record<number, BadgeVariant> = {
  0: 'error', // Не оплачен
  1: 'success', // Оплачен
  2: 'warning', // Частично оплачен
};

const toOptions = (list: Record<number, string>) => Object.entries(list)
  .map(([value, label]) => ({ value: Number(value), label }));

export const useOrderStatusLabels = () => {
  const { locale } = useI18n();

  const statusList = computed(() => STATUS_LABELS[locale.value] ?? STATUS_LABELS.ru);
  const payStatusList = computed(() => PAY_STATUS_LABELS[locale.value] ?? PAY_STATUS_LABELS.ru);
  const statusOptions = computed(() => toOptions(statusList.value));
  const payStatusOptions = computed(() => toOptions(payStatusList.value));
  const statusVariant = (status: number): BadgeVariant => STATUS_VARIANTS[status] ?? 'neutral';
  const payStatusVariant = (payStatus: number): BadgeVariant => PAY_STATUS_VARIANTS[payStatus] ?? 'neutral';

  return { statusList, payStatusList, statusOptions, payStatusOptions, statusVariant, payStatusVariant };
};
