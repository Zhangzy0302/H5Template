/**
 * 样式配置模块
 * 包含整个应用的UI样式配置，用于统一管理各组件的外观样式
 */
export default {
  /** 返回按钮背景图 */
  backImage: 'src/assets/images/joii_icon_arrow_left.png',
  /** 返回图片大小 */
  backImageSize: {
    width: '24px',
    height: '24px'
  },
  /** 顶部右侧举报图片 */
  reportImage:
    'https://huanniuchat.oss-accelerate.aliyuncs.com/template_development/sivio_report.png',
  /** 举报图标大小 */
  reportImageSize: {
    width: '24px', //图标宽度
    height: '24px' //图标高度
  },
  /** 点赞图标 */
  likeIcon: 'src/assets/images/joii_icon_like_u.png',

  /** 点赞图标大小 */
  unlikeImageSize: {
    width: '40px', //图标宽度
    height: '40px' //图标高度
  },
  /** 点赞数量文本样式 */
  likeNumTextStyle: {
    fontSize: '12px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.8)'
  },
  /** 用户名文本样式 */
  userNameStyle: {
    fontSize: '16px',
    fontWeight: '900',
    color: 'rgba(255, 255, 255, 1)'
  },
  /** 头像样式（页面通用头像，小型的） */
  avatarStyle: { width: '32px', height: '32px' },
  /** 作品文本样式(内容，备注项) */
  proseTextStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgb(255, 255, 255)',
    sort: 'left'
  },
  /** 标签样式（如：描述下面的标签） */
  tagStyle: {
    backgroundColor: 'rgb(35, 30, 36)',
    borderRadius: '20px',
    width: '65px',
    height: '26px',
    fontSize: '12px',
    fontWeight: '400',
    color: 'rgb(255, 255, 255)'
  },
  /** 文本输入框（发送内容）样式 */
  inputStyle: {
    backgroundColor: 'rgba(62, 57, 63, 1)',
    borderRadius: '30px',
    width: '100%',
    height: '46px',
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.8)',
    placeholderCorlor: 'rgba(255, 255, 255, 0.4)',
    /** 右侧发送图标 */
    sendIcon: 'src/assets/images/joii_icon_send.png',
    sendIconWidth: '46px',
    sendIconHeight: '46px'
  },
  /** 表单标题样式 */
  formTitleStyle: {
    fontSize: '20px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: '20px'
  },
  /** 表单富文本样式 */
  formRichTextStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgba(15, 8, 26, 1)',
    placeholderCorlor: 'rgba(255, 255, 255, 0.4)'
  },
  /** 表单按钮样式 */
  formBtnStyle: {
    backgroundColor: 'rgba(57, 47, 74, 1)',
    borderRadius: '32px',
    fontSize: '16px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)'
  },
  /** 输入文本样式 */
  inputTextStyle: {
    borderRadius: '16px',
    placeholderCorlor: 'rgba(255, 255, 255, 0.4)',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '14px',
    fontWeight: '400',
    backgroundColor: '#231e24'
  },
  /** 高亮按钮样式 */
  highlightBtnStyle: {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor:
      'linear-gradient(270deg, rgba(151, 93, 227, 1) 0%, rgba(29, 0, 217, 1) 100%)'
  },
  /** 确认按钮样式 */
  confirmBtnStyle: {
    borderRadius: '20px',
    width: '182px',
    height: '46px',
    fontSize: '20px',
    fontWeight: '400'
  },
  /** 聊天列表样式 */
  chatListStyle: {
    avatarWidth: '44px',
    avatarHeight: '44px',
    borderRadius: '24px',
    /** 发送背景色 */
    sendBgColor: '#434044',
    /** 接收背景色 */
    receiveBgColor:
      'linear-gradient(157.71deg, rgba(255, 94, 135, 1) 0%, rgba(71, 252, 255, 1) 100%)'
  },
  /** 举报按钮 */
  reportBtnStyle: {
    /** 选择项按钮 */
    selectBtnStyle: {
      width: '260px',
      height: '46px'
    },
    /** 取消按钮 */
    cancelBtnStyle: {
      width: '182px',
      height: '46px'
    }
  },
  /** 动态详情页 */
  articleDetailStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)'
  },
  /** 发布动态 */
  sendDynamicStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)'
  },
  /** 聊天机器人 */
  chatViewStyle: {
    /** 描述文本颜色 */
    textCorlor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(15, 8, 26, 1)',
    btnStyle: {
      width: '227px',
      height: '56px',
      color: 'rgba(255, 255, 255, 1)',
      rightIcon: 'src/assets/images/joii_icon_arrow_right.png',
      rightIconWidth: '21px',
      rightIconHeight: '21px'
    },
    /** 弹框样式 */
    popupStyle: {
      /** 标题文本 */
      titleTextStyle: {
        fontSize: '20px',
        fontWeight: '900',
        color: 'rgba(255, 255, 255, 1)'
      },
      /** 描述文本样式 */
      descTextStyle: {
        fontSize: '14px',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.8)'
      },
      /** 背景样式 */
      bgImageStyle: {
        width: '263px',
        height: '206px',
        bgImg: 'src/assets/images/joii_no_money_bg.png'
      }
    }
  },
  /** 聊天详情样式 */
  chatDetailsStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)',
    /** 顶部文本样式 */
    topTextStyle: {
      borderRadius: '20px',
      width: '190px',
      height: '36px',
      fontSize: '14px',
      fontWeight: '400',
      color: '#fff',
      backgroundColor: '#0d080d33'
    }
  },
  /** 短视频 */
  shortVideoStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)',
    /** 添加图标 */
    addIcon: 'src/assets/images/joii_icon_follow.png',
    addIconWidth: '24px',
    addIconHeight: '24px',
    /** 留言图标 */
    messageIcon: 'src/assets/images/joii_icon_comment.png',
    messageIconWidth: '40px',
    messageIconHeight: '40px',
    /** 点赞图标 */
    likeIcon: 'src/assets/images/joii_icon_like.png',
    avatarWidth: '40px',
    avatarHeight: '40px',
    /** 按钮样式 */
    btnStyle: {
      width: '100px',
      height: '53px',
      borderRadius: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }
  },
  /** 发布视频样式 */
  publishVideoStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)'
  },
  /** 其他用户主页样式 */
  otherHomeStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)',
    /** 关注他人图标 */
    addIcon: 'src/assets/images/joii_icon_follow.png',
    addIconWidth: '20px',
    addIconHeight: '20px',
    /** 留言图标 */
    messageIcon:
      'https://huanniuchat.oss-accelerate.aliyuncs.com/template_development/video_comments.png',
    messageIconWidth: '40px',
    messageIconHeight: '40px',
    /** 点赞图标 */
    likeIcon: 'src/assets/images/joii_icon_like.png',
    likeIconWidth: '40px',
    likeIconHeight: '40px',
    /** 顶部数据样式 */
    topDataStyle: {
      /** 说明 */
      descTextStyle: {
        fontSize: '20px',
        fontWeight: '400',
        color: '#fff'
      },
      /** 描述 */
      textTextStyle: {
        fontSize: '14px',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.7)'
      }
    },
    /** 左侧描述样式 */
    leftDescStyle: {
      fontSize: '16px',
      fontWeight: '400',
      color: '#fff'
    },
    /** 右侧按钮样式 */
    rightBtnStyle: {
      width: '162px',
      height: '53px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    /** 卡片说明 */
    cardDescStyle: {
      fontSize: '14px',
      fontWeight: '400',
      color: '#fff',
      sort: 'left'
    }
  },
  /** 举报样式 */
  reportIndexStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)',
    /** 选项样式 */
    selectBtnStyle: {
      width: '164px',
      height: '115px',
      borderRadius: '20px',
      backgroundColor: 'rgba(35, 30, 36, 1)',
      fontSize: '16px',
      fontWeight: '400',
      color: '#fff'
    }
  },
  /** 私聊样式 */
  privateChatStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)'
  },
  /** 设置页样式 */
  settingStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)',
    /** 按钮文本样式 */
    btnTextStyle: {
      backgroundColor:
        'linear-gradient(136deg, rgba(255, 94, 135, 1) 60%, rgba(71, 252, 255, 1) 100%)',
      fontSize: '16px',
      fontWeight: '400',
      color: '#fff'
    },
    /** 选择项样式 */
    selectBtnStyle: {
      width: '100%',
      height: '46px',
      borderRadius: '12px',
      backgroundColor:
        'linear-gradient(136deg, rgba(120, 223, 255, 0.064), rgba(240, 243, 255, 0.05) 100%)',
      color: '#fff',
      fontSize: '16px',
      fontWeight: '400'
    }
  },
  /** 关注页样式 */
  followStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)'
  },
  /** 粉丝页样式 */
  fansStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)'
  },
  /** 黑名单页样式 */
  blackListStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)'
  },
  /** 编辑页样式 */
  editStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)'
  },
  /** 金币充值 */
  coinStyle: {
    backgroundColor: 'rgba(15, 8, 26, 1)',
    /** 选项设置 */
    selectBtnStyle: {
      width: '105px',
      height: '100px',
      borderRadius: '24px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      selectedColor: 'rgba(15, 8, 26, 1)'
    }
  }
} satisfies Window['styleJson']
