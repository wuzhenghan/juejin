<template>
  <aside class="home-aside">
    <CommonSideCard :img="'./images/banner1.png'" class="sidebar-lock banner-lock" />
    <CommonSideCard :img="'./images/banner2.png'" class="sidebar-lock banner-lock" />
    <CommonSideCard :img="'./images/banner3.png'" class="sidebar-lock banner-lock" />
    <div class="sidebar-lock user-lock">
      <AuthorList />
    </div>
  </aside>
</template>

<script setup>
import AuthorList from './components/author-list.vue';
</script>

<style lang="less" scoped>
@import '@/assets/css/variables.less';
.home-aside {
  position: absolute;
  right: 0;
  top: 0;
  width: 240px;
  height: 100%;
  .sidebar-lock {
    width: 100%;
    background-color: var(--juejin-view);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    border-radius: 2px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.29;
    color: #333;
  }
}
</style>
