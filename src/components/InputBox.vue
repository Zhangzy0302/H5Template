<script setup lang="ts">
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'

  const { inputSendIcon } = useAppImgStyle()

  const value = ref('')

  const emit = defineEmits<{
    send: [_: string]
  }>()
  const onSend = () => {
    emit('send', value.value)
    value.value = ''
  }
</script>

<template>
  <div safe-area-inset-bottom px-layout-padding class="input-box">
    <div class="input-row" flex items-center>
      <!-- 输入框占满剩余空间 -->
      <van-field
        v-model="value"
        placeholder="Say something"
        :border="false"
        class="flex-1"
        input-align="left"
      />

      <!-- 发送按钮 -->
      <van-image
        :src="inputSendIcon"
        :style="{
          width: 'var(--comment-input-image-width)',
          height: 'var(--comment-input-image-height)',
          marginLeft: '8px' // 按钮与输入框的间距
        }"
        @click="onSend"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .input-row {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px; /* 可选，控制输入框与按钮的间距 */
    margin-bottom: 10px;
  }
  .flex-1 {
    flex: 1;
  }
  .input-box {
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;

    opacity: 1;
    background: linear-gradient(
      0deg,
      rgba(14, 8, 15, 0.8) 0%,
      rgba(14, 8, 15, 0) 100%
    );

    .input--width {
      width: var(--ai-field-input-width);
      padding-bottom: calc(10px + var(--ai-view-padding-bottom));
    }

    .van-field {
      border-radius: var(--ai-field-input-border-radius);
      height: var(--ai-field-input-height);
      font-size: var(--ai-field-input-font-size);
      font-weight: var(--ai-field-input-font-weight);
      background: var(--ai-field-input-bg-color);

      :deep(.van-field__body) {
        height: 100%;

        input {
          color: var(--ai-field-input-text-color);

          &::placeholder {
            color: var(--ai-field-placeholder-text-color);
            font-size: var(--ai-field-input-font-size);
            font-weight: var(--ai-field-input-font-weight);
          }
        }
      }
    }
  }
</style>
