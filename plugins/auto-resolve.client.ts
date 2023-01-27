import antd from 'ant-design-vue';
export default defineNuxtPlugin(nuxtApp => {
  console.table(nuxtApp);
  nuxtApp.vueApp.use(antd);
});
