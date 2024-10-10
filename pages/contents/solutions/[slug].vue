<script lang="ts" setup>
import dayjs from 'dayjs';

const { t } = useI18n();
const { locale } = useI18n();
const route = useRoute();
const { data } = await useLocalizedData(`/_solutions/${route.params.slug}`, true, { url: { $exists: false } });

useContentHead({
  ...data.value,
  head: {
    meta: [
      { name: 'wb-bc', content: `/${locale.value}/contents/solutions|Примеры внедрений` },
    ]
  }
});
</script>

<template>
  <article class="article">
    <ContentRenderer v-if="data">
      <ContentRendererMarkdown :value="data" />
      <i class="article-author">
        <time :datetime="dayjs(data.date).format('d.MM.YYYY')">{{ dayjs(data.date).format('D.MM.YYYY') }}</time>
      </i>
    </ContentRenderer>

    <div v-else>
      <h1>{{ t('notFoundTitle' ) }}</h1>
      <div>{{ t('notFoundDescription') }}</div>
    </div>
  </article>
</template>

<style>
.article h1 a,
.article h2 a,
.article h3 a,
.article h4 a {
  color: var(--text-color);
}

.article ul {
  margin-top: 0;
}

.article p + ul {
  margin-top: -18px;
}

.article-author {
  display: block;
  text-align: right;
}

.article h1,
.article h2,
.article h3,
.article h4 {
  font-weight: bold;
}

.article h2 {
  font-size: 27px;
}

.article h3 {
  font-size: 21px;
}
</style>

<i18n>
{
  "ru": {
    "team": "Команда Wiren Board",
    "notFoundTitle": "Страница не найдена (#404)",
    "notFoundDescription": "Что-то пошло не так"
  },
  "en": {
    "team": "Wiren Board team",
    "notFoundTitle": "Page not found (#404)",
    "notFoundDescription": "Something went wrong"
  }
}
</i18n>
