import { showLoginAlert } from '@/hooks/useDetail'
// hooks/useAuth.ts
import { useUserStore } from '@/stores'

export const useAuth = () => {
  const { userInfo } = useUserStore()

  const checkLogin = () => {
    if (userInfo?.userId === '6') {
      showLoginAlert()
      return false
    }
    return true
  }

  return {
    checkLogin
  }
}
