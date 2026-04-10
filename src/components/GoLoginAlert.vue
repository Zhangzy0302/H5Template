<script setup lang="ts">
// import { ref } from 'vue'
import type { AppCommunication } from '@/hooks/useJump'
import { useJump } from '@/hooks/useJump'

  const { appParams } = useJump()

  const onState = (key: AppCommunication) => {
    appParams({ key, state: 2 })
  }

/** 控制显示 */
const visible = ref(false)

/** 打开弹窗 */
const show = () => {
  visible.value = true
}

/** 关闭弹窗 */
const handleClose = () => {
  visible.value = false
}

/** 🚨 必须暴露给外部调用 */
defineExpose({
  show
})
</script>

<template>
  <div v-if="visible" class="mask" @click.self="handleClose">
    <div class="container">
<div class="content-content">
        To ensure the normal operation of the function, please log in to your account first.
      </div>
      <div class="alert-btn">
        <div class="connect-cancel-btn" @click="handleClose">
          Cancel
        </div>
        <div class="connect-btn" @click="onState('logout')">
          Log in
        </div>
      </div>
</div>
  </div>
</template>

<style lang="less" scoped>
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 305px;
    height: 206px;
    opacity: 1;
    border-radius: 48px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(90deg, rgba(255, 3, 108, 1) 0%, rgba(255, 141, 26, 1) 39.45%, rgba(19, 110, 79, 1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 0 30px;
  }

  .connect-title {
    font-size: 20px;
    font-weight: 600;
    color: rgba(14, 8, 15, 1);
    text-align: center;
  }

  .content-content {
    padding: 13px 0 25px 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.5;
    text-align: center;
    color: rgba(14, 8, 15, 1);
    opacity: 0.6;
  }

  .alert-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 25px;
  }

  .connect-cancel-btn {
    width: 100%;
    height: 50px;
    opacity: 1;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.15);

    border: 1px solid rgba(255, 255, 255, 0.4);
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px 10px 10px;
    color: rgba(112, 112, 112, 1);
    font-size: 16px;
    font-weight: 700;
  }

  .connect-btn {
    width: 100%;
    height: 50px;
    opacity: 1;
    border-radius: 30px;
    background: radial-gradient(59.59% 100% at 50.204081632653065% 100%, rgba(185, 1, 30, 1) 0%, rgba(185, 1, 30, 0) 100%), rgba(34, 4, 112, 1);
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px 10px 10px;
    color: white;
    font-size: 16px;
    font-weight: 700;
  }
</style>
