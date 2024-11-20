<script lang="ts" setup>
import { deviceType } from '~/common/device';

const route = useRoute();
const { locale } = useI18n();
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
  title: `${deviceType[data.value.type][locale.value]} ${data.value.name}`,
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
