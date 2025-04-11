// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  experimental: {
    payloadExtraction: false
  },
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    login: process.env.NUXT_SITE_LOGIN,
    password: process.env.NUXT_SITE_PASSWORD,
  },
  devtools: { enabled: false },
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/globals.css',
    '~/assets/css/fonts.css',
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-content-assets',
    'nuxt-svgo',
    '@nuxtjs/leaflet',
    '@primevue/nuxt-module',
  ],
  extends: [
    'node_modules/nuxt-content-assets/cache',
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
  image: {
    format: ['webp'],
    screens: {
      'xs': 320,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
    },
    presets: {
      preview: {
        modifiers: {
          width: 800,
          quality: 70,
          format: 'webp',
        }
      },
      original: {
        modifiers: {
          width: 1280,
          quality: 90,
          format: 'webp',
        }
      }
    }
  },
  primevue: {
    options: {
      unstyled: true
    }
  },
})
