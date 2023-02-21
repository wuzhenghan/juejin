<template>
  <div class="home">
    <!-- 顶部导航栏（公用组件） -->
    <!-- 头部组件 -->
    <CommonAppHeader></CommonAppHeader>
    <div class="container2">
      <!-- 文章（流水布局）组件 -->
      <ArticleMain></ArticleMain>
      <!-- 其他组件：广告位和作者榜组件等 -->
      <ArticleOther></ArticleOther>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.home {
  .container2 {
    margin-top: 25px;
    min-height: 1000px;
    width: 1140px;
  }
}
</style>
