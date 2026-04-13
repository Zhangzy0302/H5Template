<script setup lang="ts">
import { ref, watch } from 'vue'
import Head from '@/assets/public/Head.png'
import { useAppImgStyle } from '@/hooks/useAppImgStyle'
import { useAuth } from '@/hooks/useAuth'
import { detailId } from '@/hooks/useDetail'
import { resolveImage } from '@/hooks/useFile'
import { useUserStore } from '@/stores'

const { checkLogin } = useAuth()
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

// ✅ 缓存处理后的头像（核心）
const avatarMap = ref<Record<string, string>>({})

// ✅ 监听列表变化
watch(
  () => props.list,
  async (list) => {
    if (!list || list.length === 0) return

    for (const item of list) {
      const raw = item.avator || Head

      // ✅ 已缓存就不重复处理
      if (avatarMap.value[raw]) continue

      try {
        const resolved = await resolveImage(raw)
        avatarMap.value[raw] = resolved || Head
      } catch (e) {
        console.log(e)
        avatarMap.value[raw] = Head
      }
    }
  },
  { immediate: true, deep: true }
)
</script>

<template>
  <div safe-area-inset-bottom>
    <empty v-if="props.list.length === 0" />

    <div
      v-for="(item, index) in props.list"
      :key="index"
      ai-fill-bg
      ai-rounded
      class="card-comment"
    >
      <ul flex items-center justify-between>
        <li flex items-center>
          <van-image
            round
            ai-avatar
            :src="avatarMap[item?.avator || Head] || Head"
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
                if (!checkLogin()) return
                isReport = true
                detailId = item.userId
              }
            "
          />
        </li>
      </ul>

      <span mt-2 ai-text-desc>{{ item?.content || '' }}</span>
    </div>

    <!-- 举报弹框 -->
    <report-box v-model:show="isReport" />
  </div>
</template>

<style lang="less" scoped>
  .card-comment {
    padding: 12px 16px;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  .card-comment + .card-comment {
    margin-top: 12px;
  }
</style>
