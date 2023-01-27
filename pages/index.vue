<template>
  <header>
    <h1>Welcome to the homepage</h1>
    <button @click="send">send</button>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <h2>use a-select-option</h2>
    <a-space>
      <a-select ref="select" v-model:value="value1" style="width: 120px" @focus="focus" @change="handleChange">
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="disabled" disabled>Disabled</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
      <a-select v-model:value="value2" style="width: 120px" disabled>
        <a-select-option value="lucy">Lucy</a-select-option>
      </a-select>
      <a-select v-model:value="value3" style="width: 120px" loading>
        <a-select-option value="lucy">Lucy</a-select-option>
      </a-select>
    </a-space>
    <h2 style="margin-top: 10px">use options (recommend)</h2>
    <a-space>
      <a-select
        ref="select"
        v-model:value="value1"
        style="width: 120px"
        :options="options1"
        @focus="focus"
        @change="handleChange"
      ></a-select>
      <a-select v-model:value="value2" style="width: 120px" disabled :options="options2"></a-select>
      <a-select v-model:value="value3" style="width: 120px" loading :options="options3"></a-select>
    </a-space>
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
