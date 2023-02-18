const scrollHidden = (isHidden: any, scrollTop: Number = 300) => {
  const el = ref(document);
  /** 建议看vueuse官方文档
   * 响应式的滚动位置和状态
   * @param directions 滚动方向
   * @param arrivedState 到达状态
   */
  const { directions, arrivedState } = useScroll(el, { behavior: 'smooth' });
  /** 建议看vueuse官方文档
   * 防抖函数
   */
  const checkHeaderStatus = useDebounceFn((top, bottom, topArrived) => {
    if (topArrived) {
      return false;
    }
    if (top) {
      return false;
    } else if (bottom) {
      return true;
    }
  }, 10);
  const scrollY = ref(0);
  window.addEventListener('scroll', () => {
    scrollY.value = el.value.body.scrollTop || el.value.documentElement.scrollTop;
    if (scrollY.value <= scrollTop) {
      isHidden.value = false;
    } else {
      isHidden.value = checkHeaderStatus(directions.top, directions.bottom, arrivedState.top);
    }
  });
};

export default scrollHidden;
