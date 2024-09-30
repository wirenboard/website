<script lang="ts" setup>
import { districts } from '~/common/districts';
import Select from '~/components/Select.vue';

const { t, locale } = useI18n();
const district = ref();
const visibleItems = ref<string[]>([]);

useHead({
  title: t('title'),
});

const mapCenter = computed(() => {
  return district.value
    ? districts[locale.value].find(item => item.value === district.value)?.coordinates as number[]
    : locale.value === 'ru' ? [53, 45] : [50, 52]
});

const query = reactive({ path: '/_integrators', where: [{
    _locale: locale.value, district: { $contains: district.value }
  }], sort: [{ title: 1 }, { priority: 1 }] });

const { data, refresh } = await useAsyncData('integrators', () => queryContent(query.path).where({ _locale: locale.value, district: { $contains: district.value } }).find());

const filterChanged = () => {
  query.where = [{
    _locale: locale.value, district: { $contains: district.value }
  }]
  refresh();
};

const onChangeMapItems = (items: string[]) => {
  visibleItems.value = items;
};
</script>

<template>
  <Map
    :items="data"
    :center="mapCenter"
    :zoom="district ? districts[locale].find(item => item.value === district)?.zoom as number : 4"
    @visibleItemsChange="onChangeMapItems"
  />

  <Select
    class="partners-filter"
    v-model="district"
    :options="districts[locale]"
    optionLabel="label"
    optionValue="value"
    :placeholder="t('chooseArea')"
    :change-callback="filterChanged"
  />

  <ContentList :query="query">
    <template #default="{ list }">
      <div class="partners">
        <template v-for="(partner, i) in list.filter(item => visibleItems.includes(item._id))" :key="partner._path">
          <Partner v-bind="partner as any">
            <ContentRendererMarkdown :value="partner" />
          </Partner>

          <hr class="partners-separator" v-if="i !== list.length - 1" />
        </template>
        <div v-if="!list.filter(item => visibleItems.includes(item._id)).length">
          {{ t('empty') }}
        </div>
      </div>
    </template>
  </ContentList>
</template>

<style>
.partners {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.partners-separator {
  margin: 0;
}

.partners-filter {
  margin: 12px 0;
}
</style>

<i18n>
{
  "ru": {
    "title": "Компании-интеграторы — Wiren Board",
    "chooseArea": "Выберите регион",
    "empty": "В данной области пока нет компаний-интеграторов"
  },
  "en": {
    "title": "Integrators — Wiren Board",
    "chooseArea": "Select a region",
    "empty": "There are no integrators in this area yet"
  }
}
</i18n>
