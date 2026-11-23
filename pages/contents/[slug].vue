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
  <div class="page-clearFix"></div>
</template>

<style>
h2 a, h3 a, h4 a, h5 a, h6 a {
  color: #000;
}

main h2, h2 {
  margin: 42px 0 22px;
  font-size: 48px;
  font-weight: normal;
  line-height: 48px;
  color: #000;
}

main h3, h3 {
  margin: 0 0 10px;
  font-size: 28px;
  font-weight: bold;
  line-height: 32px;
  color: #000;
}

.table-wrapper {
  display: inline-block;
  width: auto;
  max-width: 100%;
}

table {
  border-collapse: collapse;
  border: none !important;
}

td, th {
  border: 1px solid var(--border-color);
  padding: 6px 10px;
  font-size: 15px;
  text-align: left;
}

tr:first-child td, tr:first-child th {
  border-top: none !important;
}

tr:last-child td, tr:last-child th {
  border-bottom: none !important;
}

td:first-child, th:first-child {
  border-left: none !important;
}

td:last-child, th:last-child {
  border-right: none !important;
}

th {
  background: var(--gray-color);
  font-weight: bold;
}

td:empty, th:empty {
  padding: 0;
}

.page-clearFix {
  clear: both;
}
</style>
