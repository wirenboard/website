<script lang="ts" setup>
import DatePicker from 'primevue/datepicker';
import { usePrimeVue } from 'primevue/config';

const dateRange = defineModel<(Date | null)[] | null>();

const { t, locale } = useI18n();

// PrimeVue has no per-component locale prop — DatePicker reads month/weekday names from
// this global config, which otherwise stays in English regardless of site locale.
const primevue = usePrimeVue();
const RU_CALENDAR_LOCALE = {
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  today: 'Сегодня',
  clear: 'Очистить',
  chooseDate: 'Выберите дату',
  prevMonth: 'Предыдущий месяц',
  nextMonth: 'Следующий месяц',
  prevYear: 'Предыдущий год',
  nextYear: 'Следующий год',
  weekHeader: 'Нед',
  firstDayOfWeek: 1,
  dateFormat: 'dd.mm.yy',
};
const EN_CALENDAR_LOCALE = {
  dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  today: 'Today',
  clear: 'Clear',
  chooseDate: 'Choose Date',
  prevMonth: 'Previous Month',
  nextMonth: 'Next Month',
  prevYear: 'Previous Year',
  nextYear: 'Next Year',
  weekHeader: 'Wk',
  firstDayOfWeek: 0,
  dateFormat: 'mm/dd/yy',
};
watchEffect(() => {
  // @ts-ignore
  primevue.config.locale = {
    ...primevue.config.locale,
    ...(locale.value === 'ru' ? RU_CALENDAR_LOCALE : EN_CALENDAR_LOCALE),
  };
});

// Quick ranges from the old kartik\daterange\DateRangePicker widget this filter replaced —
// PrimeVue's DatePicker has no preset-list concept of its own, so these just set dateRange
// directly and reuse its #footer slot for the row of buttons.
const dayStart = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d: Date, days: number) => {
  const result = new Date(d);
  result.setDate(result.getDate() + days);
  return result;
};

const datePresets: { labelKey: string; range: () => [Date, Date] }[] = [
  { labelKey: 'presetToday', range: () => { const today = dayStart(new Date()); return [today, today]; } },
  { labelKey: 'presetLast7Days', range: () => { const today = dayStart(new Date()); return [addDays(today, -6), today]; } },
  { labelKey: 'presetLast30Days', range: () => { const today = dayStart(new Date()); return [addDays(today, -29), today]; } },
  {
    labelKey: 'presetThisMonth',
    range: () => {
      const now = new Date();
      return [new Date(now.getFullYear(), now.getMonth(), 1), new Date(now.getFullYear(), now.getMonth() + 1, 0)];
    },
  },
  {
    labelKey: 'presetLastMonth',
    range: () => {
      const now = new Date();
      return [new Date(now.getFullYear(), now.getMonth() - 1, 1), new Date(now.getFullYear(), now.getMonth(), 0)];
    },
  },
];

// Nothing filters until "Применить": the picker itself edits a draft copy (presets, the clear
// button and picking days on the calendar all touch only this), and only applyDraft() copies it
// into the real dateRange model the caller watches. Reopening the picker resyncs the draft from
// the last applied value, so an abandoned edit (closed without applying) doesn't stick.
const draftDateRange = ref<(Date | null)[] | null>(dateRange.value ?? null);
const datePickerRef = ref<{ overlayVisible: boolean } | null>(null);
const closeDatePicker = () => {
  if (datePickerRef.value) {
    datePickerRef.value.overlayVisible = false;
  }
};
const applyDraftDateRange = () => {
  dateRange.value = draftDateRange.value;
  closeDatePicker();
};

// Presets are a single, unambiguous choice ("Today", "Last 7 days"...) — unlike picking days on
// the calendar, there's nothing to double-check before applying, so they skip the draft/Apply
// step and take effect immediately.
const applyPreset = (range: [Date, Date]) => {
  dateRange.value = range;
  draftDateRange.value = range;
  closeDatePicker();
};

// Calling t() directly inside the DatePicker's #footer slot throws "$setup.t is not a function"
// — the local-scope i18n macro's injected t isn't reachable from inside a slot closure passed
// into a child component. Resolving the strings here, outside any slot, sidesteps it.
const presetButtons = computed(() => datePresets.map((preset) => ({ ...preset, label: t(preset.labelKey) })));
const clearLabel = computed(() => t('presetClear'));
const applyLabel = computed(() => t('presetApply'));
</script>

<template>
  <DatePicker
    ref="datePickerRef"
    v-model="draftDateRange"
    selectionMode="range"
    :manualInput="false"
    :numberOfMonths="2"
    dateFormat="dd.mm.yy"
    showIcon
    iconDisplay="input"
    :placeholder="t('filterDateRange')"
    class="orders-date-filter"
    @show="draftDateRange = dateRange ?? null"
    @hide="draftDateRange = dateRange ?? null"
  >
    <template #footer>
      <div class="orders-date-presets">
        <button
          v-for="preset in presetButtons"
          :key="preset.labelKey"
          type="button"
          class="orders-date-preset"
          @click="applyPreset(preset.range())"
        >{{ preset.label }}</button>
      </div>
      <div class="orders-date-actions">
        <button type="button" class="orders-date-preset" @click="draftDateRange = null">{{ clearLabel }}</button>
        <button type="button" class="orders-date-apply" @click="applyDraftDateRange">{{ applyLabel }}</button>
      </div>
    </template>
  </DatePicker>
</template>

<style>
.orders-date-filter {
  display: inline-flex;
  position: relative;
  width: 100%;
}

.orders-date-filter [data-pc-extend="inputtext"] {
  padding-right: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.orders-date-filter [data-pc-section="inputiconcontainer"] {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text-secondary-color);
  display: inline-flex;
}

.orders-date-filter [data-pc-section="inputiconcontainer"] svg {
  width: 13px;
  height: 13px;
}

[data-pc-section="panel"] {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  box-shadow: 1px 1px 12px var(--gray-color);
  padding: 10px;
  z-index: 100;
  width: max-content;
}

[data-pc-section="calendarcontainer"] {
  display: flex;
  gap: 20px;
}

.orders-date-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--border-color);
}

.orders-date-preset {
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: #fff;
  padding: 5px 10px;
  font-family: 'Plumb', sans-serif;
  font-size: 12px;
  color: var(--text-color);
  cursor: pointer;
  white-space: nowrap;
}

.orders-date-preset:hover {
  background: var(--gray-color);
  border-color: var(--border-color-hover);
}

.orders-date-actions {
  display: flex;
  justify-content: space-between;
  gap: 6px;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--border-color);
}

.orders-date-apply {
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  background: var(--primary-color);
  padding: 5px 12px;
  font-family: 'Plumb', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}

.orders-date-apply:hover {
  opacity: 0.9;
}

[data-pc-section="header"] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  margin-bottom: 6px;
  border-bottom: 1px solid var(--border-color);
  font-family: 'Plumb', sans-serif;
}

[data-pc-section="title"] {
  display: flex;
  gap: 6px;
  font-weight: 600;
  font-size: 14px;
}

[data-pc-section="selectmonth"],
[data-pc-section="selectyear"] {
  border: 0;
  background: none;
  font-family: 'Plumb', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

/* The prev/next month nav buttons render as data-pc-name="pcprevbutton"/"pcnextbutton", not
   "button" — selecting on data-pc-group-section="navigator" (shared by both, and not used by
   the selectmonth/selectyear title buttons) is the robust way to catch just these two. */
[data-pc-section="panel"] [data-pc-group-section="navigator"] {
  border: 0;
  background: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: var(--text-color);
}

[data-pc-section="panel"] [data-pc-group-section="navigator"]:hover {
  background: var(--gray-color);
}

[data-pc-section="panel"] [data-pc-group-section="navigator"] svg {
  width: 12px;
  height: 12px;
}

[data-pc-section="dayview"] {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Plumb', sans-serif;
  font-size: 13px;
}

[data-pc-section="weekday"] {
  padding: 4px;
  color: var(--text-secondary-color);
  font-weight: 600;
  font-size: 12px;
}

[data-pc-section="daycell"] {
  padding: 1px;
  text-align: center;
}

[data-pc-section="day"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
}

[data-pc-section="day"]:hover {
  background: var(--gray-color);
}

[data-pc-section="daycell"][data-p-other-month="true"] [data-pc-section="day"] {
  color: var(--text-secondary-color);
  opacity: 0.5;
}

[data-pc-section="daycell"][data-p-today="true"] [data-pc-section="day"] {
  border: 1px solid var(--primary-color);
}

[data-pc-section="day"][data-p-selected="true"] {
  background: var(--primary-color);
  color: #fff;
}
</style>

<i18n>
{
  "ru": {
    "filterDateRange": "Период",
    "presetToday": "Сегодня",
    "presetLast7Days": "За 7 дней",
    "presetLast30Days": "За 30 дней",
    "presetThisMonth": "Этот месяц",
    "presetLastMonth": "Прошлый месяц",
    "presetClear": "Очистить",
    "presetApply": "Применить"
  },
  "en": {
    "filterDateRange": "Period",
    "presetToday": "Today",
    "presetLast7Days": "Last 7 days",
    "presetLast30Days": "Last 30 days",
    "presetThisMonth": "This month",
    "presetLastMonth": "Last month",
    "presetClear": "Clear",
    "presetApply": "Apply"
  }
}
</i18n>
