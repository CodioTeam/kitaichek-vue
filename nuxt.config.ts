// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // ssr: true,
  css: ['@/assets/styles/_global.scss'],
  app: {
    baseURL: '/kitaichekVue/',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_mixins.scss" as *;',
        },
      },
    },
  },
})
