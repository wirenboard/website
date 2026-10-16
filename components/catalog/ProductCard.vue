<script setup lang="ts">
import type { CatalogProduct } from '~/common/types';
import Button from '~/components/Button.vue';
import { formatPriceParts, CurrencySymbolPosition } from '~/utils/price';

const props = defineProps<{
  product: CatalogProduct;
  gridLayout?: boolean;
}>();

const { t, locale } = useI18n();

const productUrl = computed(() => `/${locale.value}/product/${props.product.slug}/`);

const priceMinParts = computed(() => formatPriceParts(props.product.price_min));
const priceMaxParts = computed(() => formatPriceParts(props.product.price_max));
const priceMinSecondaryParts = computed(() => (
  props.product.price_min_secondary ? formatPriceParts(props.product.price_min_secondary) : null
));
const priceMaxSecondaryParts = computed(() => (
  props.product.price_max_secondary ? formatPriceParts(props.product.price_max_secondary) : null
));

</script>

<template>
  <div class="productCard" :class="{ 'productCard--grid': gridLayout }">
    <a :href="productUrl" class="productCard-overlayLink" :aria-label="`${product.type} ${product.name}`"></a>
    <div class="productCard-img">
      <a :href="productUrl">
        <picture v-if="product.custom_images">
          <source v-if="gridLayout" type="image/webp"
            :srcset="`${product.custom_images['320']} 1x, ${product.custom_images['480']} 2x`">
          <source v-else type="image/webp"
            :srcset="`${product.custom_images['160']} 1x, ${product.custom_images['320']} 2x, ${product.custom_images['480']} 3x`">
          <img :src="gridLayout ? product.custom_images['480'] : product.custom_images['160']" :alt="product.name" loading="lazy">
        </picture>
        <img v-else-if="product.image" :src="product.image" :alt="product.name" loading="lazy">
      </a>
    </div>
    <h3 class="productCard-article" v-if="gridLayout">
      <a :href="productUrl">{{ product.article }}</a>
    </h3>
    <div class="productCard-content">
      <div class="productCard-info">
        <div class="productCard-title" v-if="!gridLayout">
          <a :href="productUrl">
            {{ product.type }} {{ product.name }}
          </a>
        </div>
        <div class="productCard-desc" v-if="product.description" v-html="product.description"></div>
        <div v-if="product.is_discontinued" class="productCard-discontinued">
          <i18n-t keypath="discontinued">
            <template #link>
              <a :href="`/${locale}/pages/contacts/`">{{ t('contactUs') }}</a>
            </template>
          </i18n-t>
        </div>
      </div>
      <div class="productCard-purchase">
        <div class="productCard-purchaseInner">
          <div class="productCard-availability" :class="{ 'productCard-notAvailable': product.is_discontinued }">
            <template v-if="!product.count_available && !product.count_reserve">
              {{ product.production_time_days ? t('backorder', { days: product.production_time_days }, product.production_time_days) : t('notAvailable') }}
            </template>
            <template v-else>
              {{ t('available', { count: product.count_available }) }}
              <template v-if="product.count_available < 10 && product.count_reserve">,
                {{ t('reserve', { count: product.count_reserve }) }}
              </template>
            </template>
          </div>

          <template v-if="!product.is_discontinued">
            <div class="productCard-price" :class="{ 'productCard-price--range': product.has_price_range }">
              <span v-if="product.has_options" class="productCard-priceFrom">{{ t('priceFrom') }}&nbsp;</span>
              <span class="productCard-priceValue">
                <template v-if="priceMinParts.position === CurrencySymbolPosition.Before">
                  <span class="productCard-currency">{{ priceMinParts.symbol }}</span><strong>{{ priceMinParts.amount }}</strong>
                </template>
                <template v-else>
                  <strong>{{ priceMinParts.amount }}</strong>&nbsp;<span class="productCard-currency">{{ priceMinParts.symbol }}</span>
                </template>
                <span v-if="priceMinSecondaryParts" class="productCard-priceRub">
                  (≈<strong>{{ priceMinSecondaryParts.amount }}</strong>&nbsp;<span class="productCard-currency">{{ priceMinSecondaryParts.symbol }}</span>)
                </span>
              </span>
              <template v-if="product.has_price_range">
                <br><span class="productCard-priceFrom">{{ t('priceTo') }}&nbsp;</span>
                <span class="productCard-priceValue">
                  <template v-if="priceMaxParts.position === CurrencySymbolPosition.Before">
                    <span class="productCard-currency">{{ priceMaxParts.symbol }}</span><strong>{{ priceMaxParts.amount }}</strong>
                  </template>
                  <template v-else>
                    <strong>{{ priceMaxParts.amount }}</strong>&nbsp;<span class="productCard-currency">{{ priceMaxParts.symbol }}</span>
                  </template>
                  <span v-if="priceMaxSecondaryParts" class="productCard-priceRub">
                    (≈<strong>{{ priceMaxSecondaryParts.amount }}</strong>&nbsp;<span class="productCard-currency">{{ priceMaxSecondaryParts.symbol }}</span>)
                  </span>
                </span>
              </template>
            </div>
            <div class="productCard-buyBtn">
              <Button
                v-if="product.has_options || product.has_components"
                :label="t('openCalc')"
                variant="primary"
                :block="!gridLayout"
                class="add-to-basket-set"
                :data-product_id="product.id"
                data-count="1"
              />
              <Button
                v-else
                :label="t('buy')"
                variant="primary"
                :block="!gridLayout"
                class="add-to-basket"
                :data-product_id="product.id"
                data-count="1"
                :disabled="!product.can_order"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.productCard {
  position: relative;
  display: flex;
  padding: 24px 0;
  border-bottom: 1px solid var(--border-color);
}

.productCard-overlayLink {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.productCard-img {
  position: relative;
  z-index: 2;
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.productCard-img img {
  max-width: 100%;
  max-height: 120px;
  height: auto;
  display: block;
}

.productCard-content {
  flex: 1;
  display: flex;
  min-width: 0;
  gap: 20px;
}

.productCard-info {
  flex: 1;
  min-width: 0;
}

.productCard-title {
  margin-bottom: 16px;
}

.productCard-title a,
.productCard-article a {
  position: relative;
  z-index: 2;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-strong-color);
  text-decoration: none;
}

.productCard-title a:hover,
.productCard-article a:hover {
  color: var(--primary-color);
}

.productCard-desc {
  font-size: 18px;
  line-height: 24px;
  color: var(--text-muted-color);
}

.productCard-desc :deep(p) {
  margin: 0.2em 0;
}

.productCard-desc :deep(a) {
  position: relative;
  z-index: 2;
  color: inherit;
  text-decoration: none;
}

.productCard-discontinued {
  margin-top: 15px;
  color: #e00000;
}

.productCard-discontinued a {
  position: relative;
  z-index: 2;
  color: #e00000;
  text-decoration: underline;
}

.productCard-purchase {
  flex-shrink: 0;
  width: 264px;
  display: flex;
  align-items: center;
}

.productCard-purchaseInner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.productCard-availability {
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-muted-color);
}

.productCard-purchase:has(.productCard-notAvailable) {
  width: unset;
  text-align: right;
}

.productCard-purchaseInner:has(.productCard-notAvailable) {
  justify-content: flex-end;
}

.productCard-price {
  width: 100%;
  font-size: 18px;
  color: var(--text-strong-color);
}

.productCard-priceFrom {
  font-size: 18px;
  color: var(--text-strong-color);
}

.productCard-priceValue strong {
  font-weight: 700;
}

.productCard-currency {
  font-size: 16px;
}

.productCard-buyBtn {
  position: relative;
  z-index: 2;
  width: 100%;
  margin-top: 16px;
}

.productCard-buyBtn :deep(.wb-button) {
  text-transform: uppercase;
}

.productCard-priceRub {
  color: var(--text-muted-color);
  font-size: 14px;
}

.productCard--grid {
  flex-direction: column;
  padding: 16px;
  border-bottom: none;
}

.productCard--grid .productCard-img {
  justify-content: flex-start;
  width: 100%;
  height: 160px;
  margin-right: 0;
  margin-bottom: 24px;
}

.productCard--grid .productCard-img img {
  max-height: 160px;
}

.productCard-article {
  margin: 0 0 16px;
}

.productCard-article a {
  text-transform: uppercase;
}

.productCard--grid .productCard-content {
  flex-direction: column;
  gap: 0;
}

.productCard--grid .productCard-purchase {
  order: -1;
  width: 100%;
  margin: 19px 0 15px;
}

.productCard--grid .productCard-purchaseInner {
  gap: 16px;
}

.productCard--grid .productCard-availability,
.productCard--grid .productCard-price {
  width: auto;
}

.productCard--grid .productCard-buyBtn {
  width: 240px;
  margin-top: 0;
}

@media (max-width: 767px) {
  .productCard {
    flex-direction: column;
    gap: 12px;
  }

  .productCard-img {
    width: 120px;
    margin-right: 0;
  }

  .productCard-content {
    flex-direction: column;
    gap: 12px;
  }

  .productCard-purchase {
    width: 100%;
    margin-top: 0 !important;
  }

  .productCard-title a,
  .productCard-article a {
    font-size: 17px;
  }

  .productCard-title,
  .productCard-article {
    margin-bottom: 8px;
  }

  .productCard-desc {
    font-size: 15px;
    line-height: 19px;
  }

  .productCard-availability {
    font-size: 14px;
  }

  .productCard-price,
  .productCard-priceFrom {
    font-size: 15px;
  }

  .productCard-buyBtn {
    margin-top: 8px;
  }

  .productCard--grid .productCard-img {
    margin-bottom: 0;
  }
}
</style>

<i18n>
{
  "ru": {
    "priceFrom": "от",
    "priceTo": "до",
    "buy": "Добавить в заказ",
    "openCalc": "Посмотреть опции",
    "available": "На складе {count} шт.",
    "reserve": "ещё {count} шт. в резерве",
    "backorder": "Под заказ до {days} рабочего дня | Под заказ до {days} рабочих дней | Под заказ до {days} рабочих дней",
    "notAvailable": "Нет в наличии",
    "discontinued": "Товар не продаётся, чтобы заказать — {link}",
    "contactUs": "свяжитесь с нами"
  },
  "en": {
    "priceFrom": "from",
    "priceTo": "to",
    "buy": "Add to basket",
    "openCalc": "View options",
    "available": "In stock {count} pcs.",
    "reserve": "{count} pcs. more in reserve",
    "backorder": "On order up to {days} business day | On order up to {days} business days",
    "notAvailable": "Not available",
    "discontinued": "Product is no longer available to order — {link}",
    "contactUs": "contact us"
  }
}
</i18n>
