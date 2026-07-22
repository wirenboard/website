<script setup lang="ts">
interface DadataAddressData {
  postal_code: string | null;
  city_with_type: string | null;
  settlement_with_type: string | null;
  region_with_type: string | null;
  street_with_type: string | null;
  house: string | null;
  block: string | null;
  flat_type: string | null;
  flat: string | null;
}

interface DadataSuggestion {
  value: string;
  data: DadataAddressData;
  isRecent?: boolean;
}

const props = defineProps<{
  recentSuggestions?: DadataSuggestion[];
  required?: boolean;
}>();

const emit = defineEmits<{
  select: [{ city: string; postcode: string; street: string; house: string; room: string }];
  noResults: [value: boolean];
}>();

const { t } = useI18n();
const config = useRuntimeConfig();
const query = ref('');
const suggestions = ref<DadataSuggestion[]>([]);
const isOpen = ref(false);
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

const selected = ref(false);
const touched = ref(false);
const error = computed(() => !!props.required && touched.value && !selected.value);
const inputRef = ref<HTMLInputElement | null>(null);

watchEffect(() => {
  if (!inputRef.value || !props.required) return;
  inputRef.value.setCustomValidity(selected.value ? '' : t('validationMessage'));
});

const showRecent = () => {
  if (props.recentSuggestions?.length) {
    suggestions.value = props.recentSuggestions;
    isOpen.value = true;
  }
};

const fetchSuggestions = async (value: string) => {
  if (value.trim().length < 3) {
    suggestions.value = [];
    isOpen.value = false;
    emit('noResults', false);
    if (!value.trim()) showRecent();
    return;
  }
  const res = await $fetch<{ suggestions: DadataSuggestion[] }>(
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${config.public.dadataKey}`,
      },
      body: JSON.stringify({ query: value, count: 6 }),
    }
  );
  suggestions.value = res.suggestions ?? [];
  isOpen.value = suggestions.value.length > 0;
  emit('noResults', suggestions.value.length === 0);
};

const onInput = () => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => fetchSuggestions(query.value), 300);
};

const applyDadataResult = (suggestion: DadataSuggestion) => {
  selected.value = true;
  const { data } = suggestion;
  query.value = suggestion.value;
  isOpen.value = false;

  const city = data.city_with_type || data.settlement_with_type || data.region_with_type || '';
  const postcode = data.postal_code || '';
  const street = data.street_with_type || '';
  const house = [data.house || null, data.block ? `к${data.block}` : null].filter(Boolean).join(' ');
  const room = data.flat ?? '';

  emit('select', { city, postcode, street, house, room });
};

const onSelect = async (suggestion: DadataSuggestion) => {
  if (suggestion.isRecent) {
    query.value = suggestion.value;
    isOpen.value = false;
    const res = await $fetch<{ suggestions: DadataSuggestion[] }>(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${config.public.dadataKey}` },
        body: JSON.stringify({ query: suggestion.value, count: 1 }),
      }
    );
    if (res.suggestions?.[0]) applyDadataResult(res.suggestions[0]);
    else emit('noResults', true);
    return;
  }
  applyDadataResult(suggestion);
};

const onBlur = () => {
  touched.value = true;
  setTimeout(() => { isOpen.value = false; }, 150);
};
</script>

<template>
  <div class="address-search">
    <div class="input-wrapper">
      <input
        ref="inputRef"
        v-model="query"
        type="text"
        placeholder=" "
        class="input"
        :class="{ 'input-filled': !!query, 'input-error': error }"
        id="address-search"
        autocomplete="off"
        @input="onInput"
        @blur="onBlur"
        @focus="() => { if (suggestions.length > 0) isOpen = true; else showRecent(); }"
      />
      <label class="input-label" for="address-search">
        {{ t('label') }}
        <span v-if="required" class="input-required">*</span>
      </label>
    </div>
    <ul v-if="isOpen" class="address-search-dropdown">
      <li
        v-for="(suggestion, i) in suggestions"
        :key="i"
        class="address-search-item"
        @mousedown.prevent="onSelect(suggestion)"
      >
        {{ suggestion.value }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.address-search {
  position: relative;
}

.address-search-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background: #fff;
  border: 1px solid var(--border-color);
  border-top: none;
  border-radius: 0 0 2px 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.address-search-item {
  padding: 10px 12px;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
  line-height: 1.4;
}

.address-search-item:last-child {
  border-bottom: none;
}

.address-search-item:hover {
  background: #f5f5f5;
}
</style>

<i18n>
{
  "ru": {
    "label": "Поиск адреса",
    "validationMessage": "Выберите адрес из списка"
  },
  "en": {
    "label": "Address search",
    "validationMessage": "Select an address from the list"
  }
}
</i18n>
