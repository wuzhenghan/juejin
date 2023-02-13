<template>
  <div class="article-card">
    <header>
      <span class="user">程序员界的小学生</span>
      <span class="update-time">1天前</span>
      <label class="field">前端</label>
      <label class="field">Flutter</label>
    </header>
    <div class="content">
      <nuxt-link class="title" :to="url" target="_blank">Flutter Layout之创建自适应应用程序</nuxt-link>
      <nuxt-link class="description" :to="url" target="_blank">
        概述 Flutter提供了从单一代码库构建可移动设备、桌面和Web上运行的应用程序的新机...
      </nuxt-link>
    </div>
    <a-button type="text" class="extra">
      <template #icon>
        <i-close theme="outline" size="12" fill="#8a919f" />
      </template>
    </a-button>
  </div>
</template>

<script setup lang="ts">
const url = 'https://baidu.com';
</script>

<style lang="less" scoped>
@import '@/assets/css/variables.less';
@circle-dot: #4e5969;

.article-card {
  width: 100%;
  padding: 12px 20px 0 12px;
  position: relative;

  &:hover {
    background-color: #fafafa;

    .extra {
      display: block;
    }
  }

  header {
    font-size: 14px;
    height: 20px;

    > span {
      font-size: 14px;
      padding: 0 7px;
      border-right: 1px solid @head-border-color;

      &:first-child {
        padding-left: 0;
      }
    }

    > label {
      font-size: 14px;
      padding: 0 7px;
      position: relative;

      &::after {
        position: absolute;
        top: 50%;
        right: -1px;
        transform: translateY(-50%);
        display: block;
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background-color: @circle-dot;
      }

      &:last-child {
        &::after {
          content: '';
          width: 0;
        }
      }
    }
  }

  .content {
    margin-top: 6px;
    padding-bottom: 12px;
    border-bottom: @item-border-bottom;

    > a {
      display: block;
    }

    .title {
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
      color: var(--juejin-font-1);
      margin-bottom: 8px;
    }

    .description {
      font-size: 13px;
      line-height: 22px;
      color: var(--juejin-font-3);
    }
  }

  .extra {
    display: none;
    position: absolute;
    top: 12px;
    right: 20px;
    transform: translate(25%, -25%);
    font-size: 12px;
  }
}
</style>
