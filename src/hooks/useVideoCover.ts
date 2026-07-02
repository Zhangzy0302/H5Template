export interface UseVideoCoverReturn {
  extractCoverFromVideo: (file: File) => Promise<void>
  isExtracting: Ref<boolean>
  error: Ref<string | null>
}
export function useVideoCover(): UseVideoCoverReturn {
  const isExtracting = ref(true)
  const error = ref<string | null>(null)

  const dispatchCoverReady = (cover: string | null, fileName: string) => {
    const event = new CustomEvent('video-cover-ready', {
      detail: { cover, fileName }
    })
    window.dispatchEvent(event)
  }

  const getVideoCoverByBrowser = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video')
      const canvas = document.createElement('canvas')
      const objectUrl = URL.createObjectURL(file)
      let timer: ReturnType<typeof setTimeout>

      const cleanup = () => {
        clearTimeout(timer)
        URL.revokeObjectURL(objectUrl)
        video.removeAttribute('src')
        video.load()
      }

      const capture = () => {
        const width = video.videoWidth || 1
        const height = video.videoHeight || 1

        canvas.width = width
        canvas.height = height
        canvas.getContext('2d')?.drawImage(video, 0, 0, width, height)

        const cover = canvas.toDataURL('image/jpeg', 0.86)
        cleanup()
        resolve(cover)
      }

      timer = setTimeout(() => {
        cleanup()
        reject(new Error('获取封面超时'))
      }, 10000)

      video.muted = true
      video.playsInline = true
      video.preload = 'metadata'
      video.crossOrigin = 'anonymous'
      video.src = objectUrl

      video.onloadedmetadata = () => {
        const duration = Number.isFinite(video.duration)
          ? video.duration
          : 0
        const targetTime = duration > 1 ? 1 : Math.max(duration / 2, 0)

        if (targetTime <= 0) {
          capture()
          return
        }

        video.currentTime = targetTime
      }

      video.onseeked = capture
      video.onerror = () => {
        cleanup()
        reject(new Error('浏览器生成封面失败'))
      }

      video.load()
    })
  }

  const extractCoverFromVideo = async (file: File): Promise<void> => {
    if (!file || !file.type.startsWith('video/')) {
      error.value = '请选择视频文件'
      dispatchCoverReady(null, file?.name || '')
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
        const flutterCover = (
          window as any
        ).flutter_inappwebview.callHandler('generateVideoCover', base64Video)
        const coverBase64: string | null = await Promise.race([
          flutterCover,
          new Promise<null>(resolve => {
            setTimeout(() => resolve(null), 5000)
          })
        ]).catch(e => {
          console.warn('Flutter handler generateVideoCover 调用失败', e)
          return null
        })

        if (coverBase64) {
          dispatchCoverReady(coverBase64, file.name)
          return
        }
      }

      const coverBase64 = await getVideoCoverByBrowser(file)
      dispatchCoverReady(coverBase64, file.name)
    } catch (e: any) {
      console.error('[Web] extractCoverFromVideo error', e)
      error.value = e?.message ?? '未知错误'
      dispatchCoverReady(null, file.name)
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
