<template>
  <div @click="onClick">
    这里是login，点击跳转
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const onClick = () => {
  router.push({ name: 'search' })
}
</script>

<style lang="less" scoped>
div {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
}
</style>