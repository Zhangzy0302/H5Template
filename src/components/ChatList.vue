<script setup lang="ts">
  import Head from '@/assets/images/folick_ciwn_ai_head.png'

  const listData = defineModel<MessageInfo[]>('list', {
    type: Array as PropType<MessageInfo[]>,
    required: true,
    default: () => []
  })

  const emit = defineEmits<{
    send: [_: string]
  }>()

  const onSend = (v: string) => {
    emit('send', v)
  }
</script>

<template>
  <div safe-area-inset-bottom>
    <div
      v-for="(item, index) in listData"
      :key="index"
      px-layout-padding
      class="list-box"
    >
      <div v-if="item.position === 'left'">
        <div flex class="content">
          <van-image
            round
            mr-3
            ai-avatar
            :src="item.avator || Head"
            fit="cover"
            class="user-head"
          />
          <div
            v-if="item.sendContent"
            class="user-chat"
            :style="{
              border:
                item.position === 'left'
                  ? '1px solid rgba(255, 255, 255, 0.4)'
                  : ''
            }"
          >
            <p ai-text-desc>
              {{ item.sendContent }}
            </p>
          </div>
          <div v-if="item.loading" flex items-center>
            <van-loading type="spinner" />
          </div>
        </div>
        <van-image
          v-if="item.sendPicUrl"
          mr-3
          rounded-xl
          h-48
          w-48
          :src="item.sendPicUrl"
          fit="cover"
          class="mt-4 !rounded-xl !overflow-hidden"
        />
      </div>

      <div v-if="item.position === 'right'">
        <div flex justify-end class="content">
          <div v-if="item.sendContent" class="user-chat">
            <p ai-text-desc class="send-box">
              {{ item.sendContent }}
            </p>
          </div>
          <van-image
            round
            ml-3
            ai-avatar
            :src="item.avator || Head"
            fit="cover"
            class="user-head"
          />
        </div>
        <div v-if="item.sendPicUrl" flex justify-end>
          <van-image
            mr-3
            h-48
            w-48
            :src="item.sendPicUrl"
            fit="cover"
            class="mt-4 !rounded-xl !overflow-hidden"
          />
        </div>
      </div>
    </div>
    <input-box safe-area-inset-bottom @send="onSend" />
  </div>
</template>

<style lang="less" scoped>
  .list-box {
    padding-top: 16px;

    .content + .content {
      margin-top: 40px;
    }
  }

  .user-head {
    width: var(--ai-chat-list-avatar-width);
    height: var(--ai-chat-list-avatar-height);
    flex-shrink: 0;
  }

  .user-chat {
    color: #fff;
    border-radius: 30px;
    p {
      padding: 12px;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.15);
    }
  }

  .send-box {
    background: var(--ai-chat-list-send-bg-color) !important;
    border-radius: 30px;
  }
</style>
