<script lang="ts" setup>
import { useApi } from '~/composables/useApi';
import type { Product } from '~/common/types';

const { locale } = useI18n();
const route = useRoute();
const { data } = await useLocalizedData('catalog', false, { _file: { $icontains: route.params.slug } });
console.log('slug get data')
const product = await useApi<Product>(`/product/${data.value.article}/?locale=${locale.value}`)
  .then(res => {
    console.log(11111, res);
    return res
  })
  .catch(err => {
  console.error(err);
});

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}

useContentHead({
  ...data.value,
  // @ts-ignore
  title: `${product.value?.type ?? ''} ${data.value.name ?? ''}`,
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
