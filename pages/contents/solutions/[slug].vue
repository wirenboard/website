<script lang="ts" setup>
import dayjs from 'dayjs';

const { t } = useI18n();
const { locale } = useI18n();
const route = useRoute();
const { data } = await useLocalizedData(`/solutions/${route.params.slug}`, false, { url: { $exists: false } });

defineOptions({
  name: 'Solution'
});

useContentHead({
  ...data.value,
  head: {
    meta: [
      { name: 'wb-bc', content: `/${locale.value}/contents/solutions|${t('title')}` },
    ]
  }
});
</script>

<template>
  <article class="article page-content">
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
.article h1,
.article h2,
.article h3,
.article h4 {
  font-weight: bold;
  color: var(--heading-color);
}

.article h1 a,
.article h2 a,
.article h3 a,
.article h4 a {
  color: inherit;
}

.article h1 {
  font-size: 32px;
  margin-bottom: 16px;
  line-height: 1.25;
}

.article h2 {
  font-size: 27px;
  margin-top: 36px;
  margin-bottom: 12px;
  line-height: 1.3;
}

.article h3 {
  font-size: 21px;
  margin-top: 28px;
  margin-bottom: 8px;
  line-height: 1.35;
}

.article h4 {
  margin-top: 20px;
  margin-bottom: 6px;
}

.article ul,
.article ol {
  margin-top: 0;
  padding-left: 1.2em;
}

.article p + ul,
.article p + ol {
  margin-top: -0.3em;
}

.article table {
  border-collapse: collapse;
  width: 100%;
}

.article td,
.article th {
  border: 1px solid var(--border-color);
  padding: 6px 10px;
  font-size: 15px;
}

.article tr:first-child td,
.article tr:first-child th {
  border-top: none;
}

.article tr:last-child td,
.article tr:last-child th {
  border-bottom: none;
}

.article td:first-child,
.article th:first-child {
  border-left: none;
}

.article td:last-child,
.article th:last-child {
  border-right: none;
}

.article th {
  background: var(--gray-color);
  font-weight: bold;
}

.article td:empty,
.article th:empty {
  padding: 0;
}

.article blockquote {
  margin: 1.5em 0;
  padding: 16px 20px;
  border-left: 5px solid var(--link-color);
  background: var(--gray-color);
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: var(--text-color);
  overflow: hidden;
}

.article blockquote p {
  margin: 0;
}

.article blockquote p strong {
  font-style: normal;
}

.article-author {
  display: block;
  text-align: right;
  color: var(--text-secondary-color);
  margin-top: 48px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  font-size: 16px;
}
</style>

<i18n>
{
  "ru": {
    "title": "Примеры использования",
    "team": "Команда Wiren Board",
    "notFoundTitle": "Страница не найдена (#404)",
    "notFoundDescription": "Что-то пошло не так"
  },
  "en": {
    "title": "Solutions",
    "team": "Wiren Board team",
    "notFoundTitle": "Page not found (#404)",
    "notFoundDescription": "Something went wrong"
  }
}
</i18n>
