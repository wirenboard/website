<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import LinkIcon from '~/assets/icons/external-link.svg';
import { hardwarePlaylist } from '~/common/links';
import type { Product } from '~/common/types';
import ContentGallery from '~/components/content/Gallery.vue';
import ProductOptions from '~/components/content/ProductOptions.vue';
import ProductSolutions from '~/components/content/ProductSolutions.vue';
import { useApi } from '~/composables/useApi';
import { scrollToElementById } from '~/utils/scrollToElementById';
import 'swiper/css';

const route = useRoute();
const { t, locale } = useI18n();
const { data } = await useLocalizedData(`_catalog`, true, { _file: { $icontains: route.params.slug } });
const { data: product } = await useApi<Product>(`/product/${data.value.article}/?locale=${locale.value}`);
</script>

<template>
  <article class="product">
    <div class="product-promo">
      <div>
        <div class="product-subTitle">{{ product.title }}</div>
        <h1 class="product-title">{{ product.name }}</h1>
        <div>{{ product.sub_title }}</div>
      </div>

      <div class="product-coverWrapper">
        <NuxtImg :src="data.cover" class="product-cover" :alt="data.title" />
      </div>
    </div>

    <nav class="product-navigation">
      <swiper
        slidesPerView="auto"
        :spaceBetween="24"
        simulate-touch
      >
        <swiper-slide class="product-navigationItem" @click="scrollToElementById('description')">{{ t('description') }}</swiper-slide>
        <swiper-slide class="product-navigationItem" @click="scrollToElementById('useCases')" v-if="data?.use_cases?.length">{{ t('useCases') }}</swiper-slide>
        <swiper-slide class="product-navigationItem" @click="scrollToElementById('video')" v-if="data?.video?.length">{{ t('video') }}</swiper-slide>
        <swiper-slide class="product-navigationItem" @click="scrollToElementById('gallery')" v-if="data?.images?.length">{{ t('images') }}</swiper-slide>
        <swiper-slide class="product-navigationItem" @click="scrollToElementById('options')" v-if="product?.options?.length">{{ t('options') }}</swiper-slide>
        <swiper-slide class="product-navigationItem" @click="scrollToElementById('components')" v-if="product?.components?.length">{{ t('components') }}</swiper-slide>
        <swiper-slide class="product-navigationItem" v-if="data.documentation">
          <a :href="data.documentation" target="_blank">
            {{ t('documentation') }}
            <LinkIcon class="product-externalLink" />
          </a>
        </swiper-slide>
      </swiper>
    </nav>

    <div class="product-descriptionWrapper">
      <template v-if="$slots.description">
        <div class="product-description product-section" id="description">
          <p v-if="product?.discontinued" class="product-discontinued">
            {{ t('discontinued') }} — <a href="https://wirenboard.com/ru/pages/contacts/">{{ t('contactUs') }}</a>.
          </p>
          <ContentSlot :use="$slots.description" />
        </div>
      </template>

      <aside class="product-orderInfo" v-if="!product?.discontinued">
        <div class="product-price" v-if="product?.price">{{ toTriads(product.price) }} <sup class="product-priceUnit">₽</sup></div>
        <div class="product-note">{{ t('retailPrice') }} <span v-if="product?.price_max">{{ t('from') }} {{ toTriads(product.price) }} {{ t('to') }} {{ toTriads(product.price_max) }} ₽ {{ t('dependsOnOptions') }}</span></div>
        <div class="product-availability">
          {{ t('inStock') }} {{ toTriads(product?.items.available) }} {{ t('pcs') }}<span v-if="product?.items.inv_final_assembly">, {{ t('more') }} {{ toTriads(product.items.inv_final_assembly) }} {{ t('pcs') }} {{ t('scheduled') }} {{ t(product.items.schedule_unit) }}</span></div>
        <button
          :class="{
         'product-orderButton': true,
         'add-to-basket-set': (product?.options?.length || product?.components?.length),
         'add-to-basket': !(product?.options?.length || product?.components?.length),
       }"
          :data-product_id="product?.id"
          data-count="1"
          type="button"
        >
          {{ (product?.options?.length || product?.components?.length) ? t('chooseOptions') : t('addToBasket') }}
        </button>
      </aside>
    </div>

    <div class="product-section" id="useCases" v-if="data?.use_cases?.length">
      <h2>{{ t('useCases') }}</h2>
      <ProductSolutions :data="data?.use_cases" />
    </div>

    <div class="product-section" id="video" v-if="data?.video?.length">
      <h2>{{ t('video') }}</h2>
      <VideoGallery :data="data?.video" />
      <div class="product-otherVideos">{{ t('otherVideos') }} <a :href="hardwarePlaylist">{{ t('videosLink') }}</a>.</div>
    </div>

    <div class="product-section">
      <ContentSlot :use="$slots.info" unwrap="p" />
    </div>

    <div class="product-section" id="gallery" v-if="data?.images?.length">
      <h2>{{ t('images') }}</h2>
      <ContentGallery :data="data.images" withBorder />
    </div>

    <div class="product-section" id="options" v-if="product?.options?.length">
      <h2>{{ t('options') }}</h2>
      <ProductOptions :product-id="product.id" type="option" :options="product.options" />
    </div>

    <div class="product-section" id="components" v-if="product?.components?.length">
      <h2>{{ t('components') }}</h2>
      <ProductOptions :product-id="product.id" type="component" :options="product.components" />
    </div>
  </article>
</template>

<style>
:root {
  --nav-height: 48px;
  --nav-margin: 34px;
}

.product {
  line-height: 32px;
  margin-bottom: 40px;
}

.product h2 {
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: var(--text-color);
  font-size: 36px;
  margin: 24px 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
}

.product h2 a {
  color: var(--text-color);
}
.product h2::before,
.product h2::after {
  background: var(--border-color);
  width: 100%;
  content: '';
  height: 1px;
  display: inline-block;
  margin: 0 12px;

  @media (max-width: 768px) {
    display: none;
  }
}

.product-promo {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-height: 600px;
  height: 100%;
  align-items: center;
  width: 100%;
  margin-bottom: var(--nav-margin);
  padding: 34px 20px;
  font-size: 22px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
    font-size: 18px;
    line-height: 24px;
  }
}

.product-subTitle {
  font-weight: bold;
  letter-spacing: -1px;
  margin-bottom: 8px;
  max-width: 448px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.product-title {
  font-size: 70px;
  margin: 0 0 22px;
  line-height: 80px;
  font-weight: 800;
  letter-spacing: -2px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 40px;
  }
}

.product-coverWrapper {
  height: inherit;
}

.product-cover {
  width: 100%;
  height: inherit;
  object-fit: contain;
  max-height: 560px;

  @media (max-width: 768px) {
    max-height: 400px;
  }
}

.product-navigation {
  position: sticky;
  background: #fff;
  border-bottom: 4px solid #000;
  margin-bottom: 48px;
  z-index: 100;
  padding: 8px 0;
  top: 0;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    margin-bottom: 12px;
  }
}

.product-navigationItem {
  cursor: pointer;
  width: auto !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  margin-right: 24px;
}

.product-navigationItem a {
  color: var(--text-color);
}

.product-navigation a {
  color: var(--text-color);
}

.product-externalLink {
  position: absolute;
  top: 7px;
  margin-left: 2px;
  width: 14px;
}

.product-externalLink path {
  fill: none;
}

.product-section {
  font-size: 21px;
  scroll-margin-top: calc(var(--app-bar-height) + var(--nav-height));
}

.product-section img {
  width: 100%
}

.product-discontinued {
  color: var(--danger-color);
}

.product-discontinued a {
  color: var(--danger-color);
}

.product-description {
  font-size: 21px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
}

.product-description p:first-of-type {
  margin-top: 0;
}

.product-descriptionWrapper {
  display: flex;
  gap: 30px;


  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
}

.product-orderInfo {
  min-width: 450px;

  @media (max-width: 768px) {
    min-width: auto;
  }
}

.product-price {
  color: var(--primary-color);
  font-size: 100px;
  line-height: 100px;
  font-weight: bold;
  white-space: nowrap;
  margin: 0 0 31px;

  @media (max-width: 768px) {
    font-size: 56px;
    margin: 0;
  }
}

.product-priceUnit {
  font-size: 36px;
  line-height: 50px;
  display: inline-block;
  vertical-align: top;
  margin: 8px 0 -10px;
}

.product-note {
  letter-spacing: -.36px;
  margin: 0 0 6px;
}

.product-availability {
  font-weight: bold;
  font-size: 15px;
  user-select: none;
  cursor: pointer;
}

.product-orderButton {
  color: var(--primary-color);
  font-family: 'Plumb', sans-serif;
  border: 2px solid var(--primary-color);
  background: #fff;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  display: block;
  width: 100%;
  padding: 24px 16px;
  transition: all .3s ease;
  margin-top: 36px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }
}

.product-orderButton:hover {
  color: #fff;
  background: var(--primary-color);
}

.product-otherVideos {
  font-size: 16px;
  margin-top: 36px;
}
</style>

<i18n>
{
  "ru": {
    "days": "дня",
    "weeks": "недели",
    "months": "месяца",
    "description": "Обзор",
    "images": "Фотографии",
    "options": "Опции",
    "components": "Комплектация",
    "video": "Видео",
    "useCases": "Примеры использования",
    "documentation": "Документация",
    "discontinued": "Товар не продаётся, чтобы заказать",
    "contactUs": "свяжитесь с нами",
    "addToBasket": "Добавить в заказ",
    "chooseOptions": "Посмотреть опции",
    "retailPrice": "Розничная цена",
    "from": "от",
    "to": "до",
    "dependsOnOptions": "в зависимости от опций",
    "inStock": "На складе",
    "pcs": "шт.",
    "more": "ещё",
    "scheduled": "ожидается через 2—3",
    "otherVideos": "Все ролики про оборудование можно",
    "videosLink": "посмотреть здесь"
  },
  "en": {
    "days": "days",
    "weeks": "weeks",
    "months": "months",
    "description": "Overview",
    "images": "Photos",
    "options": "Options",
    "components": "Configuration",
    "video": "Video",
    "useCases": "Use cases",
    "documentation": "Documentation",
    "discontinued": "Product is no longer available to order",
    "contactUs": "contact us",
    "addToBasket": "Add to Basket",
    "chooseOptions": "View options",
    "retailPrice": "Retail price",
    "from": "from",
    "to": "to",
    "dependsOnOptions": "depending on options",
    "inStock": "In stock",
    "pcs": "pcs",
    "more": "more",
    "scheduled": "on order in",
    "otherVideos": "Other hardware videos",
    "videosLink": "here"
  }
}
</i18n>
