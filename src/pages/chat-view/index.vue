<script setup lang="ts">
  import MasonryIcon from '@/assets/images/joii_wallet_diamond.png'
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  defineOptions({
    name: 'ChatView'
  })

  const { chatBtnIcon, chatBgImage } = useAppImgStyle()
  const { winUserData, winUserListData, winChatBotDesc } = useWindow()
  const { userInfo } = useUserStore()
  const { jumpToRecharge, appParams, jumpToChatDetail } = useJump()

  /** 弹框  */
  const show = ref(false)

  const onSubmit = () => {
    show.value = !(userInfo.coins >= winChatBotDesc.points)
    if (userInfo.coins >= winChatBotDesc.points) {
      const data = {
        ...winUserData,
        coins: userInfo.coins - winChatBotDesc.points
      }

      const list = winUserListData.map(v => {
        if (v.userId === data.userId) {
          v.coins = data.coins
        }
        return v
      })
      appParams({ key: 'updateUser', value: list, state: 1 })
      jumpToChatDetail()
    }
  }
</script>

<template>
  <div relative class="chat-view_box">
    <div class="chat-view_bg"></div>
    <img
      src="@/assets/images/joii_home_ai.png"
      h="284px"
      fit="cover"
      class="mx-auto relative z-10"
      alt=""
    />
    <div class="text-center w-full top-34vh">
      <ul p-layout-padding>
        <li ai-input-title flex flex-row justify-center>
          <div>AI</div>
          <div ml-2 font-400>Piano Coach</div>
        </li>
        <li
          ai-text-desc
          class="mt-7 !text-[var(--ai-chat-view-text-color)] content_box"
        >
          {{ winChatBotDesc.content }}
        </li>
        <li flex justify-center class="public-btoom-btn" pb="20px">
          <GhwuadUdoahjfButton
            :width="227"
            :height="56"
            @click="onSubmit"
          >
            <div flex flex-row class="items-center justify-start">
              <van-image
                h="52px"
                w="81px"
                :src="MasonryIcon"
                fit="contain"
              />
              <span font-size="20px" font-900 ml-1>
                - {{ winChatBotDesc.points }}
              </span>
            </div>
          </GhwuadUdoahjfButton>
        </li>
      </ul>
    </div>
  </div>
  <van-overlay :show="show" @click="show = false" z-11>
    <div flex h-full justify-center>
      <div class="block" @click.stop>
        <div
          :style="{ background: `url(${chatBgImage})` }"
          class="content"
          style="background-size: cover"
        >
          <span mt="44px">Sorry</span>
          <span mt="14px">your current balance is insufficient</span>
        </div>
        <div mt="20px" flex justify-center>
          <GhwuadUdoahjfButton
            @click="jumpToRecharge()"
            :width="231"
            :height="60"
            :is-blue="true"
            text="Recharge"
          />
        </div>
      </div>
    </div>
  </van-overlay>
</template>

<style lang="less" scoped>
  .chat-view_box {
    background: var(--ai-chat-view-bg-color);
    height: 100vh;
    overflow-y: auto;
    .chat-view_bg {
      position: absolute;
      width: 100%;
      height: 246px;
      z-index: 0;
      background: url(@/assets/images/joii_main_bg.png);
      background-position: center;
      background-size: cover;
    }
    .content_box {
      background: var(--ai-chat-view-bg-color);
      padding-bottom: calc(60px + var(--ai-view-padding-bottom));
    }
  }

  .top-back {
    width: 100%;
    height: 510px;
  }

  .bottom-btn {
    width: var(--ai-chat-view-btn-width);
    height: var(--ai-chat-view-btn-height);
    color: var(--ai-chat-view-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .block {
    margin-top: 20vh;
    height: 300px;

    .content {
      width: var(--ai-chat-view-popup-bg-img-width);
      height: var(--ai-chat-view-popup-bg-img-height);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        color: var(--ai-chat-view-popup-title-text-color);
        font-size: var(--ai-chat-view-popup-title-font-size);
        font-weight: var(--ai-chat-view-popup-title-font-weight);

        &:nth-child(2) {
          color: var(--ai-chat-view-popup-desc-text-color);
          font-size: var(--ai-chat-view-popup-desc-text-size);
          font-weight: var(--ai-chat-view-popup-desc-text-weight);
        }
      }
    }
  }
</style>
