<template>
  <div class="entry-list-wrap">
    <commonArticleCard v-for="i in 30" :key="i"></commonArticleCard>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.entry-list-wrap {
  width: 100%;
}
</style>
