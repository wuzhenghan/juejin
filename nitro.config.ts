// nitro.config.ts
import { defineNitroConfig } from 'nitropack';

export default defineNitroConfig({
  plugins: ['plugins/init-redis-data'],
  compressPublicAssets: { gzip: true },
  minify: true,
  storage: {
    redis: {
      driver: 'redis',
      /* redis connector options */
      password: '123456',
    },
  },
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/**': { ssr: true },
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
});
