<template>
  <div class="home">
    <!-- 头部组件 -->
    <HomeNav></HomeNav>
    <div class="container">
      <!-- 文章（流水布局）组件 -->
      <HomeArticle></HomeArticle>
      <!-- 其他组件：广告位和作者榜组件等 -->
      <HomeOther></HomeOther>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.home {
  .container {
    margin-top: 25px;
    min-height: 1000px;
  }
}
</style>
