<script lang="ts" setup>
const route = useRoute();
const { data } = await useLocalizedData(`/pages/${route.params.slug}`);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}

defineOptions({
  name: 'Page',
});

useContentHead(data.value);
</script>

<template>
  <ContentRenderer>
    <ContentRendererMarkdown :value="data" />
  </ContentRenderer>
</template>

<style>
h2 a, h3 a, h4 a, h5 a, h6 a {
  color: #000;
}

h2 {
  margin: 42px 0 22px;
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
