<template>
  <div class="home-article">
    <homeChildcmpsCard :head-width="'300px'"></homeChildcmpsCard>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '@/assets/css/variables.less';
.home-article {
  position: static;
  margin-right: 260px;
  width: 700px;
  min-height: 1000px;
  background-color: var(--juejin-view);
  border-radius: 2px;
}
</style>
