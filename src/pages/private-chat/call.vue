<script setup lang="ts">
  import HangIcon from '@/assets/public/hang-icon.png'
  import Head from '@/assets/public/Head.png'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'

  defineOptions({
    name: 'CallIndex'
  })

  const router = useRouter()
  const route = useRoute()
  const { queryId } = useJump()
  const { winUserListData } = useWindow()
  const userData = ref<UserInfo>(null)
  const loading = ref(true)
  const getData = () => {
    userData.value = winUserListData.find(v => v.userId === queryId.value)
    loading.value = false
  }

  const onBack = () => {
    router.replace({
      path: `/private-chat`,
      query: { id: route.query.cid as string }
    })
  }

  onMounted(() => {
    getData()
  })
</script>

<template>
  <div class="call-box">
    <div
      v-if="!loading"
      flex
      flex-col
      justify-center
      items-center
      relative
      w-full
      h-full
    >
      <van-image
        absolute
        :src="userData.avator || Head"
        width="100%"
        height="100%"
        class="opacity-50"
        fit="cover"
      />
      <div class="chat_bg"></div>
      <div flex flex-col justify-center items-center relative>
        <van-image
          round
          ai-avatar
          :src="userData.avator || Head"
          fit="cover"
          class="mt-[14vh] !h-20 !w-20 avatar"
        />
        <span ai-user-name mt="46px" mb="12px">{{ userData.name }}</span>
        <span ai-text-desc>Calling...</span>
      </div>
      <p
        class="mt-[26vh] !rounded-full !flex !justify-center !items-center !h-16 !w-16 call_down_btn relative"
        @click="onBack"
      >
        <van-image round :src="HangIcon" fit="cover" />
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .call-box {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    .chat_bg {
      position: absolute;
      width: 100%;
      height: 100vh;
      background:
        linear-gradient(
          0deg,
          rgba(15, 8, 26, 1) 0%,
          rgba(15, 8, 26, 0) 100%
        ),
        url('@/assets/images/joii_main_bg.png') no-repeat right;
    }
    .avatar {
      border: 2.25px solid rgba(255, 255, 255, 1);
    }
    .call_down_btn {
      background: linear-gradient(
        270deg,
        rgba(227, 93, 187, 1) 0%,
        rgba(217, 0, 0, 1) 100%
      );

      border: 1px solid rgba(255, 255, 255, 1);
      box-shadow: inset 3px 2px 5px rgba(255, 255, 255, 0.6);
    }
  }
</style>
