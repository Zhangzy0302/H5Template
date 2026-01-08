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
  <div class="call-box" v-if="!loading">
    <img :src="userData.avator || Head" class="bg-img" alt="" />
    <div class="bg-black"></div>
    <div flex flex-col justify-center items-center position-absolute z-2>
      <div>
        <div flex flex-col justify-center items-center>
          <van-image
            round
            ai-avatar
            :src="userData.avator || Head"
            fit="cover"
            class="mt-[14vh] !h-20 !w-20"
          />
          <span font-size="20px" color="white" font-600 mt="40px">
            {{ userData.name }}
          </span>
          <span mt="6px" ai-text-desc :style="{ opacity: 0.6 }">
            Calling...
          </span>
        </div>
        <p
          ai-gradient-btn
          class="mt-[23vh] !rounded-full !flex !justify-center !items-center !h-16 !w-16"
          @click="onBack"
        >
          <van-image round :src="HangIcon" fit="cover" />
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .call-box {
    position: relative;
    width: 100%;
    height: 100vh;
    background: var(--ai-private-chat-bg-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
  }

  /* 背景图 */
  .bg-img {
    position: absolute;
    inset: 0; /* top:0; right:0; bottom:0; left:0 */
    width: 100%;
    height: 70%;
    object-fit: cover;
    z-index: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  /* 添加黑色渐变遮罩 */
  .bg-black {
    content: '';
    width: 100%;
    height: 70%;
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 1;
  }
</style>
