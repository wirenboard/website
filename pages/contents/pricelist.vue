<script lang="ts" setup>
import type { Pricelist } from '~/common/types';

const { t, locale } = useI18n();

useHead({
  title: t('title'),
});

const { data: pricelist } = await useApi<Pricelist>(`/pricelist?locale=${locale.value}`);

if (!pricelist.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Price list is not available',
  });
}

defineOptions({
  name: 'Pricelist',
});
</script>

<template>
  <div class="pricelist">
    <div v-for="category in pricelist.categories" :key="category.name" class="pricelist-category">
      <h3 class="pricelist-categoryTitle">{{ category.name }}</h3>

      <table class="pricelist-table">
        <thead>
          <tr>
            <th colspan="2">{{ t('fieldName') }}</th>
            <th class="pricelist-colSku">{{ t('fieldSku') }}</th>
            <th class="pricelist-colPrice">{{ t('fieldPrice') }}</th>
          </tr>
        </thead>
        <tbody v-for="product in category.products" :key="product.slug">
          <template v-if="product.type === 'detailed'">
            <tr>
              <td colspan="4" class="pricelist-productHeading">
                {{ product.short_desc }}
                <a :href="`/${locale}/product/${product.slug}`">{{ product.name }}</a>
              </td>
            </tr>
            <tr>
              <td colspan="2">{{ t('baseConfig') }}</td>
              <td class="pricelist-colSku">{{ product.sku }}</td>
              <td class="pricelist-colPrice">
                <PricelistPrice :price="product.base_config_price!" />
              </td>
            </tr>

            <template v-if="product.options?.length">
              <tr>
                <td colspan="4" class="pricelist-sectionHeading">{{ t('options') }}</td>
              </tr>
              <template v-for="option in product.options" :key="option.name">
                <tr v-for="(value, i) in option.values" :key="value.label">
                  <td v-if="i === 0" :rowspan="option.values.length">{{ option.name }}</td>
                  <td colspan="2">{{ value.label }}</td>
                  <td class="pricelist-colPrice">
                    <template v-if="value.delta">{{ value.delta.sign }}<PricelistPrice :price="value.delta" /></template>
                    <template v-else>-</template>
                  </td>
                </tr>
              </template>
            </template>

            <template v-if="product.sets?.length">
              <tr>
                <td colspan="4" class="pricelist-sectionHeading">{{ t('standardSets') }}</td>
              </tr>
              <tr v-for="set in product.sets" :key="set.sku">
                <td colspan="2">
                  {{ set.name }}
                  <br v-if="set.options.length" />
                  <template v-for="opt in set.options" :key="opt.name">{{ opt.name }}: {{ opt.value }}<br /></template>
                </td>
                <td class="pricelist-colSku">{{ set.sku }}</td>
                <td class="pricelist-colPrice"><PricelistPrice :price="set.price" /></td>
              </tr>
            </template>
          </template>

          <tr v-else>
            <td colspan="2">
              {{ product.short_desc }}
              <a :href="`/${locale}/product/${product.slug}`">{{ product.name }}</a>
            </td>
            <td class="pricelist-colSku">{{ product.sku }}</td>
            <td class="pricelist-colPrice">
              <PricelistPrice v-if="product.price" :price="product.price" />
              <template v-else>-</template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <a :href="`/${locale}/catalog/pricelist-download`" class="pricelist-exportLink">{{ t('export') }}</a>
  </div>
</template>

<style>
.pricelist-categoryTitle {
  margin-top: 40px;
}

.pricelist-categoryTitle:first-child {
  margin-top: 0;
}

.pricelist-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
}

.pricelist-table th,
.pricelist-table td {
  border: 1px solid var(--border-color);
  padding: 6px 10px;
  text-align: left;
  vertical-align: top;
  font-size: 16px;
}

.pricelist-table th {
  font-size: 14px;
  background: var(--gray-color);
}

.pricelist-table .pricelist-colSku,
.pricelist-table .pricelist-colPrice {
  text-align: center;
}

.pricelist-table th.pricelist-colSku {
  width: 180px;
}

.pricelist-table th.pricelist-colPrice {
  width: 160px;
}

.pricelist-productHeading,
.pricelist-sectionHeading {
  text-align: center !important;
  background: var(--gray-color);
}

.pricelist-sectionHeading {
  font-weight: bold;
}

.pricelist-exportLink {
  display: inline-block;
  color: var(--link-color);
}
</style>

<i18n>
{
  "ru": {
    "title": "Прайс-лист",
    "fieldName": "Название",
    "fieldSku": "Артикул",
    "fieldPrice": "Цена",
    "baseConfig": "Базовая конфигурация",
    "options": "Опции",
    "standardSets": "Стандартные конфигурации",
    "export": "Скачать прайс-лист в Excel"
  },
  "en": {
    "title": "Price list",
    "fieldName": "Name",
    "fieldSku": "SKU",
    "fieldPrice": "Price",
    "baseConfig": "Base configuration",
    "options": "Options",
    "standardSets": "Standard configurations",
    "export": "Download as Excel file"
  }
}
</i18n>
