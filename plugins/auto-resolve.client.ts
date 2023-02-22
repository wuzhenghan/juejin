import antd from 'ant-design-vue';
import { install } from '@icon-park/vue-next/es/all';
export default defineNuxtPlugin(nuxtApp => {
  // 导入 andt 组件库
  nuxtApp.vueApp.use(antd);
  // 全局引入 icon-park 字体图标库，以"i-"开头的图标命名
  install(nuxtApp.vueApp, 'i');
});
