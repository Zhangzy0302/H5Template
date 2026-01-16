<script setup lang="ts">
  import Head from '@/assets/images/joii_ai_head.png'

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
        <div
          flex
          justify-start
          flex-col
          class="content gap-[8px] items-start"
        >
          <van-image
            round
            mr-3
            ai-avatar
            :src="item.avator || Head"
            fit="cover"
            class="user-head"
          />
          <div v-if="item.sendContent" class="user-chat other-chat">
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
        <div
          flex
          justify-end
          flex-col
          class="content gap-[8px] items-end"
        >
          <van-image
            round
            ml-3
            ai-avatar
            :src="item.avator || Head"
            fit="cover"
            class="user-head"
          />
          <div v-if="item.sendContent" class="user-chat">
            <p ai-text-desc class="send-box">
              {{ item.sendContent }}
            </p>
          </div>
        </div>
        <div v-if="item.sendPicUrl" flex justify-end>
          <van-image
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

  .other-chat {
    background: linear-gradient(
      180deg,
      rgba(35, 4, 217, 1) 0%,
      rgba(119, 99, 231, 1) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.2); /* 必须 */

    border-radius: 0px var(--ai-chat-list-avatar-border-radius)
      var(--ai-chat-list-avatar-border-radius)
      var(--ai-chat-list-avatar-border-radius);
  }

  .user-chat {
    color: #fff;

    p {
      padding: 12px;
      border-radius: 0px var(--ai-chat-list-avatar-border-radius)
        var(--ai-chat-list-avatar-border-radius)
        var(--ai-chat-list-avatar-border-radius);
    }
  }

  .send-box {
    background: rgba(57, 47, 74, 1) !important;
    border-radius: var(--ai-chat-list-avatar-border-radius) 0px
      var(--ai-chat-list-avatar-border-radius)
      var(--ai-chat-list-avatar-border-radius) !important;
  }
</style>
