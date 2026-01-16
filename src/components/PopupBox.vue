<script setup lang="ts">
  console.log('输入框')

  const show = defineModel<boolean>('show', {
    type: Boolean,
    required: true,
    default: false
  })
</script>

<template>
  <van-popup v-model:show="show" safe-area-inset-bottom position="bottom">
    <!-- 背景 -->
    <img
      class="absolute top-0 left-0 w-full h-[204px] -z-1 opacity-40"
      src="@/assets/images/joii_main_bg.png"
      alt=""
    />
    <!-- 拖拽条 -->
    <div class="drag-handle" />
    <slot />
  </van-popup>
</template>

<style lang="less" scoped>
  .popup-wrapper {
    background: white;
    border-radius: 16px 16px 0 0;
    will-change: transform;
  }

  .drag-handle {
    width: 48px;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    margin: 8px auto 12px;
  }
</style>
