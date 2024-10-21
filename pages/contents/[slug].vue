<script lang="ts" setup>
const route = useRoute();
const { t } = useI18n();
const { locale } = useI18n();
const { data } = await useLocalizedData(`/pages/${route.params.slug}`);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}

useContentHead(data.value);
</script>

<template>
  <ContentRenderer>
    <ContentRendererMarkdown :value="data" />
  </ContentRenderer>
</template>

<style>
h2 a, h3 a, h4 a, h5 a, h6 a {
  color: var(--text-color);
}

table {
  border-collapse: collapse;
}

td, th {
  border: 1px solid var(--border-color);
  padding: 10px 15px;
}

td:empty, th:empty {
  padding: 0;
}
</style>
