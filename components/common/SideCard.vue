<template>
  <div v-if="show" class="side-card">
    <div class="side">
      <nuxt-link to="/">
        <img :src="props.img" alt="" />
      </nuxt-link>
    </div>
    <div class="ctrl-box">
      <i-close theme="outline" size="14" fill="#8a919f" @click="close()" />
      <nuxt-link to="/">
        <span class="inco">投放</span>
        <span>广告</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
    default: '',
  },
});

const show = ref(true);
const close = () => (show.value = false);
</script>

<style lang="less" scoped>
.side-card {
  position: relative;
  width: 100%;
  height: 200px;
  .side {
    display: inline-block;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ctrl-box {
    width: 100px;
    height: 0;
    .i-icon-close {
      display: none;
      position: absolute;
      width: 16px;
      height: 16px;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
    > a {
      position: absolute;
      right: 10px;
      bottom: 10px;
      line-height: 36px;
      height: 36px;
      font-size: 20px;
      z-index: 1;
      transform: scale(0.5);
      -webkit-transform: scale(0.5);
      transform-origin: right bottom;
      -webkit-transform-origin: right bottom;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
      border: 1px solid #fff;
      border-radius: 6px;
      padding-left: 15px;
      padding-right: 15px;
      font-weight: 300;
      .inco {
        display: none;
      }
      &:hover {
        .inco {
          display: inline-block;
          vertical-align: top;
        }
      }
    }
  }
  &:hover {
    .i-icon-close {
      display: block;
    }
  }
}
</style>
