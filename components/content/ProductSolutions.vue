<script setup lang="ts">
const { t, locale } = useI18n();
const props = defineProps<{ data: string[]; }>();

const query = { path: '/solutions', where: [{ _locale: locale.value }, { _path: { $in: props.data.map(item => `/solutions/${item}`) } }] };

const { data } = await useAsyncData('solutions', () => queryContent(query.path)
  .where({ _path: { $in: props.data.map(item => `/solutions/${item}`) } })
  .where({ _locale: locale.value })
  .find());
</script>

<template>
  <section class="productSolutions">
    <div class="productSolutions-list">
      <Article v-bind="article as any" v-for="article in data" :key="article._path" />
    </div>

    <div class="productSolutions-other">{{ t('additionalInfo') }} <a href="/contents/solutions">{{ t('solutionsPage') }}</a>.</div>
  </section>
</template>

<style>
.productSolutions-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  font-size: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
}

.productSolutions-other {
  font-size: 16px;
  margin-top: 36px;
}
</style>

<i18n>
{
  "ru": {
    "additionalInfo": "Рассказы о других проектах смотрите на странице",
    "solutionsPage": "Примеры внедрений"
  },
  "en": {
    "additionalInfo": "other projects are available on",
    "solutionsPage": "the Solutions page"
  }
}
</i18n>
