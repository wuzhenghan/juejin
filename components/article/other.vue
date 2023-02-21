<template>
  <aside class="home-other">
    <ArticleComponentsWritermessage></ArticleComponentsWritermessage>
    <ArticleComponentsRelatedarticles></ArticleComponentsRelatedarticles>
    <ArticleComponentsNavigation></ArticleComponentsNavigation>
  </aside>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '@/assets/css/variables.less';
.home-other {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  // background-color: var(--juejin-view);
}
</style>
