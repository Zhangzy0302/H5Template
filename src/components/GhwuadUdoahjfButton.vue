<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    width?: number
    height?: number
    isBlue?: boolean
    text: string
  }

  const props = withDefaults(defineProps<Props>(), {
    width: 182,
    height: 46,
    isBlue: true
  })

  // 计算样式
  const buttonStyles = computed(() => ({
    width: `${props.width}px`,
    height: `${props.height}px`
  }))

  // 渐变色配置
  const blueGradient =
    'linear-gradient(135deg, rgba(29, 0, 217, 1), rgba(151, 93, 227, 1))'
  const redGradient =
    'linear-gradient(135deg, rgba(217, 0, 0, 1), rgba(227, 93, 187, 1))'
  const grayGradient =
    'linear-gradient(135deg, rgba(204, 204, 204, 0), rgba(255, 255, 255, 1))'
</script>

<template>
  <div class="stack-container">
    <!-- 背景层 -->
    <div
      class="button-layer background-layer"
      :style="[
        buttonStyles,
        {
          background: props.isBlue
            ? 'linear-gradient(135deg, rgba(204, 204, 204, 0), #ffffff)'
            : grayGradient
        }
      ]"
    ></div>

    <!-- 前景层 -->
    <div
      class="button-layer foreground-layer"
      :style="[
        buttonStyles,
        {
          background: props.isBlue ? blueGradient : redGradient,
          border: props.isBlue ? '1px solid white' : '1px solid white'
        }
      ]"
    >
      <div class="center-content">
        <span class="button-text">
          {{ text }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .stack-container {
    position: relative;
    display: inline-block;
    width: 182px;
    height: 46px;
  }

  .button-layer {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
  }

  .background-layer {
    transform: translate(-2px, -2px);
  }

  .foreground-layer {
    transform: translate(2px, 2px);
  }

  .center-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-text {
    font-size: 16px;
    font-weight: 900;
    color: white;
  }
</style>
