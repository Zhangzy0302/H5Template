<script setup lang="ts">
  const message = defineModel<string>({
    type: String,
    required: true,
    default: ''
  })

  const props = withDefaults(
    defineProps<{
      maxlength?: string | number
      rows?: string | number
      bg?: string
    }>(),
    {
      maxlength: 150,
      rows: 6,
      bg: '#0e080f'
    }
  )
</script>

<template>
  <div class="text-box">
    <van-field
      v-model="message"
      :rows="props.rows"
      type="textarea"
      :maxlength="props.maxlength"
      placeholder="Please enter"
      show-word-limit
    />
    <!-- :style="{ background: props.bg }" -->
  </div>
</template>

<style lang="less" scoped>
  .text-box {
    .van-field {
      border-radius: 12px;
    }

    :deep(.van-cell) {
      background: linear-gradient(
        90deg,
        rgba(120, 223, 255, 0.064),
        rgba(84, 105, 199, 0.05)
      );
      textarea {
        color: var(--ai-form-rich-text-text-color);
        font-size: var(--ai-form-rich-text-font-size);
        font-weight: var(--ai-form-rich-text-font-weight);

        &::placeholder {
          color: var(--ai-form-rich-text-placeholder-text-color);
          font-size: var(--ai-form-rich-text-font-size);
          font-weight: var(--ai-form-rich-text-font-weight);
        }
      }
    }
  }
</style>
