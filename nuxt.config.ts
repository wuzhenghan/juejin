// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //   alias: "",
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],
      link: [],
      style: [],
      script: [],
      noscript: [],
    },
  },
  webpack: {},
});
