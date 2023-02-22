// 自定义指令
export default defineNuxtPlugin(nuxtApp => {
  defineDirective(nuxtApp.vueApp);
});

const defineDirective = app => {
  // 定义盒子被hover，背景颜色改变指令
  app.directive('cHover', {
    created(_, bindings) {
      // 固定的默认值
      bindings.defaultColor = '#fafafa';
    },
    mounted(el, bindings) {
      bindings.lastDefaultColor = el.style.backgroundColor;
      if (bindings.modifiers.default) {
        el.addEventListener('mouseover', () => {
          el.style.backgroundColor = bindings.defaultColor;
        });
      } else {
        el.addEventListener('mouseover', () => {
          el.style.backgroundColor = bindings.value;
        });
      }
      el.addEventListener('mouseout', () => {
        el.style.backgroundColor = bindings.lastDefaultColor;
      });
    },
  });
};
