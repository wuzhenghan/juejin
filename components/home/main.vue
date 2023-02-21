<template>
  <div class="home-article">
    <div class="con">
      <Tag :head-width="'300px'"></Tag>
      <ArticleCard></ArticleCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from './components/tag.vue';
import ArticleCard from './components/article-card.vue';
</script>

<style lang="less" scoped>
@import '@/assets/css/variables.less';
.home-article {
  position: static;
  margin-right: 260px;
  width: 700px;
  min-height: 1000px;
  background-color: var(--juejin-view);
  border-radius: 2px;
  .con {
    width: 100%;
    display: inline-block;
    height: 46px;
  }
}
</style>
