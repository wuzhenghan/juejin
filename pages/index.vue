<template>
  <div>
    <nuxt-layout name="homepage">
      <template #tag>
        <HomeMain />
      </template>
    </nuxt-layout>
  </div>
</template>

<script setup>
// 获取首页推荐文章的数据
const articleInfo = useFetch('/api/article')?.data;
provide('articleInfo', articleInfo);
</script>

<style scoped lang="less"></style>
