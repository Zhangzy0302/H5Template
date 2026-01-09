<script setup lang="ts">
  defineOptions({
    name: 'Follow'
  })
</script>

<template>
  <div safe-area-inset-top class="follow_box">
    <my-list />
  </div>
</template>

<style lang="less" scoped>
  .follow_box {
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    min-height: 100vh;
    background: url('@/assets/images/folick_ciwn_main_bg.png') center /
      cover no-repeat;
  }
</style>
