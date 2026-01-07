<script setup lang="ts">
  import Head from '@/assets/public/Head.png'
  import swipeOne from '@/assets/public/swipe-1.png'
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'
  import { useDetail } from '@/hooks/useDetail'
  import { useWindow } from '@/hooks/useWindow'

  defineOptions({
    name: 'ArticleDetail'
  })

  const { detailLikeIcon, likeIcon } = useAppImgStyle()
  const { winPublishImageListData } = useWindow()
  const {
    loding,
    dynamicInfo,
    commentList,
    isLike,
    onAvator,
    onLike,
    onSend
  } = useDetail()
</script>

<template>
  <div v-if="!loding" class="article-detail_box">
    <div relative>
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item
          v-for="(item, index) in dynamicInfo?.dynamicPic"
          :key="index"
        >
          <van-image
            h-full
            w-full
            :src="item || swipeOne"
            fit="cover"
            position="top"
          />
        </van-swipe-item>
      </van-swipe>
      <div
        p-5
        text-end
        flex
        flex-col
        items-center
        right-0
        absolute
        class="bottom-[-64px]"
      >
        <van-image
          :src="isLike ? likeIcon : detailLikeIcon"
          :style="{
            width: 'var(--unlike-image-width)',
            height: 'var(--unlike-image-height)'
          }"
          fit="cover"
          @click="onLike"
        />
        <span class="public-number">
          {{ dynamicInfo?.dynamicLikeCount }}
        </span>
      </div>
    </div>

    <div mt-5 px-layout-padding w-full align-item="center">
      <ul flex gap="12px">
        <li flex shrink flex-col items-center @click="onAvator">
          <van-image
            round
            width="48px"
            :src="dynamicInfo?.avator || Head"
            fit="cover"
          />
        </li>
        <span mt-2 ai-user-name>{{ dynamicInfo?.name }}</span>
        <li>
          <span mt-2 ai-tag-btn>
            #{{
              winPublishImageListData[dynamicInfo?.dynamicTitleType].name
            }}
          </span>
        </li>
      </ul>
      <span mt="16px" ai-text-desc>{{ dynamicInfo?.dynamicDesc }}</span>

      <van-divider content-position="left">Comments</van-divider>

      <comment-card
        :list="commentList"
        class="article-comment-card_box"
      />

      <input-box @send="onSend" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .article-detail_box {
    background: url('src/assets/images/folick_ciwn_main_bg.png') center /
      cover no-repeat;
    min-height: 100vh;
  }

  .my-swipe {
    .van-swipe-item {
      height: 379px;
    }
  }

  .article-comment-card_box {
    padding-bottom: calc(80px + var(--ai-view-padding-bottom));
  }
</style>
