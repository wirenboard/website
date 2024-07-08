<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';

const { t, locale } = useI18n();
const district = ref();

useHead({
  title: t('title'),
});

const query: QueryBuilderParams = reactive({ path: '/_partners/integrator', where: [{
    _locale: locale.value, district: { $contains: district.value }
  }], sort: [{ sort: 1 }] });

const { data, refresh } = await useAsyncData('home', () => queryContent(query.path).where({ district: { $contains: district.value } }).find());
console.log(data.value)
const filterChanged = () => {
  query.where = [{
    _locale: locale.value, district: { $contains: district.value }
  }]
  refresh();
};

const districts = [
  { value: undefined, label: 'Выберите область', coordinates: [53, 45], zoom: 4 },
  { value: 'moscow', label: 'Москва и область', coordinates: [55.8, 37.5], zoom: 9 },
  { value: 'spb', label: 'Северо-запад', coordinates: [59.95, 30.4], zoom: 10 },
  { value: 'center', label: 'Центральный округ', coordinates: [54.21, 37.62], zoom: 12 },
  { value: 'volga', label: 'Приволжье', coordinates: [57.5, 51], zoom: 6 },
  { value: 'ural', label: 'Урал', coordinates: [56.84, 60.57], zoom: 12 },
  { value: 'by', label: 'Беларусь', coordinates: [53.95, 27.6], zoom: 9 },
  { value: 'kg', label: 'Кыргызстан', coordinates: [43, 74.5], zoom: 8 },
]
</script>

<template>
  <select v-model="district" @change="filterChanged">
    <option
      v-for="district in districts"
      :value="district.value"
      :key="district.value"
    >
      {{ district.label }}
    </option>
  </select>

  <Map
    :items="data"
    :center="districts.find(item => item.value === district)?.coordinates as number[]"
    :zoom="districts.find(item => item.value === district)?.zoom as number"
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
</style>

<i18n>
{
  "ru": {
    "title": "Партнёры — Wiren Board"
  },
  "en": {
    "title": "Partners — Wiren Board"
  }
}
</i18n>
