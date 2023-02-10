<template>
  <div class="cmps-card">
    <header class="card-header" :style="cardHead">
      <a-row class="card-items" type="flex" justify="start">
        <a-col>
          <nuxt-link>推荐</nuxt-link>
        </a-col>
        <a-col>
          <nuxt-link>最新</nuxt-link>
        </a-col>
        <a-col>
          <nuxt-link>热门</nuxt-link>
        </a-col>
      </a-row>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const headWidth = ref('100%');
const cardHead = reactive({
  width: headWidth,
});
defineProps({
  headWidth: String,
});
</script>

<style lang="less" scoped>
@import '@/assets/css/effect.less';

header.card-header {
  display: inline-block;
  height: 46px;
  font-size: 14px;
  padding: 11px 12px;
  border-bottom: @item-border-bottom;
}
.ant-row.card-items {
  .ant-col {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 14px;
    border-left: 1px solid @head-border-color;
    &:first-child {
      border-left-color: transparent;
    }
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
</style>
