<script lang="ts" setup>
import { useProduct } from '~/composables/useProduct';

const route = useRoute();
const { data } = await useLocalizedData(`/catalog/${route.params.slug}`, false, {});

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}

const { data: product } = await useProduct(data.value.article);

defineOptions({
  name: 'Product',
});

useContentHead({
  ...data.value,
  // @ts-ignore
  title: `${product.value?.type ?? ''} ${product.value?.name ?? ''}`,
  head: {
    meta: [
      { name: 'name', content: data.value.name },
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
  <ScrollTopButton />
</template>
