<script setup lang="ts">
  import { showLoadingToast, showSuccessToast, closeToast } from 'vant'
  import { detailId } from '@/hooks/useDetail'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  const router = useRouter()
  const route = useRoute()
  const show = defineModel<boolean>('show', {
    type: Boolean,
    required: true,
    default: false
  })

  const { winUserListData } = useWindow()
  const { userInfo } = useUserStore()
  const { appParams } = useJump()

  const allUserList = ref<UserInfo[]>(winUserListData)

  const onReport = () => {
    router
      .replace({
        path: '/report-index',
        query: { cid: route.query?.id, url: route.path }
      })
      .then(() => {
        show.value = false
      })
  }

  const onShield = async () => {
    // 1. 显示 Loading（手动关闭）
    showLoadingToast({
      message: 'Blocking...',
      forbidClick: true,
      duration: 0
    })

    try {
      // 2. 模拟异步（如果你后面接接口，这里直接 await 接口）
      await new Promise(resolve =>
        setTimeout(
          resolve,
          Math.floor(Math.random() * (2000 - 500 + 1)) + 500
        )
      )

      const userInfoId = detailId.value
      userInfo.blockList.push(userInfoId)
      userInfo.blockList = Array.from(new Set(userInfo.blockList))

      allUserList.value.forEach(v => {
        if (v.userId === userInfo.userId) {
          v.blockList = userInfo.blockList
        }
      })

      // 3. 关闭 Loading
      closeToast()

      // 4. 成功提示
      showSuccessToast('Blocked successfully')

      // 5. 延迟执行后续逻辑
      setTimeout(() => {
        appParams({
          key: 'updateUser',
          value: allUserList.value,
          state: 0
        })
        show.value = false
      }, 1000)
    } catch (e) {
      closeToast()
    }
  }
</script>

<template>
  <van-popup v-model:show="show" position="bottom">
    <div position="relative">
      <div class="report-box_bg"></div>
      <ul class="report-box">
        <!-- 拖拽条 -->
        <div class="drag-handle" />
        <li @click="onReport">
          <p ai-default-btn>Report</p>
        </li>
        <li @click="onShield">
          <p ai-default-btn>Shield</p>
        </li>
        <li>
          <GhwuadUdoahjfButton
            @click="show = false"
            :width="182"
            :height="46"
            :is-blue="true"
            text="Cancel"
          />
        </li>
      </ul>
    </div>
  </van-popup>
</template>

<style lang="less" scoped>
  .report-box_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 204px;
    background: url('@/assets/images/joii_main_bg.png');
    opacity: 0.4;
    background-size: cover;
  }
  .report-box {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 30px;

    .drag-handle {
      width: 48px;
      height: 4px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 2px;
      margin: 8px auto 20px;
    }

    li + li {
      margin-top: 16px;
    }

    li {
      p {
        width: var(--ai-report-btn-select-style-width);
        height: var(--ai-report-btn-select-style-height);
        line-height: var(--ai-report-btn-select-style-height);
      }

      &:last-child {
        margin-top: 32px;

        p {
          width: var(--ai-report-btn-cancel-style-width);
          height: var(--ai-report-btn-cancel-style-height);
          line-height: var(--ai-report-btn-cancel-style-height);
        }
      }
    }
  }
</style>
