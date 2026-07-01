<script setup lang="ts">
  import { showLoadingToast } from 'vant'
  import Head from '@/assets/public/Head.png'
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'
  import { detailId } from '@/hooks/useDetail'
  import { useGuestLimit } from '@/hooks/useGuestLimit'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  defineOptions({
    name: 'other-home'
  })

  const {
    reportIcon,
    otherHomeAddIcon,
    otherHomeMessageIcon,
    otherHomeLikeIcon
  } = useAppImgStyle()
  const { queryId, jumpToDetail, appParams, jumpToPrivateChat } =
    useJump()
  const { guardGuestAction } = useGuestLimit()
  const {
    winUserListData,
    winDynamicData,
    winChatListData,
    winPublishImageListData
  } = useWindow()
  const useData = useUserStore()

  // 举报弹框
  const isReport = ref(false)
  const userInfo = ref<UserInfo>(null)
  const bottomList = ref<DynamicInfo[]>([])
  const loading = ref(true)
  /** 是否显示关注 */
  const isShowFollow = ref(false)
  const allUserList = ref<UserInfo[]>(winUserListData)

  const getData = () => {
    userInfo.value = winUserListData.find(v => v.userId === queryId.value)

    detailId.value = userInfo.value.userId

    bottomList.value = winDynamicData.filter(
      v => v.userId === userInfo.value.userId
    )
    console.log(bottomList.value, '====')
    isShowFollow.value = useData.userInfo.follow.includes(
      userInfo.value.userId
    )
    loading.value = false
  }

  const onGoDetail = (item: DynamicInfo) => {
    jumpToDetail(item.dynamicId, item.dynamicType, queryId.value)
  }

  const onFollow = () => {
    if (guardGuestAction()) return

    useData.userInfo.follow.push(userInfo.value.userId)
    userInfo.value.fans.push(useData.userInfo.userId)
    allUserList.value.forEach(v => {
      if (v.userId === useData.userInfo.userId) {
        v.follow = useData.userInfo.follow
      }
      if (v.userId === userInfo.value.userId) {
        v.fans = userInfo.value.fans
      }
    })
    isShowFollow.value = true
    appParams({ key: 'updateUser', value: allUserList.value, state: 1 })
  }

  const getCurrentDateTime = (): string => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0') // getMonth() 是 0-11
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }

  const onAddChat = () => {
    if (guardGuestAction()) return

    const chatItem = winChatListData.find(v => {
      return (
        v.chatUserIds.includes(userInfo.value.userId) &&
        v.chatUserIds.includes(useData.userInfo.userId)
      )
    })
    if (chatItem) {
      jumpToPrivateChat(chatItem.chatId, queryId.value)
    } else {
      // 时间戳
      const item: ChatInfo = {
        chatId: `${Date.now()}_chatId`,
        chatUserIds: [userInfo.value.userId, useData.userInfo.userId],
        lastSendContent: '',
        lastSendTime: getCurrentDateTime(),
        unreadMsgCount: 0,
        lastSendUserId: useData.userInfo.userId
      }
      window?.chatListJson.push(item)

      showLoadingToast({
        message: 'Loading...',
        forbidClick: true,
        onClose: () => {
          appParams({
            key: 'uploadChat',
            value: window?.chatListJson,
            state: 1
          })
          jumpToPrivateChat(item.chatId, queryId.value)
        }
      })
    }
  }

  onMounted(() => {
    getData()
  })

  const shouldShowReport = item => {
    // 不显示自己
    return item.userId !== useData.userInfo.userId
  }

  const onReportPost = (item: DynamicInfo) => {
    if (guardGuestAction()) return
    isReport.value = true
    detailId.value = item.userId
  }
</script>

<template>
  <div v-if="!loading" class="other-home_box">
    <div class="top-user-info">
      <div class="avatar-info">
        <van-image
          round
          ai-avatar
          :src="userInfo.avator || Head"
          fit="cover"
          class="user-head"
        />
        <div h-2 w-20 relative>
          <van-image
            v-if="!isShowFollow && shouldShowReport(userInfo)"
            round
            bottom-2
            left-14
            absolute
            :src="otherHomeAddIcon"
            fit="cover"
            :style="{
              width: 'var(--other-home-follow-width)',
              height: 'var(--other-home-follow-height)'
            }"
            @click="onFollow"
          />
        </div>
        <span mt-1 color="white" fw-600 font-size="16px">
          {{ userInfo.name }}
        </span>
      </div>
      <ul text-white flex justify-around class="number-box">
        <li>
          <span>{{ bottomList.length }}</span>
          <span>Posts</span>
        </li>
        <li>
          <span>{{ userInfo.fans.length }}</span>
          <span>Fans</span>
        </li>
        <li>
          <span>{{ userInfo.follow.length }}</span>
          <span>Follow</span>
        </li>
      </ul>
      <ul px-layout-padding class="bottom-box">
        <li>{{ userInfo.about }}</li>
        <li v-if="shouldShowReport(userInfo)" @click="onAddChat">
          <van-image
            :src="otherHomeMessageIcon"
            class="icon-box"
            :style="{
              width: 'var(--other-home-chat-width)',
              height: 'var(--other-home-chat-height)'
            }"
          />
          <span ml-3 class="public-number !mt-0">Chat</span>
        </li>
      </ul>
    </div>

    <div class="post_title">Post</div>

    <div p-layout-padding class="bottom-card">
      <!-- 内容卡片 -->
      <div
        v-for="(item, index) in bottomList"
        :key="index"
        class="card-item"
        @click="onGoDetail(item)"
      >
        <ul class="top-info">
          <li>
            <van-image round ai-avatar :src="Head" fit="cover" />
            <span mx-2 ai-user-name>Apien</span>
            <span v-if="item.dynamicType === 0" ai-tag-btn class="tag">
              # {{ winPublishImageListData[item?.dynamicTitleType].name }}
            </span>
          </li>
          <li />
          <li>
            <van-image
              v-if="shouldShowReport(item)"
              :src="reportIcon"
              :style="{
                width: 'var(--report-image-width)',
                height: 'var(--report-image-height)'
              }"
              @click.stop="onReportPost(item)"
            />
          </li>
        </ul>
        <ul class="bottom-img">
          <li w-full relative>
            <van-image
              rounded-2
              h-50
              w-full
              overflow-hidden
              :src="item.dynamicPic[0] || Head"
              fit="cover"
              position="top"
            />
            <img
              v-if="item.dynamicType === 1"
              src="@/assets/images/joii_icon_play.png"
              width="40px"
              height="40px"
              absolute
              class="top-[45%] left-[45%]"
              alt=""
            />
          </li>
        </ul>
        <span class="bottom-text">{{ item.dynamicDesc }}</span>
        <div class="like-box">
          <van-image
            :src="otherHomeLikeIcon"
            class="icon-box"
            :style="{
              width: 'var(--other-home-like-post-width)',
              height: 'var(--other-home-like-post-height)'
            }"
          />
          <span class="public-number">{{ item.dynamicLikeCount }}</span>
        </div>
      </div>
    </div>

    <report-box v-model:show="isReport" />
  </div>
</template>

<style lang="less" scoped>
  .other-home_box {
    min-height: 100vh;
    background: var(--ai-other-home-bg-color);
  }

  .top-user-info {
    background: url('@/assets/images/joii_main_bg.png');
    background-size: cover;
    width: 100%;
    height: 346px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bottom-box {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        color: var(--ai-other-home-right-desc-text-color);
        font-size: 14px;
        font-weight: 400;

        &:nth-child(2) {
          margin-left: 10px;
          width: 162px;
          height: 53px;
          flex-shrink: 0;
          border-radius: 66px;
          border: 1px solid white;
          background: linear-gradient(
            135deg,
            rgba(29, 0, 217, 1),
            rgba(151, 93, 227, 1)
          );
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .number-box {
      li {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          font-size: 18px;
          font-weight: 900;
          color: var(--ai-other-home-top-data-desc-text-color);

          &:nth-child(2) {
            font-size: var(--ai-other-home-top-data-text-text-size);
            font-weight: var(--ai-other-home-top-data-text-text-weight);
            color: rgba(255, 255, 255, 0.6);
          }
        }
      }
    }
  }

  .avatar-info {
    padding: 96px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .user-head {
      width: 83px;
      height: 83px;
      border: 3px solid #fff;
    }
  }

  .post_title {
    /** 文本1 */
    padding: 20px 24px 0 16px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 23.48px;
    color: rgba(255, 255, 255, 1);
  }

  .bottom-card {
    .card-item + .card-item {
      margin-top: 16px;
    }

    .card-item {
      background: linear-gradient(
        90deg,
        rgba(120, 223, 255, 0.064),
        rgba(84, 105, 199, 0.05)
      );
      border-radius: 12px;
      position: relative;
      overflow: hidden;

      .top-info {
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
          display: flex;
          align-items: center;

          .tag {
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }

      .bottom-img {
        padding: 0 16px 16px;
        display: flex;
        justify-content: space-between;

        li {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }

      .bottom-text {
        position: absolute;
        bottom: 0;
        background: linear-gradient(
          90deg,
          rgba(14, 8, 15, 0.5) 0%,
          rgba(14, 8, 15, 0.5) 100%
        );
        height: 42px;
        width: 100%;
        line-height: 42px;
        padding: 0 16px;
        font-size: var(--ai-other-home-card-desc-text-size);
        font-weight: var(--ai-other-home-card-desc-text-weight);
        color: var(--ai-other-home-card-desc-text-color);
        text-align: var(--ai-other-home-card-desc-text-sort);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .like-box {
        position: absolute;
        bottom: 26px;
        right: 10px;
        display: flex;
        flex-direction: column;
        align-self: center;
      }
    }
  }
</style>
