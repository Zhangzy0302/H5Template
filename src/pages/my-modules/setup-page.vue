<script setup lang="ts">
  import type { AppCommunication } from '@/hooks/useJump'
  import RightIcon from '@/assets/images/joii_icon_arrow_right.png'
  import { useJump } from '@/hooks/useJump'
  import GhwuadUdoahjfButton from '@/components/GhwuadUdoahjfButton.vue'

  defineOptions({
    name: 'SetupPage'
  })

  const { appParams, jumpToUserAgreement, jumpToBlackList } = useJump()

  const listData = [
    { label: 'Privacy Agreement', value: '0' },
    { label: 'User Agreement', value: '1' },
    { label: 'Blacklist', value: '2' }
  ]

  const onState = (key: AppCommunication) => {
    appParams({ key, state: 2 })
  }

  const onSelect = (value: string) => {
    if (value === '2') {
      jumpToBlackList()
    }
    if (value === '0') {
      jumpToUserAgreement('/privacy-agreement')
    }
    if (value === '1') {
      jumpToUserAgreement('/user-agreement')
    }
  }
</script>

<template>
  <div
    safe-area-inset-top
    class="setup-page_box flex flex-col min-h-screen"
  >
    <ul p-layout-padding class="list-btn">
      <li
        v-for="item in listData"
        :key="item.value"
        @click="onSelect(item.value)"
      >
        <span>{{ item.label }}</span>
        <van-image h="24px" w="24px" :src="RightIcon" fit="cover" />
      </li>
    </ul>

    <!-- 按钮 -->
    <div flex flex-col items-center gap="16px" mt-auto pb="40px">
      <div>
        <GhwuadUdoahjfButton
          @click="onState('deleteaccount')"
          :width="182"
          :height="46"
          :is-blue="false"
          text="Delete account"
        />
      </div>
      <div>
        <GhwuadUdoahjfButton
          @click="onState('logout')"
          :width="182"
          :height="46"
          :is-blue="false"
          text="Log out"
        />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .setup-page_box {
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    min-height: 100vh;
    background: var(--ai-setting-bg-color);
  }

  .list-btn {
    li + li {
      margin-top: 16px;
    }

    li {
      width: var(--ai-setting-select-style-width);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      height: var(--ai-setting-select-style-height);
      border-radius: var(--ai-setting-select-style-border-radius);
      background: var(--ai-setting-select-style-bg-color);

      span {
        font-size: var(--ai-setting-select-style-text-size);
        font-weight: var(--ai-setting-select-style-text-weight);
        color: var(--ai-setting-select-style-text-color);
      }
    }
  }

  .bottom-btn {
    background-image: var(--ai-setting-btn-color) !important;
    font-size: var(--ai-setting-btn-text-size) !important;
    font-weight: var(--ai-setting-btn-text-weight) !important;
    color: var(--ai-setting-btn-text-color) !important;
  }
</style>
