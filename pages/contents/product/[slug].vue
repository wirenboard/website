<script lang="ts" setup>
import { useProduct } from '~/composables/useProduct';

const route = useRoute();
const { data } = await useLocalizedData('catalog', false, { _file: { $icontains: route.params.slug } });
const { data: product } = await useProduct(data.value.article);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}

defineOptions({
  name: 'Product',
});

// Картинки товара для PHP-обёртки (ExternalContentController в wirenboard.com): она собирает из
// них og:image и schema.org/Product для Google, потому что сама до frontmatter не дотягивается.
// Готовые URL ipx через `|`, первая - обложка. Ширина 1200 без смены формата: прозрачный PNG
// остаётся PNG. Один модификатор, чтобы в значении не было `&`.
const img = useImage();
const productImages = [data.value.cover, ...(data.value.images ?? []).map((image: [string, string?]) => image[0])]
  .filter((src: unknown): src is string => typeof src === 'string' && src !== '')
  .map((src: string) => img(src, { width: 1200 }));

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
      { name: 'wb-product-images', content: productImages.join('|') },
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
