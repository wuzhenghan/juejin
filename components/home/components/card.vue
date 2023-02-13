<template>
  <div class="entry-list-wrap">
    <commonArticleCard v-for="(item, index) in articleInfo?.data" :key="index" :detail="item"></commonArticleCard>
  </div>
</template>

<script setup lang="ts">
const articleInfo = useFetch('/api/hello')?.data;
</script>

<style lang="less" scoped>
.entry-list-wrap {
  width: 100%;
}
</style>
