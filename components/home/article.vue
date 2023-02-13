<template>
  <div class="home-article">
<<<<<<< HEAD
    <homeChildcmpsCard :head-width="'300px'"></homeChildcmpsCard>
  </div>
</template>

<script setup lang="ts"></script>
=======
    <div class="con">
      <conNav :head-width="'300px'"></conNav>
      <conCard></conCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import conNav from './components/nav.vue';
import conCard from './components/card.vue';
</script>
>>>>>>> homepage

<style lang="less" scoped>
@import '@/assets/css/variables.less';
.home-article {
  position: static;
  margin-right: 260px;
  width: 700px;
  min-height: 1000px;
  background-color: var(--juejin-view);
  border-radius: 2px;
<<<<<<< HEAD
=======
  .con {
    width: 100%;
    display: inline-block;
    height: 46px;
  }
>>>>>>> homepage
}
</style>
