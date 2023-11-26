export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  srcDir: 'src',
  typescript: {
    typeCheck: true,
    strict: true,
  },
  alias: {
    '@': '/src',
    assets: '/src/assets',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['assets/styles/reset.scss'],
});
