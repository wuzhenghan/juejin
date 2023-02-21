<template>
    <div class="home-article">
      <h1 class="home-article-title">
        top-level await
      </h1>
      <div class="home-article-writer">
        <img src="/images/微信图片_20210629170353.jpg" alt="" class="home-article-writer-img">
        <div class="home-article-writer-message">
          <p class="home-article-writer-message-name">屿洲</p>
          <div class="home-article-writer-message-time">
            <span class="home-article-writer-message-time1">2021年04月11日 14:10</span>
            <span> · </span>
            <span class="home-article-writer-message-read">阅读 2105</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
      // const res = useFetch('/api/hello');
      // console.log(res);
  </script>
  
  <style lang="less" scoped>
  @import '@/assets/css/variables.less';
  .home-article {
    position: static;
    margin-right: 260px;
    width: 820px;
    min-height: 1000px;
    background-color: var(--juejin-view);
    border-radius: 2px;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box;
    padding: 32px;
    .home-article-title{
      color: #252933;
      font-weight: 700;
      font-size: 32px;
    }
    .home-article-writer{
      width: 100%;
      height: 48px;
      margin-bottom: 20px;
      .home-article-writer-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-top: 4px;
        margin-right: 12px;
        float: left;
      }
      .home-article-writer-message{
        float: left;
        height: 48px;
        .home-article-writer-message-name{
          max-width: 128px;
          vertical-align: top;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #515767;
          font-size: 16px;
          margin: 0px;
        }
        .home-article-writer-message-time{
          font-size: 14px;
          color: #8a919f;
          margin-top: 2px;
          line-height: 22px;
          margin-top: 2px;
          font-size: 15px;
          .home-article-writer-message-time1{
            letter-spacing: 1px;
          }
        }
      }
    }
  }
  </style>