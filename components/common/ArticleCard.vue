<template>
  <div v-if="data && isShow" v-cHover.default class="article-card">
    <header>
      <span class="user">{{ props.detail.author }}</span>
      <span class="update-time">{{ props.detail.time }}</span>
      <label class="field">{{ props.detail.category }}</label>
    </header>
    <div class="content">
      <nuxt-link class="title ellipsis" :to="url" target="_blank">{{ props.detail.postTitle }}</nuxt-link>
      <nuxt-link class="description ellipsis" :to="url" target="_blank">
        {{ props.detail.postDiscription }}
      </nuxt-link>
    </div>
    <a-button type="text" class="extra" @click="hiddenData()">
      <template #icon>
        <i-close theme="outline" size="12" fill="#8a919f" />
      </template>
    </a-button>
  </div>
</template>

<script setup lang="ts">
// 跳转地址
const url = 'https://baidu.com';
// 渲染数据
const data: any = ref([]);
// 是否展示
const isShow = ref(true);
// 接收数据
interface PostItem {
  postTitle: string;
  postDiscription: string;
  viewNumber: string;
  like: string;
  commentNumber: string;
  author: string;
  time: string;
  category: string;
  postText?: string;
  postId: string;
}
const props = defineProps<{ detail: PostItem }>();
data.value = toRefs(props.detail);
// 隐藏数据
const hiddenData = () => (isShow.value = false);
</script>

<style lang="less" scoped>
@import '@/assets/css/variables.less';
@circle-dot: #4e5969;
.article-card {
  width: 100%;
  padding: 12px 20px 0 12px;
  position: relative;
  &:hover {
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
