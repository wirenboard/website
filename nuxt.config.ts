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
    ignores: ['jpeg', 'jpg', 'JPG', 'png', 'webp', 'avif'],
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
      xs: 320,
      sm: 768,
      md: 1024,
      lg: 1168,
      xl: 1280,
    },
    presets: {
      original: {
        modifiers: {
          quality: 90,
          format: 'webp',
        }
      },
      preview: {
        modifiers: {
          width: 1168,
          quality: 90,
          format: 'webp',
        }
      },
      fullWidthPreview: {
        modifiers: {
          width: 1168,
          quality: 100,
          format: 'webp',
        }
      },
    }
  },
  primevue: {
    options: {
      unstyled: true
    }
  },
  nitro: {
    routeRules: {
      '/.well-known/appspecific/**': {
        headers: { 'cache-control': 'max-age=31536000' },
        redirect: { to: '/', statusCode: 404 }
      }
    }
  }
})
