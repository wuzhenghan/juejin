<template>
  <div class="author-list">
    <header>🎖️作者榜</header>
    <div class="user-list">
      <a-row v-cHover.default type="flex" class="item">
        <a-col flex="45px">
          <img :src="user" alt="" />
        </a-col>
        <a-col flex="auto">
          <div class="author-info">
            <p class="title">程序员老鱼</p>
            <p class="description">前端工程师，自媒体人</p>
          </div>
        </a-col>
      </a-row>
      <a-row v-cHover.default type="flex" class="item">
        <a-col flex="45px">
          <img :src="user" alt="" />
        </a-col>
        <a-col flex="auto">
          <div class="author-info">
            <p class="title">程序员老鱼</p>
            <p class="description">前端工程师，自媒体人</p>
          </div>
        </a-col>
      </a-row>
      <a-row v-cHover.default type="flex" class="item">
        <a-col flex="45px">
          <img :src="user" alt="" />
        </a-col>
        <a-col flex="auto">
          <div class="author-info">
            <p class="title">程序员老鱼</p>
            <p class="description">前端工程师，自媒体人</p>
          </div>
        </a-col>
      </a-row>
    </div>
    <footer>
      <nuxt-link>
        <span>完整表单</span>
        <i-right theme="outline" size="18" fill="#007fff" />
      </nuxt-link>
    </footer>
  </div>
</template>

<script setup>
const user = '/images/users1.png';
</script>

<style lang="less" scoped>
@import '@/assets/css/variables.less';
.author-list {
  header {
    padding: 12px 16px;
    border-bottom: @item-border-bottom;
  }
  .user-list {
    border-bottom: @item-border-bottom;
    .ant-row {
      padding: 12px 16px;
    }
    .ant-col:first-child {
      margin-right: 8px;
      > img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
    }

    .author-info {
      display: inline-flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      height: 100%;
      > p {
        margin: 0;
        &.description {
          color: var(--juejin-font-3);
        }
      }
    }
  }
  footer {
    padding: 12px 16px;
    text-align: center;
    .i-icon-right {
      vertical-align: top;
    }
  }
}
</style>
