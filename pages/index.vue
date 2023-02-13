<template>
  <div class="home">
    <!-- 顶部导航栏（公用组件） -->
    <CommonAppHeader :class="{ hidden: isHidden }"></CommonAppHeader>
    <!-- 头部组件 -->
    <HomeNav :class="{ hidden: isHidden }"></HomeNav>
    <div class="container">
      <!-- 文章（流水布局）组件 -->
      <HomeArticle></HomeArticle>
      <!-- 其他组件：广告位和作者榜组件等 -->
      <HomeOther></HomeOther>
    </div>
  </div>
</template>

<script setup lang="ts">
const isHidden = ref(false);
const scrollPosY = ref(0);
onMounted(() => {
  // 正常情况下，nuxt拿不到document, 只能在组件挂载后或者process.browser中获取
  const el = ref(document);
  /** 建议看官方文档
   * directions 滚动方向
   * arrivedState 到达状态
   */
  const { directions, arrivedState } = useScroll(el, { behavior: 'smooth' });

  const checkHeaderStatus = useDebounceFn((top: Boolean, bottom: Boolean, topArrived: Boolean) => {
    if (topArrived) {
      isHidden.value = false;
      return;
    }
    if (top) {
      isHidden.value = false;
    } else if (bottom) {
      isHidden.value = true;
    }
  }, 10);
  window.onscroll = () => {
    scrollPosY.value = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollPosY.value <= 300) {
      isHidden.value = false;
    } else {
      checkHeaderStatus(directions.top, directions.bottom, arrivedState.top);
    }
  };
});
</script>

<style scoped lang="less">
.home {
  .container {
    margin-top: 25px;
    min-height: 1000px;
  }
}
</style>
