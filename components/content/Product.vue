<script setup lang="ts">
import LinkIcon from '~/assets/icons/external-link.svg';
import type { Product } from '~/common/types';
import ContentGallery from '~/components/content/Gallery.vue';
import VideoPlayer from '~/components/content/VideoPlayer.vue';
import ProductOptions from '~/components/content/ProductOptions.vue';
import { scrollToElementById } from '~/utils/scrollToElementById';
import {useApi} from "~/composables/useApi";

const route = useRoute();
const { t, locale } = useI18n();
const { data } = await useLocalizedData(`_catalog`, true, { _file: { $icontains: route.params.slug } });
const imageFolder = `/img/${data.value._stem.slice(4)}`;

const headers = useRequestHeaders(['cookie']);

let requestUrl = `/product/${data.value.article}/?locale=${locale.value}`;
if (headers.user_id) {
  requestUrl += `&user_id=${headers.user_id}`;
}
const product = await useApi<Product>(requestUrl, {
  headers: {
    'Authorization': `Basic ${btoa('ninedev:r3Bhs1Jio2Fe')}`
  },
}).then(({ data }) => JSON.parse(data.value));
</script>

<template>
  <article class="product">
    <div class="product-promo">
      <div>
        <div class="product-subTitle">{{ data.title }}</div>
        <h1 class="product-title">{{ data.name }}</h1>
        <div>{{ data.sub_title }}</div>
      </div>

      <div class="product-coverWrapper">
        <NuxtImg :src="`${imageFolder}/${data.cover}`" class="product-cover" :alt="data.title" />
      </div>
    </div>

    <nav class="product-navigation">
      <ul>
        <li class="product-navigationItem" @click="scrollToElementById('description')">Обзор</li>
        <li class="product-navigationItem" @click="scrollToElementById('gallery')" v-if="data?.images?.length">Фотографии</li>
        <li class="product-navigationItem" @click="scrollToElementById('options')" v-if="product.options?.length">Опции</li>
        <li class="product-navigationItem" @click="scrollToElementById('components')" v-if="product.components?.length">Комплектация</li>
        <li class="product-navigationItem" @click="scrollToElementById('video')" v-if="data?.video?.length">Видео</li>
        <li class="product-navigationItem" v-if="data.documentation">
          <a :href="data.documentation" target="_blank">
            Документация
            <LinkIcon class="product-externalLink" />
          </a>
        </li>
      </ul>
    </nav>

    <div class="product-descriptionWrapper">
      <template v-if="$slots.description">
        <div class="product-description product-section" id="description">
          <p v-if="product.discontinued" class="product-discontinued">
            Товар не продаётся, чтобы заказать — <a href="https://wirenboard.com/ru/pages/contacts/">свяжитесь с нами</a>.
          </p>
          <ContentSlot :use="$slots.description" />
        </div>
      </template>

      <aside class="product-orderInfo"  v-if="!product.discontinued">
        <div class="product-price" v-if="product.price">{{ toTriads(product.price) }} <sup class="product-priceUnit">₽</sup></div>
        <div class="product-note">Розничная цена <span v-if="product.price_max">от {{ toTriads(product.price) }} до {{ toTriads(product.price_max) }} ₽ в зависимости от опций</span></div>
          <div class="product-availability">
            На складе {{ toTriads(product.items.available) }} шт.<span v-if="product.items.inv_final_assembly">, ещё {{ toTriads(product.items.inv_final_assembly) }} шт. ожидается через 2—3 {{ t(product.items.schedule_unit) }}</span></div>
        <button class="add-to-basket product-orderButton" type="button">Добавить в заказ</button>
      </aside>
    </div>

    <div class="product-section">
      <ContentSlot :use="$slots.info" unwrap="p" />
    </div>

    <div class="product-section" id="gallery" v-if="data?.images?.length">
      <h2>Фотографии</h2>
      <ContentGallery :data="data?.images.map((image: string) => [`/${imageFolder}/${image}`])" />
    </div>

    <div class="product-section" id="options" v-if="product?.options?.length">
      <h2>Опции</h2>
      <ProductOptions :product-id="product.id" type="option" :options="product.options" />
    </div>

    <div class="product-section" id="components" v-if="product?.options?.length">
      <h2>Комплектации</h2>
      <ProductOptions :product-id="product.id" type="component" :options="product.components" />
    </div>

    <div class="product-section" id="video" v-if="data?.video?.length">
      <h2>Видео</h2>
      <VideoPlayer v-for="(url, key) in data?.video" :url="url" :key="key" />
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
}

.product h2 {
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 36px;
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
}

.product-promo {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  height: calc(100dvh - var(--nav-height) - var(--app-bar-height) - var(--nav-margin));
  align-items: center;
  width: 100%;
  margin-bottom: var(--nav-margin);
  padding: 34px 20px;
  font-size: 22px;
}

.product-subTitle {
  font-weight: bold;
  letter-spacing: -1px;
  margin-bottom: 8px;
  max-width: 448px;
}

.product-title {
  font-size: 70px;
  margin: 0 0 22px;
  line-height: 80px;
  font-weight: 800;
  letter-spacing: -2px;
  color: #000;
}

.product-coverWrapper {
  height: inherit;
}

.product-cover {
  width: 100%;
  height: inherit;
  object-fit: contain;
  max-height: 560px;
}

.product-navigation {
  position: sticky;
  padding: 8px 0;
  top: 0;
  background: #fff;
  border-bottom: 4px solid #000;
  margin-bottom: 48px;
  z-index: 1000;
}

.product-navigationItem {
  cursor: pointer;
}

.product-navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  gap: 24px;
  padding: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
}

.product-navigation a {
  color: var(--text-color);
}

.product-externalLink {
  position: absolute;
  top: 10px;
  margin-left: 2px;
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
}

.product-price {
  color: var(--primary-color);
  font-size: 100px;
  line-height: 100px;
  font-weight: bold;
  white-space: nowrap;
  margin: 0 0 31px;
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
}

.product-orderButton:hover {
  color: #fff;
  background: var(--primary-color);
}
</style>

<i18n>
{
  "ru": {
    "days": "дня"
  },
  "en": {
    "days": "days"
  }
}
</i18n>
