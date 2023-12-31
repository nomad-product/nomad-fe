export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  srcDir: 'src',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: [
    'assets/styles/reset.scss',
    'assets/styles/fonts.scss',
    'assets/styles/global.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/styles/variables.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
  modules: ['@nuxtjs/storybook'],
  storybook: {
    url: 'http://localhost:6006',
    port: 6006,
  },
});
