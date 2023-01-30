<template>
  <header class="app-header">
    <div class="logo">
      <nuxt-link to="/">
        <img src="/images/juejin.png" alt="" />
      </nuxt-link>
    </div>
    <nav class="header-nav">
      <a-row type="flex" justify="start" align="middle" :gutter="24">
        <a-col :flex="1"><nuxt-link>首页</nuxt-link></a-col>
        <a-col :flex="1"><nuxt-link>沸点</nuxt-link></a-col>
        <a-col :flex="1"><nuxt-link>课程</nuxt-link></a-col>
        <a-col :flex="1"><nuxt-link>直播</nuxt-link></a-col>
        <a-col :flex="1"><nuxt-link>活动</nuxt-link></a-col>
        <a-col :flex="1"><nuxt-link>竞赛</nuxt-link></a-col>
        <a-col :flex="1"><nuxt-link>商城</nuxt-link></a-col>
        <a-col :flex="1"><nuxt-link>APP</nuxt-link></a-col>
        <a-col :flex="1"><nuxt-link>插件</nuxt-link></a-col>
      </a-row>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '@/assets/css/effect.less';
.app-header {
  display: fixed;
  border-bottom: 1px solid #bbb;
  height: 60px;
  background-color: var(--juejin-navigation);

  .logo {
    display: inline-block;
    height: 100%;
    margin: 0 12px 0 24px;
    img {
      height: 60px;
    }
  }
  nav.header-nav {
    display: inline-block;
    height: 100%;
    vertical-align: top;
    .ant-row {
      height: 100%;
      .ant-col {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        cursor: pointer;
        border-bottom: 1px solid transparent;
        .label-active();
        a {
          color: var(--juejin-font-2);
        }
        &:first-child {
          a {
            color: var(--juejin-brand-1-normal);
          }
        }
      }
    }
  }
}
</style>
