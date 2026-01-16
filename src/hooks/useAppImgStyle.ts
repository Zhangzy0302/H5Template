/**
 * 全局图片配置项
 */

import LeftIcon from '@/assets/images/joii_icon_arrow_left.png'
import RightIcon from '@/assets/images/joii_icon_arrow_right.png'
import GoChat from '@/assets/images/joii_icon_chat.png'
import Message from '@/assets/images/joii_icon_comment.png'
import Add from '@/assets/images/joii_icon_follow.png'
import Like from '@/assets/images/joii_icon_like.png'
import SendIcon from '@/assets/images/joii_icon_send.png'
import DialogBox from '@/assets/images/joii_no_money_bg.png'
import loveIcon from '@/assets/images/love.svg'
import RightMore from '@/assets/nav-bar/more.svg'

export const useAppImgStyle = () => {
  /** 输入框右侧图标 */
  const inputSendIcon = computed(() => SendIcon)

  /** 首页详情页点赞图标 */
  const detailLikeIcon = computed(() => loveIcon)

  /** 举报图标 */
  const reportIcon = computed(() => RightMore)

  /** 返回图标 */
  const backIcon = computed(() => LeftIcon)

  /** 聊天机器人页面底部按钮图标 */
  const chatBtnIcon = computed(() => RightIcon)
  /** 背景图 */
  const chatBgImage = computed(() => DialogBox)
  /** ========== */

  /** 短视频添加图标 */
  const addIcon = computed(() => Add)
  /** 短视频留言图标 */
  const messageIcon = computed(() => Message)
  /** 短视频点赞图标 */
  const likeIcon = computed(() => Like)

  /** 其它主页添加图标 */
  const otherHomeAddIcon = computed(() => Add)
  /** 其它主页留言图标 */
  const otherHomeMessageIcon = computed(() => GoChat)
  /** 其它主页点赞图标 */
  const otherHomeLikeIcon = computed(() => Like)

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
