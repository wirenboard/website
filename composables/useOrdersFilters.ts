export interface OrdersFiltersState {
  id: string;
  email: string;
  orgName: string;
  sum: string;
  status: number | null;
  payStatus: number | null;
}

const queryStr = (route: ReturnType<typeof useRoute>, key: string): string | null => {
  const v = route.query[key];
  return typeof v === 'string' && v !== '' ? v : null;
};
const queryNum = (route: ReturnType<typeof useRoute>, key: string): number | null => {
  const v = queryStr(route, key);
  const n = v !== null ? Number(v) : NaN;
  return Number.isNaN(n) ? null : n;
};

const toYiiDate = (d: Date) => {
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return `${dd}.${mm}.${d.getFullYear()}`;
};
const fromYiiDate = (s: string): Date | null => {
  const m = s.trim().match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!m) return null;
  const [, dd, mm, yyyy] = m;
  return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
};

export const useOrdersFilters = () => {
  const route = useRoute();
  const router = useRouter();

  const filters = reactive<OrdersFiltersState>({
    id: queryStr(route, 'OrderSearch[id]') ?? '',
    email: queryStr(route, 'OrderSearch[email]') ?? '',
    orgName: queryStr(route, 'OrderSearch[org_name]') ?? '',
    sum: queryStr(route, 'OrderSearch[sum_search]') ?? '',
    status: queryNum(route, 'OrderSearch[status]'),
    payStatus: queryNum(route, 'OrderSearch[pay_status]'),
  });
  const appliedFilters = reactive({ ...filters });

  const initialCreatedRange = queryStr(route, 'OrderSearch[created_range]');
  const [initialFrom, initialTo] = initialCreatedRange
    ? initialCreatedRange.split(' - ').map((part) => fromYiiDate(part))
    : [null, null];
  const dateRange = ref<(Date | null)[] | null>(initialFrom && initialTo ? [initialFrom, initialTo] : null);
  const appliedDateRange = ref<(Date | null)[] | null>(dateRange.value ? [...dateRange.value] : null);

  const page = ref(queryNum(route, 'page') ?? 1);
  const pageSize = ref(queryNum(route, 'per-page') ?? 20);
  const sort = ref(queryStr(route, 'sort') ?? '-id');
  const sortAttr = computed(() => sort.value.replace(/^-/, ''));
  const sortDesc = computed(() => sort.value.startsWith('-'));

  const toggleSort = (attr: string) => {
    sort.value = sortAttr.value === attr && !sortDesc.value ? `-${attr}` : attr;
    page.value = 1;
  };

  watch(pageSize, () => {
    page.value = 1;
  });

  let debounceTimer: ReturnType<typeof setTimeout> | undefined;
  const scheduleApply = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      page.value = 1;
      Object.assign(appliedFilters, filters);
      appliedDateRange.value = dateRange.value ? [...dateRange.value] : null;
    }, 400);
  };
  watch(filters, scheduleApply, { deep: true });
  watch(dateRange, scheduleApply);

  const queryParams = computed(() => {
    const f = appliedFilters;
    const params: Record<string, string | number> = { page: page.value, sort: sort.value, 'per-page': pageSize.value };
    if (f.id) params['OrderSearch[id]'] = f.id;
    if (f.email) params['OrderSearch[email]'] = f.email;
    if (f.orgName) params['OrderSearch[org_name]'] = f.orgName;
    if (f.sum) params['OrderSearch[sum_search]'] = f.sum;
    if (f.status !== null) params['OrderSearch[status]'] = f.status;
    if (f.payStatus !== null) params['OrderSearch[pay_status]'] = f.payStatus;
    const [from, to] = appliedDateRange.value ?? [];
    if (from && to) {
      params['OrderSearch[created_range]'] = `${toYiiDate(from)} - ${toYiiDate(to)}`;
    }
    return params;
  });

  watch(queryParams, (params) => {
    router.replace({ query: params });
  });

  return { filters, dateRange, page, pageSize, sort, sortAttr, sortDesc, toggleSort, queryParams };
};
