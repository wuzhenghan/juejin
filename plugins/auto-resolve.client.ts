import antd from 'ant-design-vue';
import { install } from '@icon-park/vue-next/es/all';
export default defineNuxtPlugin(nuxtApp => {
  console.table(nuxtApp);
  nuxtApp.vueApp.use(antd);
  install(nuxtApp.vueApp, 'i');
});
