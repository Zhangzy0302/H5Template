<script setup lang="ts">
  import Head from '@/assets/public/Head.png'
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'
  import { detailId } from '@/hooks/useDetail'
  import { useUserStore } from '@/stores'

  const { reportIcon } = useAppImgStyle()
  const { userInfo } = useUserStore()

  const props = withDefaults(
    defineProps<{
      list?: CommentInfo[]
    }>(),
    {
      list: () => []
    }
  )

  // 举报弹框
  const isReport = ref(false)
</script>

<template>
  <div safe-area-inset-bottom>
    <empty v-if="props.list.length === 0" />
    <div
      v-for="(item, index) in props.list"
      :key="index"
      ai-fill-bg
      class="card-comment"
    >
      <ul flex items-center justify-between>
        <li flex items-center>
          <van-image
            round
            ai-avatar
            :src="item?.avator || Head"
            fit="cover"
          />
          <span ml-3 ai-user-name>{{ item?.name || '' }}</span>
        </li>
        <li v-if="userInfo.userId !== item.userId" flex items-center>
          <van-image
            :src="reportIcon"
            :style="{
              width: 'var(--report-image-width)',
              height: 'var(--report-image-height)'
            }"
            @click="
              () => {
                isReport = true
                detailId = item.userId
              }
            "
          />
        </li>
      </ul>
      <span mt-2 ai-text-desc>{{ item?.content || '' }}</span>
    </div>

    <report-box v-model:show="isReport" />
  </div>
</template>

<style lang="less" scoped>
  .card-comment {
    padding: 12px 12px 13px 16px;
    border-radius: 12px;
    background: linear-gradient(
      90deg,
      rgba(120, 223, 255, 0.064),
      rgba(240, 243, 255, 0.05)
    );
  }
  .card-comment + .card-comment {
    margin-top: 12px;
  }
</style>
