<script setup lang="ts">
  import MyIcon from '@/assets/images/joii_wallet_dimond_icon.png'
  import GhwuadUdoahjfButton from '@/components/GhwuadUdoahjfButton.vue'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  defineOptions({
    name: 'GoldCoin'
  })

  const { userInfo } = useUserStore()
  const { winCoinData } = useWindow()
  const { appParams } = useJump()

  const formData = reactive({
    radio: winCoinData[0]?.key
  })

  const onRecharge = () => {
    appParams({ key: 'Recharge', value: formData.radio, state: 1 })
  }
</script>

<template>
  <div safe-area-inset-top class="gold-coin_box">
    <div p-layout-padding flex-col flex justify-center items-center>
      <div class="top-box">
        <li ml-auto mr="32px" flex flex-col>
          <span font-size="20px" text-white font-medium>
            {{ userInfo.coins }}
          </span>
          <div font-size="14px" color="#FFFFFFB2">My diamonds</div>
        </li>
      </div>

      <!-- 选项数据 -->
      <ul class="bottom-selsect">
        <li
          v-for="item in winCoinData"
          :key="item.key"
          :class="{ 'on-active': formData.radio === item.key }"
          @click="formData.radio = item.key"
        >
          <p>
            <van-image h-4 w-5 :src="MyIcon" fit="cover" />
            <span ml-1 ai-user-name>{{ item.cions }}</span>
          </p>
          <span ai-text-desc>{{ item.meney }}$</span>
        </li>
      </ul>

      <!-- 按钮 -->
      <GhwuadUdoahjfButton
        mt-6
        pb-2
        :width="182"
        :height="46"
        :is-blue="true"
        text="Recharge"
        @click="onRecharge"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .gold-coin_box {
    padding-top: calc(var(--van-nav-bar-height) + 27px);
    min-height: 100vh;
    background: var(--ai-coin-bg-color);
  }

  .top-box {
    background: url(@/assets/images/joii_wallet_top_bg.png) no-repeat;
    background-size: contain;
    width: 100%;
    height: 111px;
    display: flex;
    align-items: center;
    padding: 20px;
    padding-bottom: 10px;
  }

  .bottom-selsect {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 每行 3 列，每列等宽 */
    gap: 10px;
    /* 可选：设置子项之间的间距 */

    li {
      width: var(--ai-coin-select-style-width);
      height: var(--ai-coin-select-style-height);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: var(--ai-coin-select-style-border-radius);
      background: var(--ai-coin-select-style-bg-color);

      p {
        margin-bottom: 8px;
        display: flex;
        align-items: baseline;
      }
    }

    .on-active {
      border: 1px solid rgba(255, 255, 255, 0.6);
      background: var(--ai-coin-select-style-selected-color);
    }
  }
</style>
