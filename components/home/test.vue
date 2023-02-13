<script setup lang="ts">
import { useScroll } from '@vueuse/core';

const el = ref<HTMLElement | null>(null);
const { x, y } = useScroll(el);
watch(
  [x.value, y.value],
  newVal => {
    console.log(newVal);
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <div ref="el"></div>
</template>
