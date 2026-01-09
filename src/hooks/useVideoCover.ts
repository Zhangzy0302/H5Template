export interface UseVideoCoverReturn {
  extractCoverFromVideo: (file: File) => Promise<void>
  isExtracting: Ref<boolean>
  error: Ref<string | null>
}
export function useVideoCover(): UseVideoCoverReturn {
  const isExtracting = ref(true)
  const error = ref<string | null>(null)

  const extractCoverFromVideo = async (file: File): Promise<void> => {
    if (!file || !file.type.startsWith('video/')) {
      error.value = '请选择视频文件'
      return
    }

    isExtracting.value = true
    error.value = null
    const fileToBase64 = (file: File): Promise<string> =>
      new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = reject
      })

    try {
      const base64Video = await fileToBase64(file)

      if ((window as any).flutter_inappwebview?.callHandler) {
        const coverBase64: string | null = await (
          window as any
        ).flutter_inappwebview.callHandler(
          'generateVideoCover',
          base64Video
        )

        if (coverBase64) {
          // 触发事件给Vue组件
          const event = new CustomEvent('video-cover-ready', {
            detail: { cover: coverBase64, fileName: file.name }
          })
          window.dispatchEvent(event)
        } else {
          error.value = 'Flutter 处理封面失败'
        }
      } else {
        error.value = 'Flutter handler 不可用'
      }
    } catch (e: any) {
      console.error('[Web] extractCoverFromVideo error', e)
      error.value = e?.message ?? '未知错误'
    } finally {
      isExtracting.value = false
    }
  }

  return {
    extractCoverFromVideo,
    isExtracting,
    error
  }
}
