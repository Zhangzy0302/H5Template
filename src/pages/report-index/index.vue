<script setup lang="ts">
  import { showLoadingToast, showSuccessToast, closeToast } from 'vant'
  import defaultOptionIcon from '@/assets/public/default-option.png'
  import SelectedIcon from '@/assets/public/selected.png'
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
        :class="{ selected: formData.select === index }"
      >
        <span>{{ item.reportContext }}</span>
      </li>
    </ul>
    <!-- 输入框 -->
    <div mt-6>
      <div ai-input-title>Supplementary description</div>
      <text-box v-model="formData.title" rows="3" bg="#231e24" />
    </div>

    <!-- 底部按钮 -->
    <div mt="55px" flex justify-center>
      <div ai-gradient-btn @click="onSubmlt">Submit</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .report-index_box {
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    min-height: 100vh;
    background: url('src/assets/images/folick_ciwn_main_bg.png') center /
      cover no-repeat;
  }

  .top-select {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 368px;

    li {
      width: 100%;
      height: 63px;
      border-radius: 60px;
      background: #ffffff26;
      font-size: 16px;
      color: var(--ai-report-index-select-style-text-color);
      font-weight: 600;
      border: 1px solid #ffffff66;
      padding: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;

      // 选中状态的样式
      &.selected {
        background: #ffffff66; /* 选中后的背景色（示例：蓝色），可自定义 */
      }

      .selected-icon {
        position: absolute;
        bottom: -6px;
        right: 0;

        .success-icon {
          position: absolute;
          bottom: 10px;
          right: 4px;
          font-size: 24px;
        }
      }
    }
  }
</style>
