<script setup lang="ts">
  import guestAlertBg from '@/assets/images/joii_guest_alert_content_bg.png'
  import GhwuadUdoahjfButton from '@/components/GhwuadUdoahjfButton.vue'
  import { useGuestLimit } from '@/hooks/useGuestLimit'

  const {
    showGuestLimitDialog,
    closeGuestLimit,
    onGuestLogin
  } = useGuestLimit()
</script>

<template>
  <van-overlay
    :show="showGuestLimitDialog"
    :z-index="4000"
    class-name="guest-limit-overlay"
    :lock-scroll="true"
  >
    <div class="guest-limit" @click.stop>
      <div class="guest-limit__bubble">
        <img :src="guestAlertBg" alt="" />
        <p>
          To ensure the normal<br />
          operation of the function,<br />
          please log in to your<br />
          account first.
        </p>
      </div>

      <GhwuadUdoahjfButton
        :width="231"
        :height="64"
        text="Log in"
        @click="onGuestLogin"
      />

      <button
        class="guest-limit__close"
        type="button"
        aria-label="Close"
        @click="closeGuestLimit"
      >
        <van-icon name="cross" />
      </button>
    </div>
  </van-overlay>
</template>

<style lang="less" scoped>
  :global(.guest-limit-overlay) {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4000 !important;
    background: rgba(0, 0, 0, 0.7);
  }

  .guest-limit {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(12px);
  }

  .guest-limit__bubble {
    position: relative;
    width: 263px;
    min-height: 156px;
    margin-bottom: 20px;
    padding: 42px 28px 32px;
    color: #fff;
    text-align: center;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      filter: drop-shadow(0 18px 42px rgba(9, 4, 29, 0.32));
    }

    p {
      position: relative;
      z-index: 1;
      margin: 0;
      font-size: 16px;
      font-weight: 900;
      line-height: 1.14;
      letter-spacing: 0;
    }
  }

  .guest-limit__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    padding: 0;
    margin-top: 66px;
    color: #fff;
    background: rgba(0, 0, 0, 0.2);
    border: 2px solid #fff;
    border-radius: 50%;
  }
</style>
