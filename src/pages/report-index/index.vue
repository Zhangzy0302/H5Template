<script setup lang="ts">
  import { showLoadingToast, showSuccessToast, closeToast } from 'vant'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'

  defineOptions({
    name: 'ReportIndex'
  })

  const { winReportListData } = useWindow()
  const { onBack } = useJump()
  const router = useRouter()
  const route = useRoute()

  const props = withDefaults(
    defineProps<{
      type?: 0 | 1
    }>(),
    {
      type: 0
    }
  )

  const formData = reactive({
    title: '',
    select: 0
  })

  const onSubmlt = async () => {
    // 1. 显示 Loading
    showLoadingToast({
      message: 'Submitting...',
      forbidClick: true,
      duration: 0 // 重点：不自动关闭
    })

    try {
      // 2. 模拟接口请求（换成你的真实接口）
      await new Promise(resolve =>
        setTimeout(
          resolve,
          Math.floor(Math.random() * (2000 - 500 + 1)) + 500
        )
      )

      // 3. 关闭 Loading
      closeToast()

      // 4. 显示成功提示
      showSuccessToast('Report successfully')

      // 5. 延迟 1 秒执行后续逻辑
      setTimeout(() => {
        if (props.type === 1) {
          onBack()
        } else {
          router.replace({
            path: route.query.url as string,
            query: { id: route.query?.cid }
          })
        }
      }, 1000)
    } catch (error) {
      // 如果失败，也要关 Loading
      closeToast()
    }
  }
</script>

<template>
  <div safe-area-inset-top px-layout-padding class="report-index_box">
    <ul safe-area-inset-top report-index_box class="top-select">
      <li
        v-for="(item, index) in winReportListData"
        :key="index"
        @click="formData.select = index"
      >
        <span>{{ item.reportContext }}</span>

        <div class="selected-icon">
          <div
            class="success-icon"
            v-if="formData.select === index"
          ></div>
        </div>
      </li>
    </ul>
    <!-- 输入框 -->
    <div>
      <div ai-input-title>Supplementary description</div>
      <text-box v-model="formData.title" rows="3" bg="#231e24" />
    </div>

    <!-- 底部按钮 -->
    <div pt="32px" pb="40px" flex justify-center>
      <GhwuadUdoahjfButton
        @click="onSubmlt"
        :width="182"
        :height="46"
        :is-blue="true"
        text="Submit"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .report-index_box {
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    min-height: 100vh;
    background: var(--ai-report-index-bg-color);
  }

  .top-select {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 368px;

    li {
      width: var(--ai-report-index-select-style-width);
      height: var(--ai-report-index-select-style-height);
      border-radius: var(--ai-report-index-select-style-border-radius);
      background: linear-gradient(
        90deg,
        rgba(120, 223, 255, 0.064),
        rgba(84, 105, 199, 0.05)
      );
      font-size: var(--ai-report-index-select-style-text-size);
      color: var(--ai-report-index-select-style-text-color);
      font-weight: var(--ai-report-index-select-style-text-weight);
      padding: 12px;
      position: relative;
      overflow: hidden;

      .selected-icon {
        position: absolute;
        bottom: 12px;
        right: 12px;
        width: 20px;
        height: 20px;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.2);
        justify-content: center;

        .success-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 14px;
          height: 14px;
          background: linear-gradient(
            90deg,
            rgba(29, 0, 217, 1),
            rgba(151, 93, 227, 1)
          );
          border: 1px solid white;
          border-radius: 30px;
        }
      }
    }
  }
</style>
