<script lang="ts" setup>
import { districts } from '~/common/districts';
import { tags } from '~/common/integrator_tags';
import Select from '~/components/Select.vue';

const { t, locale } = useI18n();
const district = ref();
const tag = ref();
const visibleItems = ref<string[]>([]);

useHead({
  title: t('title'),
});

const mapCenter = computed(() => {
  return district.value
    ? districts[locale.value].find(item => item.value === district.value)?.coordinates as number[]
    : locale.value === 'ru' ? [53, 45] : [50, 52]
});

const query = reactive({
  path: '/_integrators',
  where: [
    {
      district: { $contains: district.value },
      tags: { $contains: tag.value },
      _locale: locale.value
    }
  ],
  sort: [
    { title: 1 },
    { priority: 1 },
  ]
});

const { data, refresh } = await useAsyncData('integrators', () => queryContent(query.path).where(query.where[0]).find());
const { data: allData } = await useAsyncData('all_integrators', () => queryContent(query.path).where({ _locale: locale.value }).find());

const actualDistricts = computed(() => {
  const districtsInList = [...new Set(data.value?.map((item) => item.district).flat())];
  return districts[locale.value].filter((district) => districtsInList.includes(district.value));
});

const actualTags = computed(() => {
  const tagsInList = [...new Set(allData.value?.map((item) => item.tags).flat())];
  return tags[locale.value].filter((tag) => tagsInList.includes(tag.name));
});

const onChangeMapItems = (items: string[]) => {
  visibleItems.value = items;
};
</script>

<template>
  <Map
    :items="data"
    :center="mapCenter"
    :zoom="district ? actualDistricts.find((item) => item.value === district)?.zoom as number : 4"
    @visibleItemsChange="onChangeMapItems"
  />

  <Select
    class="partners-filter"
    v-model="district"
    optionLabel="label"
    optionValue="value"
    :options="actualDistricts"
    :placeholder="t('chooseArea')"
    :change-callback="refresh"
  />

  <Select
    v-if="!!actualTags.length"
    class="partners-filter"
    v-model="query.where[0].tags.$contains"
    optionLabel="label"
    optionValue="name"
    :options="actualTags"
    :placeholder="t('tags')"
    :change-callback="refresh"
  />

  <div class="partners">
    <ContentList :query="query">
      <template #default="{ list }">
        <template v-for="(partner, i) in list.filter(item => visibleItems.includes(item._id))" :key="partner._path">
          <Partner v-bind="partner as any">
            <ContentRendererMarkdown :value="partner" />
          </Partner>

          <hr class="partners-separator" v-if="i !== list.length - 1" />
        </template>
        <div v-if="!list.filter(item => visibleItems.includes(item._id)).length">
          {{ t('empty') }}
        </div>
      </template>
      <template #not-found>
        <div>
          {{ t('empty') }}
        </div>
      </template>
    </ContentList>
  </div>
</template>

<style>
.partners {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
}

.partners-separator {
  margin: 0;
}

.partners-filter {
  margin: 16px 12px 0 0;
  min-width: 230px;
}
</style>

<i18n>
{
  "ru": {
    "title": "Компании-интеграторы — Wiren Board",
    "chooseArea": "Регион",
    "tags": "Профиль организации",
    "empty": "В данной области пока нет компаний-интеграторов"
  },
  "en": {
    "title": "Integrators — Wiren Board",
    "chooseArea": "Region",
    "tags": "Category",
    "empty": "There are no integrators in this area yet"
  }
}
</i18n>
