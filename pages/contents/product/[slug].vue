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
  // @ts-ignore
  title: `${data.value.type} ${data.value.name}`,
  head: {
    meta: [
      { name: 'description', content: data.value.meta },
      { name: 'keywords', content: data.value.keywords },
      { name: 'wb-hide-heading', content: 'true' },
    ]
  }
});
</script>

<template>
  <ContentRenderer>
    <ContentRendererMarkdown :value="data" />
  </ContentRenderer>
</template>
