<template>
  <div class="home">
    <!-- 顶部导航栏（公用组件） -->
    <CommonAppHeader :class="{ hidden: isHidden }"></CommonAppHeader>
    <!-- 头部组件 -->
    <HomeHeadNav :class="{ hidden: isHidden }"></HomeHeadNav>
    <div class="container">
      <!-- 文章（流水布局）组件 -->
      <slot name="tag"></slot>
      <!-- 其他组件：广告位和作者榜组件等 -->
      <HomeAside></HomeAside>
    </div>
  </div>
</template>

<script setup>
const isHidden = ref(false);
onMounted(() => {
  // 顶部导航栏是否隐藏 可惜不是个纯函数
  scrollHidden(isHidden);
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
