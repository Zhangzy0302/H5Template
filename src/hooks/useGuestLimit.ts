import { useUserStore } from '@/stores'

const showGuestLimitDialog = ref(false)

export const useGuestLimit = () => {
  const { userInfo } = useUserStore()

  const isGuest = computed(() => String(userInfo?.userId ?? '') === '8')

  const showGuestLimit = () => {
    if (!isGuest.value) {
      return false
    }

    showGuestLimitDialog.value = true
    return true
  }

  const closeGuestLimit = () => {
    showGuestLimitDialog.value = false
  }

  const guardGuestAction = () => showGuestLimit()

  const onGuestLogin = async () => {
    closeGuestLimit()

    try {
      await window.flutter_inappwebview.callHandler('guestLogin')
    } catch (e) {
      console.warn('Flutter handler guestLogin 调用失败', e)
    }
  }

  return {
    isGuest,
    showGuestLimitDialog,
    showGuestLimit,
    closeGuestLimit,
    guardGuestAction,
    onGuestLogin
  }
}
