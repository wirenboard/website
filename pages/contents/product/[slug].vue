<script lang="ts" setup>
import { useProduct } from '~/composables/useProduct';

const route = useRoute();
// Контентные файлы лежат с slug в нижнем регистре; артикулы в ссылках (в т.ч. старых/внешних)
// бывают в исходном регистре (WB-MCM8) — приводим перед точным поиском по пути.
const slug = String(route.params.slug).toLowerCase();
const { data } = await useLocalizedData(`/catalog/${slug}`, false, {});

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
