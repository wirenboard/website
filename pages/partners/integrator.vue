<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';
import Select from "~/components/Select.vue";

const { t, locale } = useI18n();
const district = ref();

useHead({
  title: t('title'),
});

const query: QueryBuilderParams = reactive({ path: '/_partners/integrator', where: [{
    _locale: locale.value, district: { $contains: district.value }
  }], sort: [{ sort: 1 }] });

const { data, refresh } = await useAsyncData('home', () => queryContent(query.path).where({ district: { $contains: district.value } }).find());

const filterChanged = () => {
  query.where = [{
    _locale: locale.value, district: { $contains: district.value }
  }]
  refresh();
};

const districts = [
  { value: 'moscow', label: t('moscow'), coordinates: [55.8, 37.5], zoom: 9 },
  { value: 'spb', label: t('spb'), coordinates: [59.95, 30.4], zoom: 10 },
  { value: 'center', label: t('center'), coordinates: [54.21, 37.62], zoom: 12 },
  { value: 'volga', label: t('volga'), coordinates: [57.5, 51], zoom: 6 },
  { value: 'ural', label: t('ural'), coordinates: [56.84, 60.57], zoom: 12 },
  { value: 'by', label: t('by'), coordinates: [53.95, 27.6], zoom: 9 },
  { value: 'kg', label: t('kg'), coordinates: [43, 74.5], zoom: 8 },
];
</script>

<template>
  <Map
    :items="data"
    :center="district ? districts.find(item => item.value === district)?.coordinates as number[] : [53, 45]"
    :zoom="district ? districts.find(item => item.value === district)?.zoom as number : 4"
  />

  <Select
    class="partners-filter"
    v-model="district"
    :options="districts"
    optionLabel="label"
    optionValue="value"
    :placeholder="t('chooseArea')"
    :change-callback="filterChanged"
  />

  <ContentList :query="query">
    <template #default="{ list }">
      <div class="partners">
        <template v-for="(partner, i) in list" :key="partner._path">
          <Partner v-bind="partner">
            <ContentRendererMarkdown :value="partner" />
          </Partner>

          <hr class="partners-separator" v-if="i !== list.length - 1" />
        </template>
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
    "title": "Партнёры — Wiren Board",
    "chooseArea": "Выберите область",
    "moscow": "Москва и область",
    "spb": "Северо-запад",
    "center": "Центральный округ",
    "volga": "Приволжье",
    "ural": "Урал",
    "by": "Беларусь",
    "kg": "Кыргызстан"
  },
  "en": {
    "title": "Partners — Wiren Board",
    "chooseArea": "Select a region",
    "moscow": "Moscow and Moscow region",
    "spb": "North-western federal restrict",
    "center": "Central federal district",
    "volga": "Volga federal district",
    "ural": "Ural federal district",
    "by": "Republic of Belarus",
    "kg": "Republic of Kyrgyzstan"
  }
}
</i18n>
