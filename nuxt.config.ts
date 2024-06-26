// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/globals.css',
    '~/assets/css/fonts.css',
  ],
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/image'],
  content: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    strategy: 'prefix_and_default',
  },
})
