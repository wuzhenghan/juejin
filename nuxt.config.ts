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
  css: ['ant-design-vue/dist/antd.css'],
  plugins: [
    './plugins/auto-resolve.client.ts', // only in client side
    // '~/plugins/bar.server.js', // only in server side
    // '~/plugins/baz.js', // both client & server
    // { src: '~/plugins/both-sides.js' },
    // { src: '~/plugins/client-only.js', mode: 'client' }, // only on client side
    // { src: '~/plugins/server-only.js', mode: 'server' }, // only on server side
  ],
});
