<script setup lang="ts">
  import EmptyIcon from '@/assets/images/joii_empty_data.png'
</script>

<template>
  <div class="empty-container">
    <van-image round :src="EmptyIcon" w="163px" fit="cover" />
  </div>
</template>

<style lang="less" scoped>
  .empty-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
  }
</style>
