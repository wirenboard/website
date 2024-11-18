<script lang="ts" setup>
const route = useRoute();
const { data } = await useLocalizedData(`_catalog`, true, { _file: { $icontains: route.params.slug } });

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}

useContentHead({
  ...data.value,
  head: {
    meta: [
      { name: 'description', content: data.value.meta },
      { name: 'keywords', content: data.value.keywords },
    ]
  }
});
</script>

<template>
  <ContentRenderer>
    <ContentRendererMarkdown :value="data" />
  </ContentRenderer>
</template>
