<script setup lang="ts">
  import { showToast } from 'vant'
  import defaultAvatar from '@/assets/images/default-avatar.svg'
  import editIcon from '@/assets/images/joii_icon_up_avatar.png'
  import GhwuadUdoahjfButton from '@/components/GhwuadUdoahjfButton.vue'

  defineOptions({
    name: 'Register'
  })

  type Gender = 'male' | 'female'

  const REGISTER_HANDLER = 'registerUser'
  const DEFAULT_BIRTHDAY = '2003-01-01'

  const formData = reactive({
    nickname: '',
    birthday: DEFAULT_BIRTHDAY,
    location: '',
    gender: 'female' as Gender
  })

  const avatarInputRef = ref<HTMLInputElement>()
  const avatarPreview = ref('')
  const avatarBase64 = ref('')
  const avatarFileName = ref('')

  const showBirthdayPicker = ref(false)
  const birthdayValues = ref(DEFAULT_BIRTHDAY.split('-'))
  const minBirthday = new Date(1900, 0, 1)
  const maxBirthday = new Date()

  const showLocationPicker = ref(false)
  const locationValues = ref(['Los Angeles'])
  const locationColumns = [
    { text: 'Los Angeles', value: 'Los Angeles' },
    { text: 'New York', value: 'New York' },
    { text: 'Miami', value: 'Miami' },
    { text: 'Chicago', value: 'Chicago' },
    { text: 'San Francisco', value: 'San Francisco' }
  ]

  const openAvatarPicker = () => {
    avatarInputRef.value?.click()
  }

  const onAvatarChange = (event: Event) => {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]

    if (!file) {
      return
    }

    if (!file.type.startsWith('image/')) {
      showToast('Please select an image')
      input.value = ''
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      avatarPreview.value = result
      avatarBase64.value = result
      avatarFileName.value = file.name
    }
    reader.onerror = () => {
      showToast('Image loading failed')
    }
    reader.readAsDataURL(file)
    input.value = ''
  }

  const onBirthdayConfirm = (event: { selectedValues?: string[] }) => {
    const values = event.selectedValues || birthdayValues.value
    formData.birthday = values.join('-')
    birthdayValues.value = values
    showBirthdayPicker.value = false
  }

  const onLocationConfirm = (event: {
    selectedOptions?: Array<{ text?: string, value?: string }>
  }) => {
    const option = event.selectedOptions?.[0]
    formData.location = option?.value || option?.text || locationValues.value[0]
    locationValues.value = [formData.location]
    showLocationPicker.value = false
  }

  const onSubmit = async () => {
    const payload = {
      nickname: formData.nickname.trim(),
      birthday: formData.birthday,
      location: formData.location.trim(),
      gender: formData.gender,
      avatar: avatarBase64.value,
      avatarFileName: avatarFileName.value
    }

    try {
      await window.flutter_inappwebview.callHandler(REGISTER_HANDLER, payload)
    } catch (e) {
      console.warn('Flutter handler registerUser 调用失败', e)
      showToast('Flutter handler unavailable')
    }
  }
</script>

<template>
  <div safe-area-inset-top class="register-page">
    <div class="register-page__glow" />

    <div class="register-page__content">
      <input
        ref="avatarInputRef"
        class="register-page__avatar-input"
        type="file"
        accept="image/*"
        @change="onAvatarChange"
      />

      <button
        class="register-page__avatar"
        type="button"
        @click="openAvatarPicker"
      >
        <van-image
          round
          class="register-page__avatar-img"
          :src="avatarPreview || defaultAvatar"
          fit="cover"
        />
        <van-image
          round
          class="register-page__edit"
          :src="editIcon"
          fit="cover"
        />
      </button>

      <div class="register-page__form">
        <div class="register-page__field">
          <div ai-input-title class="register-page__label">Nickname</div>
          <van-field
            v-model="formData.nickname"
            placeholder="Please enter"
            class="public-input register-page__input"
          />
        </div>

        <div class="register-page__field">
          <div ai-input-title class="register-page__label">Birthday</div>
          <van-field
            v-model="formData.birthday"
            placeholder="2003-01-01"
            class="public-input register-page__input"
            readonly
            is-link
            @click="showBirthdayPicker = true"
          />
        </div>

        <div class="register-page__field">
          <div ai-input-title class="register-page__label">Location</div>
          <van-field
            v-model="formData.location"
            placeholder="Please select"
            class="public-input register-page__input"
            readonly
            is-link
            @click="showLocationPicker = true"
          />
        </div>

        <div class="register-page__field">
          <div ai-input-title class="register-page__label">Gender</div>
          <div class="register-page__gender">
            <button
              type="button"
              class="register-page__gender-btn"
              :class="{ 'is-active': formData.gender === 'male' }"
              @click="formData.gender = 'male'"
            >
              Male
            </button>
            <button
              type="button"
              class="register-page__gender-btn"
              :class="{ 'is-active': formData.gender === 'female' }"
              @click="formData.gender = 'female'"
            >
              Female
            </button>
          </div>
        </div>
      </div>

      <div class="register-page__submit">
        <GhwuadUdoahjfButton :width="200" text="Next" @click="onSubmit" />
      </div>
    </div>

    <van-popup v-model:show="showBirthdayPicker" position="bottom" round>
      <van-date-picker
        v-model="birthdayValues"
        title="Birthday"
        :min-date="minBirthday"
        :max-date="maxBirthday"
        @confirm="onBirthdayConfirm"
        @cancel="showBirthdayPicker = false"
      />
    </van-popup>

    <van-popup v-model:show="showLocationPicker" position="bottom" round>
      <van-picker
        v-model="locationValues"
        title="Location"
        :columns="locationColumns"
        @confirm="onLocationConfirm"
        @cancel="showLocationPicker = false"
      />
    </van-popup>
  </div>
</template>

<style lang="less" scoped>
  .register-page {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    background: var(--ai-edit-bg-color);
    color: #fff;
  }

  .register-page__glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 222px;
    background:
      radial-gradient(circle at 88% 34%, rgba(192, 195, 255, 0.8) 0, rgba(192, 195, 255, 0.18) 25%, rgba(192, 195, 255, 0) 46%),
      radial-gradient(circle at 62% 10%, rgba(45, 91, 255, 0.86) 0, rgba(45, 91, 255, 0.28) 34%, rgba(45, 91, 255, 0) 62%),
      linear-gradient(135deg, rgba(89, 3, 20, 0.7) 0%, rgba(13, 8, 17, 0) 38%);
    pointer-events: none;
  }

  .register-page__content {
    position: relative;
    z-index: 1;
    padding: calc(var(--van-nav-bar-height) + var(--ai-view-padding-top) + 28px) var(--ai-view-padding) calc(34px + var(--ai-view-padding-bottom));
  }

  .register-page__avatar {
    position: relative;
    display: block;
    width: 106px;
    height: 106px;
    padding: 0;
    margin: 0 auto 34px;
    background: transparent;
    border: 0;
  }

  .register-page__avatar-input {
    display: none;
  }

  .register-page__avatar-img {
    width: 106px;
    height: 106px;
    background: #fff;
  }

  .register-page__edit {
    position: absolute;
    right: 0;
    bottom: 2px;
    width: 26px;
    height: 26px;
  }

  .register-page__field + .register-page__field {
    margin-top: 24px;
  }

  .register-page__label {
    margin-bottom: 14px;
    font-size: 21px;
    font-weight: 900;
    line-height: 25px;
    color: #fff;
  }

  .register-page__input {
    height: 52px;
    padding: 0 22px;
    border-radius: 12px;

    :deep(.van-field__body) {
      height: 100%;
    }

    :deep(.van-field__control) {
      height: 100%;
      font-size: 15px;
      line-height: 52px;
    }
  }

  .register-page__gender {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .register-page__gender-btn {
    height: 52px;
    padding: 0 16px;
    overflow: hidden;
    font-size: 21px;
    font-weight: 900;
    line-height: 52px;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background: #454545;
    border: 0;
    border-radius: 999px;
  }

  .register-page__gender-btn.is-active {
    background: linear-gradient(135deg, rgba(29, 0, 217, 1), rgba(151, 93, 227, 1));
    border: 1px solid #fff;
  }

  .register-page__submit {
    display: flex;
    justify-content: center;
    margin-top: 64px;
  }
</style>
