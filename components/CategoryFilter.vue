<script setup lang="ts">
import SelectButton from '~/components/SelectButton.vue';
import { FilterTypeKeys, FilterDateParams, FilterTypeParams } from '~/common/constants';
import type { Categories } from '~/common/types';

const props = defineProps<{ pageId?: string; categories: Categories }>();

const { t, locale } = useI18n();
const filterTypes = Object.entries(FilterTypeParams).map(([value, label]) => ({ value, label: t(label) }));
const filterDates = Object.entries(FilterDateParams).map(([value, label]) => ({ value, label: t(label) }));
const filter = defineModel('filter');
const filterDate = defineModel('filterDate');

watch(() => filter.value, () => {
  if (props.pageId) {
    scrollToElementBySelector(`#${props.pageId}`);
  }
})
</script>

<template>
  <div class="categoryFilter">
    <SelectButton v-model="filter" :options="filterTypes as any" optionLabel="label" optionValue="value" />
    <div class="categoryFilter-content">
      <ul v-if="filter === FilterTypeKeys.ByCategory">
        <li v-for="category in categories[locale]" :key="category.name">
          <div @click="scrollToElementBySelector(`#${category.name}`)">{{ category.label }}</div>
          <ul v-if="category.sub_category">
            <li v-for="subCategory in category.sub_category" :key="category.name">
              <div @click="scrollToElementBySelector(`#${subCategory.name}`)">{{ subCategory.label }}</div>
            </li>
          </ul>
        </li>
      </ul>
      <div v-else>
        <div v-for="filter in filterDates" :key="filter.label" class="categoryFilter-date">
          <RadioButton v-model="filterDate" :inputId="filter.label" :value="filter.value" />
          <label :for="filter.label" class="ml-2">{{ filter.label }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.categoryFilter {
  position: sticky;
  top: 16px;
  min-width: 280px;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 20px;
}

.categoryFilter-content {
  margin-top: 12px;
}

.categoryFilter ul {
  margin: 0;
  padding-left: 20px;
  color: var(--text-color);
}

.categoryFilter li::marker {
  color: var(--text-color);
}

.categoryFilter ul ul {
  padding-left: 18px;
}

.categoryFilter ul li div {
  width: fit-content;
  transition: color 0.15s ease;
}

.categoryFilter ul li div:hover {
  cursor: pointer;
  color: var(--link-color);
  text-decoration: none;
}

.categoryFilter-date {
  display: flex;
  gap: 4px;
}

.categoryFilter-date label {
  cursor: pointer;
}
</style>

<i18n>
{
  "ru": {
    "filter_category": "По категориям",
    "filter_date": "По дате публикации",
    "filter_asc": "Сначала новые",
    "filter_desc": "Сначала старые"
  },
  "en": {
    "filter_category": "By category",
    "filter_date": "By date",
    "filter_asc": "New ones first",
    "filter_desc": "Old ones first"
  }
}
</i18n>
