<script setup lang="ts">
  import {
    closeToast,
    showLoadingToast,
    showSuccessToast,
    showToast
  } from 'vant'
  import { useGuestLimit } from '@/hooks/useGuestLimit'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  defineOptions({
    name: 'publish-video'
  })

  const { userInfo } = useUserStore()
  const { winDynamicData } = useWindow()
  const { appParams } = useJump()
  const { isGuest, guardGuestAction } = useGuestLimit()

  const listData = ref<DynamicInfo[]>(winDynamicData)

  const formData = reactive({
    userId: userInfo.userId,
    dynamicType: 1,
    dynamicDesc: '',
    dynamicTitleType: 0,
    dynamicPic: []
  })

  const onSubmit = async () => {
    if (guardGuestAction()) return

    if (!formData.dynamicDesc) {
      return showToast('Please enter the content')
    }
    if (formData.dynamicPic.length === 0) {
      return showToast('Please upload the video')
    }
    if (formData.dynamicPic[0].status === 'uploading') {
      return showToast('Please wait for the video to upload')
    }
    if (formData.dynamicPic[0].status === 'failed') {
      return showToast('Video upload failed, please re-upload')
    }

    const videoUrl = formData.dynamicPic[0].url
    const coverUrl = formData.dynamicPic[0].objectUrl
    if (!videoUrl || !coverUrl) {
      return showToast('Please wait for the video to upload')
    }

    const data = {
      ...formData,
      dynamicTag: [],
      dynamicVideo: videoUrl,
      dynamicLikeCount: 0,
      dynamicCommentCount: 0,
      dynamicId: `${Date.now()}_video`,
      dynamicPic: [coverUrl]
    } as DynamicInfo

    listData.value.unshift(data)
    // 1. 显示 Loading（手动控制）
    showLoadingToast({
      message: 'Loading...',
      forbidClick: true,
      duration: 0
    })

    // 2. 随机延迟 500–2000ms
    await new Promise(resolve =>
      setTimeout(
        resolve,
        Math.floor(Math.random() * (2000 - 500 + 1)) + 500
      )
    )

    // 3. 关闭 Loading
    closeToast()

    // 4. 成功提示
    showSuccessToast('Published successfully.')

    // 5. 延迟 1 秒再执行后续逻辑
    setTimeout(() => {
      appParams({
        key: 'updatePost',
        value: listData.value,
        state: 0
      })
    }, 1000)
  }
</script>

<template>
  <div px-layout-padding class="publish-video_box">
    <text-box
      v-model="formData.dynamicDesc"
      maxlength="50"
      rows="3"
      :readonly="isGuest"
      @click="guardGuestAction"
    />

    <!-- 视频上传 -->
    <div>
      <div ai-input-title mt="24px">Upload(video)</div>
      <div @click.capture="guardGuestAction">
        <uploader-box
          v-model:list="formData.dynamicPic"
          :max-count="1"
          :disabled="isGuest"
          accept="video"
        />
      </div>
    </div>

    <!-- 输入框 -->
    <!-- <div>
      <div ai-input-title>Payment(Optional)</div>
      <van-field v-model="formData.content" placeholder="Example 300" class="public-input" />
    </div> -->

    <!-- 底部按钮 -->
    <div mt-auto pb="40px" flex justify-center>
      <GhwuadUdoahjfButton
        :width="182"
        :height="46"
        :is-blue="true"
        text="Release"
        @click="onSubmit"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .publish-video_box {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    background: var(--ai-publish-video-bg-color);
  }
</style>
