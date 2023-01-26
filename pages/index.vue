<template>
  <header>
    <h1>Welcome to the homepage</h1>
    <button @click="send">send</button>
  </header>
</template>

<script setup lang="ts">
const send = () => {
  $fetch('/api/hello').then(data => {
    console.log(data);
  });
};
</script>

<style scoped lang="less">
@width: 100%;
@height: @width + 10px;

header {
  width: @width;
  height: @height;
}
</style>
