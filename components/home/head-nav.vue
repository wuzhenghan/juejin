<template>
  <div class="home-nav">
    <div class="home-nav-wrapper">
      <div class="container">
        <nav>
          <a-row type="flex" justify="start" :gutter="16">
            <a-col :flex="1"><nuxt-link>综合</nuxt-link></a-col>
            <a-col :flex="1"><nuxt-link to="/following">关注</nuxt-link></a-col>
            <a-col :flex="1"><nuxt-link to="/backend">后端</nuxt-link></a-col>
            <a-col :flex="1"><nuxt-link to="/frontend">前端</nuxt-link></a-col>
            <a-col :flex="1"><nuxt-link to="/android">Android</nuxt-link></a-col>
            <a-col :flex="1"><nuxt-link to="/ios">iOS</nuxt-link></a-col>
            <a-col :flex="1"><nuxt-link to="/ai">人工智能</nuxt-link></a-col>
            <a-col :flex="1"><nuxt-link to="/freebie">开发工具</nuxt-link></a-col>
            <a-col :flex="1"><nuxt-link to="/career">代码人生</nuxt-link></a-col>
            <a-col :flex="1"><nuxt-link to="/reading">阅读</nuxt-link></a-col>
          </a-row>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '@/assets/css/effect.less';
.home-nav {
  height: 45px;
  &.hidden {
    .home-nav-wrapper {
      transform: translateY(-60px);
    }
  }
}
.home-nav-wrapper {
  position: fixed;
  z-index: var(--juejin-zIndex-1);
  width: 100%;
  border-bottom: 1px solid #bbb;
  height: 45px;
  background-color: var(--juejin-view);
  .container {
    height: 100%;
    nav {
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      .ant-row {
        height: 100%;
        .ant-col {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          cursor: pointer;
          a {
            .link-active();
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
}
</style>
