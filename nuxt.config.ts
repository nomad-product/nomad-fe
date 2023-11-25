export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
});