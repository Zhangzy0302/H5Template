<script setup lang="ts">
  import ChatBack from '@/assets/images/folick_ciwn_ai_chat_bg.png'
  import MasonryIcon from '@/assets/images/folick_ciwn_coin.png'
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
    <van-image :src="ChatBack" fit="cover" class="top-back" />
    <div class="text-center w-full top-34vh absolute">
      <ul pl="68px" pr="68px">
        <li font-600 font-size="30px" color="white">
          {{ winChatBotDesc.title }}
        </li>
        <li ai-text-desc class="content_box">
          {{ winChatBotDesc.content }}
        </li>
        <li flex justify-center class="public-btoom-btn">
          <p
            ai-gradient-btn
            class="bottom-btn public_btn"
            @click="onSubmit"
          >
            <van-image h="34px" w="34px" :src="MasonryIcon" fit="cover" />
            <span font-size="14px" color="#F9FF42FF" font-600 ml-1>
              X{{ winChatBotDesc.points }}
            </span>
            <span font-size="16px" font-700 ml="10px" color="white">
              Chat
            </span>
          </p>
        </li>
      </ul>
    </div>

    <van-overlay :show="show" @click="show = false">
      <div flex h-full justify-center>
        <div class="block" @click.stop>
          <div
            :style="{ background: `url(${chatBgImage})` }"
            class="content"
            style="background-size: cover"
          >
            <span mt-16>Sorry</span>
            <span mt-3 font-size="14px" color="#0E080FFF">
              your current balance is insufficient
            </span>
          </div>
          <div mt-8 flex justify-center>
            <p ai-gradient-btn @click="jumpToRecharge()">Recharge</p>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<style lang="less" scoped>
  .chat-view_box {
    height: 100vh;
    overflow-y: auto;
    .content_box {
      background: var(--ai-chat-view-bg-color);
      padding-bottom: calc(50px + var(--ai-view-padding-bottom));
      text-align: center;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
      margin-top: 14px;
    }
  }

  .top-back {
    width: 100%;
    height: 510px;
  }

  .bottom-btn {
    width: 233px;
    height: 56px;
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
        color: #0e080fff;
        font-size: 20px;
        font-weight: 600;

        &:nth-child(2) {
          color: var(--ai-chat-view-popup-desc-text-color);
          font-size: var(--ai-chat-view-popup-desc-text-size);
          font-weight: var(--ai-chat-view-popup-desc-text-weight);
        }
      }
    }
  }
</style>
