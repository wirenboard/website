<script setup lang="ts">
interface DadataOrgData {
  inn: string;
  name: { short_with_opf: string };
  address: { unrestricted_value: string };
}

interface DadataSuggestion {
  value: string;
  data: DadataOrgData;
}

const props = defineProps<{
  recentSuggestions?: DadataSuggestion[];
}>();

const emit = defineEmits<{
  select: [{ orgName: string; inn: string; address: string }];
}>();

const config = useRuntimeConfig();
const query = ref('');
const suggestions = ref<DadataSuggestion[]>([]);
const isOpen = ref(false);
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

const showRecent = () => {
  if (props.recentSuggestions?.length) {
    suggestions.value = props.recentSuggestions;
    isOpen.value = true;
  }
};

const fetchSuggestions = async (value: string) => {
  if (value.trim().length < 2) {
    suggestions.value = [];
    isOpen.value = false;
    if (!value.trim()) showRecent();
    return;
  }
  const res = await $fetch<{ suggestions: DadataSuggestion[] }>(
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
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
};

const onInput = () => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => fetchSuggestions(query.value), 300);
};

const onSelect = (suggestion: DadataSuggestion) => {
  isOpen.value = false;
  emit('select', {
    orgName: suggestion.value,
    inn: suggestion.data.inn,
    address: suggestion.data.address.unrestricted_value,
  });
};

const onBlur = () => {
  setTimeout(() => { isOpen.value = false; }, 150);
};
</script>

<template>
  <div class="org-search">
    <div class="input-wrapper">
      <input
        v-model="query"
        type="text"
        placeholder=" "
        class="input"
        :class="{ 'input-filled': !!query }"
        id="org-search"
        autocomplete="off"
        @input="onInput"
        @blur="onBlur"
        @focus="() => { if (suggestions.length > 0) isOpen = true; else showRecent(); }"
      />
      <label class="input-label" for="org-search">Поиск организации</label>
    </div>
    <ul v-if="isOpen" class="org-search-dropdown">
      <li
        v-for="(suggestion, i) in suggestions"
        :key="i"
        class="org-search-item"
        @mousedown.prevent="onSelect(suggestion)"
      >
        <span class="org-search-item-name">{{ suggestion.value }}</span>
        <span class="org-search-item-inn">ИНН {{ suggestion.data.inn }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.org-search {
  position: relative;
}

.org-search-dropdown {
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

.org-search-item {
  padding: 10px 12px;
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.org-search-item:last-child {
  border-bottom: none;
}

.org-search-item:hover {
  background: #f5f5f5;
}

.org-search-item-name {
  font-size: 16px;
  line-height: 1.4;
}

.org-search-item-inn {
  font-size: 13px;
  color: #999;
}
</style>
