/**
 * 全局图片配置项
 */

import Message from '@/assets/images/folick_ciwn_comment_button.png'
import DialogBox from '@/assets/images/folick_ciwn_dialog_bg.png'
import LeftIcon from '@/assets/images/folick_ciwn_icon_back.png'
import Chat from '@/assets/images/folick_ciwn_icon_comment.png'
import RightIcon from '@/assets/images/folick_ciwn_icon_rightarrow.png'
import SendIcon from '@/assets/images/folick_ciwn_icon_send.png'
import Like from '@/assets/images/folick_ciwn_like_button.png'
import loveIcon from '@/assets/images/folick_ciwn_like_button_fill.png'
import Add from '@/assets/images/folik_ciw_icon_add_follow.png'
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
  const otherHomeMessageIcon = computed(() => Chat)
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
