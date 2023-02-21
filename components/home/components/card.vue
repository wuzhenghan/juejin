<template>
  <div class="entry-list-wrap">
    <commonArticleCard v-for="item in articleData" :key="item.postId" :detail="item"></commonArticleCard>
  </div>
</template>

<script setup lang="ts">
const articleInfo = useFetch('/api/hello')?.data;
const articleData = ref(articleInfo.value?.data);
</script>

<style lang="less" scoped>
.entry-list-wrap {
  width: 100%;
}
</style>
