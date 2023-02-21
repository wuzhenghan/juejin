<template>
  <div class="writer-container">
    <div class="writer-container-top">
      <img src="/images/微信图片_20210629170353.jpg" alt="" class="writer-container-top-img" />
      <div class="writer-container-top-right">
        <p class="writer-container-top-right-name">青松</p>
        <p class="writer-container-top-right-brief">优质作者</p>
      </div>
    </div>
    <div class="writer-container-middle">
      <button class="writer-container-middle-btn1">关注</button>
      <button class="writer-container-middle-btn2">私信</button>
    </div>
    <!-- 横线部分 -->
    <div class="writer-container-line"></div>
    <div class="writer-container-bottom1">
      <div class="writer-container-bottom1-left"></div>
      <p class="writer-container-bottom1-right">
        获得点赞
        <span class="writer-container-bottom1-right-span">1,854</span>
      </p>
    </div>
    <div class="writer-container-bottom2">
      <div class="writer-container-bottom2-left"></div>
      <p class="writer-container-bottom2-right">
        文章被阅读
        <span class="writer-container-bottom2-right-span">446,567</span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
@import '@/assets/css/variables.less';
p {
  margin-bottom: 0px;
}
.writer-container {
  width: 300px;
  height: 227px;
  margin-bottom: 20px;
  background-color: var(--juejin-view);
  border-radius: 4px;
  padding: 1.667rem;
  box-sizing: border-box;
  .writer-container-top {
    width: 100%;
    height: 67px;
    padding-bottom: 1.416rem;
    .writer-container-top-img {
      float: left;
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    .writer-container-top-right {
      width: 196px;
      height: 50px;
      float: right;
      .writer-container-top-right-name {
        font-weight: 500;
        color: #252933;
        font-size: 16px;
      }
      .writer-container-top-right-brief {
        font-size: 14px;
        margin-top: 4px;
        color: #515767;
        font-weight: 400;
        line-height: 22px;
      }
    }
  }
  .writer-container-middle {
    width: 100%;
    height: 36px;
    margin-bottom: 16px;
    .writer-container-middle-btn1 {
      float: left;
      border-radius: 4px;
      width: 122px;
      font-size: 14px;
      padding: 7px 20px;
      box-sizing: border-box;
      color: #fff;
      border: none;
      background-color: #1d7dfa;
      cursor: pointer;
      &:hover {
        background-color: #388eff;
      }
    }
    .writer-container-middle-btn2 {
      float: right;
      border-radius: 4px;
      width: 122px;
      font-size: 14px;
      padding: 7px 20px;
      box-sizing: border-box;
      color: #1e80ff;
      border: 1px solid rgba(30, 128, 255, 0.3);
      background-color: rgba(30, 128, 255, 0.05);
      cursor: pointer;
      &:hover {
        border: 1px solid rgba(30, 128, 255, 0.45);
        background-color: rgba(30, 128, 255, 0.1);
      }
    }
  }
  .writer-container-line {
    height: 1px;
    background-color: #e4e6eb;
  }
  .writer-container-bottom1 {
    width: 100%;
    height: 26px;
    margin-top: 8px;
    .writer-container-bottom1-left {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      float: left;
      background-color: rgb(225, 239, 255);
    }
    .writer-container-bottom1-right {
      float: left;
      font-size: 14px;
      color: #252933;
      font-weight: 400;
      margin-left: 10px;
      .writer-container-bottom1-right-span {
        font-size: 14px;
        color: #252933;
        font-weight: 400;
      }
    }
  }
  .writer-container-bottom2 {
    width: 100%;
    height: 26px;
    margin-top: 8px;
    .writer-container-bottom2-left {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      float: left;
      background-color: rgb(225, 239, 255);
    }
    .writer-container-bottom2-right {
      float: left;
      font-size: 14px;
      color: #252933;
      font-weight: 400;
      margin-left: 10px;
      .writer-container-bottom2-right-span {
        font-size: 14px;
        color: #252933;
        font-weight: 400;
      }
    }
  }
}
</style>
