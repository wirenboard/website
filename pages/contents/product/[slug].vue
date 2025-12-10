<script lang="ts" setup>
import { useApi } from '~/composables/useApi';
import type { Product } from '~/common/types';

const { locale } = useI18n();
const route = useRoute();
const { data } = await useLocalizedData('catalog', false, { _file: { $icontains: route.params.slug } });
const { data: product } = await useApi<Product>(`/product/${data.value.article}/?locale=${locale.value}`);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}

defineOptions({
  name: 'Product',
});

useContentHead({
  ...data.value,
  // @ts-ignore
  title: `${product.value?.type ?? ''} ${product.value?.name ?? ''}`,
  head: {
    meta: [
      { name: 'description', content: data.value.meta },
      { name: 'keywords', content: data.value.keywords },
      { name: 'wb-hide-heading', content: 'true' },
      { property: 'og:title', content: product.value?.name },
      { property: 'og:description', content: data.value?.meta || product.value?.type },
      { property: 'og:image', content: `https://wirenboard.com/_ipx/_${data.value?.cover}` },
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
