// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //   alias: "",
  // typescript: {
  //   typeCheck: true,
  // },
  // 开启这个会报错
  // build: {
  //   transpile: [
  //     config => {
  //       console.log(config);
  //       return false;
  //     },
  //   ],
  // },
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
  css: [
    // ant-design-vue
    'ant-design-vue/dist/antd.css',
    // 全局重置less
    '@/assets/css/reset.less',
    '@/assets/css/effect.less',
    // icon-park字体图标库
    '@icon-park/vue-next/styles/index.css',
  ],
  // 自定义导入less文件到vue的style中
  plugins: [
    './plugins/auto-resolve.client.ts', // only in client side
    // '~/plugins/bar.server.js', // only in server side
    // '~/plugins/baz.js', // both client & server
    // { src: '~/plugins/both-sides.js' },
    // { src: '~/plugins/client-only.js', mode: 'client' }, // only on client side
    // { src: '~/plugins/server-only.js', mode: 'server' }, // only on server side
  ],
  // 自动导入vueuse到Nuxt3
  modules: ['@vueuse/nuxt'],
  nitro: {
    routeRules: {
      // Static page generated on-demand, revalidates in background
      // '/index/**': { ssr: true },
      // Static page generated on-demand once
      // '/articles/**': { static: true },
      // // Set custom headers matching paths
      // '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },
      // // Render these routes with SPA
      // '/admin/**': { ssr: false },
      // // Add cors headers
      // '/api/v1/**': { cors: true },
      // // Add redirect headers
      // '/old-page': { redirect: '/new-page' },
      // '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } },
    },
  },
  // 这个是nitro的配置
});
