/**
 * 全局图片配置项
 */

import loveIcon from '@/assets/images/love.svg'
import SendIcon from '@/assets/images/joii_icon_send.png'
import LeftIcon from '@/assets/images/joii_icon_arrow_left.png'
import RightMore from '@/assets/nav-bar/more.svg'
import Add from '@/assets/images/joii_icon_follow.png'
import DialogBox from '@/assets/images/joii_no_money_bg.png'
import Like from '@/assets/images/joii_icon_like.png'
import Message from '@/assets/images/joii_icon_comment.png'
import GoChat from '@/assets/images/joii_icon_chat.png'
import RightIcon from '@/assets/images/joii_icon_arrow_right.png'

export const useAppImgStyle = () => {
  const styleJson = window.styleJson

  /** 输入框右侧图标 */
  const inputSendIcon = computed(
    () => styleJson?.inputStyle?.sendIcon || SendIcon
  )

  /** 首页详情页点赞图标 */
  const detailLikeIcon = computed(() => styleJson?.likeIcon || loveIcon)

  /** 举报图标 */
  const reportIcon = computed(() => styleJson?.reportImage || RightMore)

  /** 返回图标 */
  const backIcon = computed(() => styleJson?.backImage || LeftIcon)

  /** 聊天机器人页面底部按钮图标 */
  const chatBtnIcon = computed(
    () => styleJson?.chatViewStyle?.btnStyle?.rightIcon || RightIcon
  )
  /** 背景图 */
  const chatBgImage = computed(
    () =>
      styleJson?.chatViewStyle?.popupStyle?.bgImageStyle?.bgImg ||
      DialogBox
  )
  /** ========== */

  /** 短视频添加图标 */
  const addIcon = computed(
    () => styleJson?.shortVideoStyle?.addIcon || Add
  )
  /** 短视频留言图标 */
  const messageIcon = computed(
    () => styleJson?.shortVideoStyle?.messageIcon || Message
  )
  /** 短视频点赞图标 */
  const likeIcon = computed(
    () => styleJson?.shortVideoStyle?.likeIcon || Like
  )

  /** 其它主页添加图标 */
  const otherHomeAddIcon = computed(
    () => styleJson?.otherHomeStyle?.addIcon || Add
  )
  /** 其它主页留言图标 */
  const otherHomeMessageIcon = computed(() => GoChat)
  /** 其它主页点赞图标 */
  const otherHomeLikeIcon = computed(
    () => styleJson?.otherHomeStyle?.likeIcon || Like
  )

  return {
    inputSendIcon,
    detailLikeIcon,
    reportIcon,
    backIcon,
    chatBtnIcon,
    chatBgImage,
    addIcon,
    messageIcon,
    likeIcon,
    otherHomeAddIcon,
    otherHomeMessageIcon,
    otherHomeLikeIcon
  }
}
