export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  srcDir: '/src',
  alias: {
    '@': '/<rootDir>',
    assets: '/<rootDir>/assets',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['assets/styles/reset.scss'],
});
