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
    <div class="entry-list-wrap"></div>
  </div>
</template>

<script setup lang="ts">
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
@head-border-color: hsla(0, 0%, 59.2%, 0.2);
.cmps-card {
  width: 100%;
  display: inline-block;
  height: 46px;
  header.card-header {
    display: inline-block;
    height: 46px;
    font-size: 14px;
    padding: 11px 12px;
  }
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
    .link-active();
  }
}
</style>
