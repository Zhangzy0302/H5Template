<script>
export default {
  props: {
    visible: Boolean
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<template>
  <div v-if="visible" class="mask" @click="handleClose">
    <div class="container" @click.stop>
      <div class="connect-title">Connect to Chat</div>
      <div class="content-content">
        Follow each other to unlock <br />messages.
      </div>
      <div class="connect-btn" @click="handleClose">
        OK
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

  .connect-btn {
    width: 245px;
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
