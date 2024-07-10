// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  generate: {
    routes: [
      '/',
      '/jobs',
      '/ru/jobs',
      '/en/jobs',
      '/partners/software',
      '/ru/partners/software',
      '/en/partners/software',
      '/partners/integrator',
      '/ru/partners/integrator',
      '/en/partners/integrator',
    ]
  },
  devtools: { enabled: false },
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/globals.css',
    '~/assets/css/fonts.css',
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-svgo',
    '@nuxtjs/i18n',
    '@nuxtjs/leaflet',
    '@primevue/nuxt-module',
  ],
  content: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    strategy: 'prefix_and_default',
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/img/favicon.png',
        }
      ]
    }
  },
  primevue: {
    options: {
      unstyled: true
    }
  }
})
