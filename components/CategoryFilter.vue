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
    console.log(1)
    scrollToElementById(props.pageId);
  }
})
</script>

<template>
  <div class="categoryFilter">
    <SelectButton v-model="filter" :options="filterTypes as any" optionLabel="label" optionValue="value" />
    <div class="categoryFilter-content">
      <ul v-if="filter === FilterTypeKeys.ByCategory">
        <li v-for="category in categories[locale]" :key="category.name">
          <div @click="scrollToElementById(category.name)">{{ category.label }}</div>
          <ul v-if="category.sub_category">
            <li v-for="subCategory in category.sub_category" :key="category.name">
              <div @click="scrollToElementById(subCategory.name)">{{ subCategory.label }}</div>
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
  min-width: 310px;
}

.categoryFilter-content {
  margin-top: 12px;
}

.categoryFilter ul {
  margin: 0;
  padding-left: 24px;
  color: var(--link-color);
}

.categoryFilter li::marker {
  color: var(--text-color);
}

.categoryFilter ul ul {
  padding-left: 22px;
}

.categoryFilter ul li div {
  width: fit-content;
}

.categoryFilter ul li div:hover {
  cursor: pointer;
  text-decoration: underline;
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
