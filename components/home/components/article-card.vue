<template>
  <div class="entry-list-wrap">
    <commonArticleCard v-for="article in data" :key="article.postId" :detail="article"></commonArticleCard>
  </div>
</template>

<script setup>
// 接收文章数据
const { data } = inject('articleInfo');
</script>

<style lang="less" scoped>
.entry-list-wrap {
  width: 100%;
}
</style>
