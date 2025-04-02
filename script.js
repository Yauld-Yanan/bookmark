// 预定义的书签数据
const bookmarks = [
    {
        id: '1',
        name: '腾讯元宝',
        url: 'https://yuanbao.tencent.com/chat/naQivTmsDa?yb_channel=3003',
        category: 'AI',
        ico: "https://cdn-bot.hunyuan.tencent.com/logo.png",
        description: '腾讯元宝'
    },
    {
        id: '2',
        name: 'DeepSeek',
        url: 'https://chat.deepseek.com/',
        category: 'AI',
        ico: "https://cdn.deepseek.com/chat/icon.png",
        description: 'DeepSeek'
    },
    {
        id: '3',
        name: 'ChatGPT',
        url: 'https://chatgpt.com/',
        category: 'AI',
        ico: "https://cdn.oaistatic.com/assets/favicon-miwirzcw.ico",
        description: 'ChatGPT'
    },
    {
        id: '4',
        name: 'Claude',
        url: 'https://www.anthropic.com/claude',
        category: 'AI',
        ico: "https://www.anthropic.com//images/icons/favicon-32x32.png",
        description: 'Claude'
    },
    {
        id: '5',
        name: 'Grok',
        url: 'https://x.ai/',
        category: 'AI',
        ico: "https://x.ai/favicon.ico",
        description: 'Grok'
    },
    {
        id: '6',
        name: '通义千问',
        url: 'https://tongyi.aliyun.com/qianwen/',
        category: 'AI',
        ico: "https://img.alicdn.com/imgextra/i4/O1CN01EfJVFQ1uZPd7W4W6i_!!6000000006051-2-tps-112-112.png",
        description: '通义千问'
    },
    {
        id: '7',
        name: 'Kimi助手',
        url: 'https://kimi.moonshot.cn/',
        category: 'AI',
        ico: "https://statics.moonshot.cn/kimi-chat/favicon.ico",
        description: 'Kimi助手'
    },
    {
        id: '8',
        name: '文心一言',
        url: 'https://yiyan.baidu.com/',
        category: 'AI',
        ico: "https://nlp-eb.cdn.bcebos.com/logo/favicon.ico",
        description: '文心一言'
    },

    {
        id: '9',
        name: '豆包',
        url: 'https://www.doubao.com/chat/',
        category: 'AI',
        ico: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png",
        description: '豆包'
    },

    {
        id: '10',
        name: '海螺问问',
        url: 'https://hailuoai.com/chat',
        category: 'AI',
        ico: "https://chat.minimaxi.com/assets/logo/favicon.png?v=3",
        description: '海螺问问'
    },

    {
        id: '11',
        name: '跃问',
        url: 'https://yuewen.cn/chats/new',
        category: 'AI',
        ico: "https://yuewen.cn/svg/favicon.svg",
        description: '跃问'
    },

    {
        id: '12',
        name: '秘塔搜索',
        url: 'https://metaso.cn/',
        category: 'AI',
        ico: "https://metaso.cn/favicon.ico",
        description: '秘塔搜索'
    },

    {
        id: '13',
        name: '360AI搜索',
        url: 'https://www.sou.com/',
        category: 'AI',
        ico: "https://www.sou.com/favicon.ico",
        description: '360AI搜索'
    },

    {
        id: '14',
        name: '扣子',
        url: 'https://www.coze.cn/',
        category: 'AI',
        ico: "https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png",
        description: '扣子'
    },

    {
        id: '15',
        name: '即梦',
        url: 'https://jimeng.jianying.com/ai-tool/home​',
        category: 'AI',
        ico: "https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/common/images/dreamina-v5.ico",
        description: '即梦'
    },

    {
        id: '16',
        name: '通义万相',
        url: 'https://tongyi.aliyun.com/wanxiang/',
        category: 'AI',
        ico: "https://alidocs.oss-accelerate.aliyuncs.com/res/oJGq76v5aMRynAKe/img/1b1b81ce-1625-4851-b015-09eb7b99872f.svg",
        description: '通义万相'
    },

    {
        id: '17',
        name: '阿里堆友',
        url: 'https://d.design/ai/edit?entry=HOME&mode=lite',
        category: 'AI',
        ico: "https://img.alicdn.com/imgextra/i2/O1CN01chTRfM1RHRCkxMMSn_!!6000000002086-0-tps-200-200.jpg",
        description: '阿里堆友'
    },

    {
        id: '18',
        name: '可灵',
        url: 'https://kling.kuaishou.com/',
        category: 'AI',
        ico: "https://s2-111386.kwimgs.com/bs2/mmu-aiplatform-temp/kling/kling-logo.png?x-oss-process=image/resize,m_mfit,w_50",
        description: '可灵'
    },

    // {
    //     id: '19',
    //     name: '即梦',
    //     url: 'https://jimeng.jianying.com/ai-tool/home',
    //     category: 'AI',
    //     ico: "https://jimeng.jianying.com/ai-tool/home/favicon.ico",
    //     description: '即梦'
    // },

    {
        id: '20',
        name: '佐糖',
        url: 'https://picwish.cn/?apptype=aps-pin',
        category: 'AI',
        ico: "https://qncdn.aoscdn.com/favicon.ico",
        description: '佐糖'
    },

    {
        id: '21',
        name: 'Canva',
        url: 'https://www.canva.cn/',
        category: 'AI',
        ico: "https://static.canva.cn/static/images/favicon-1.ico",
        description: 'Canva'
    },
    {
        id: '22',
        name: '稿定设计',
        url: 'https://www.gaoding.com/',
        category: 'AI',
        ico: "https://cdn.dancf.com/fe-assets/20230811/logo/favicon@w64.ico",
        description: '稿定设计'
    },
    {
        id: '23',
        name: '美图设计室',
        url: 'https://www.designkit.com/',
        category: 'AI',
        ico: "https://cdn.dancf.com/fe-assets/20230811/logo/favicon@w64.ico",
        description: '美图设计室'
    },
    {
        id: '24',
        name: '标小志',
        url: 'https://www.logosc.cn/',
        category: 'AI',
        ico: "https://www.logosc.cn/img/logo-icons/logosc-new.svg",
        description: '标小志'
    },
    {
        id: '25',
        name: 'Looka',
        url: 'https://looka.com/',
        category: 'AI',
        ico: "https://www.designkit.com/favicon.ico",
        description: 'Looka'
    },
    {
        id: '26',
        name: 'LogoDiffusion',
        url: 'https://logodiffusion.com/',
        category: 'AI',
        ico: "https://cdn.prod.website-files.com/67319ecc5a80fcb0f18f2e74/673dddcbc136fc622fbbb019_Group%2040393.png",
        description: 'LogoDiffusion'
    },
    {
        id: '27',
        name: 'anime',
        url: 'https://anime-pictures.net/',
        category: 'images',
        ico: "https://anime-pictures.net/favicon.ico",
        description: 'anime'
    },
    {
        id: '28',
        name: '极简壁纸',
        url: 'https://bz.zzzmh.cn/index',
        category: 'images',
        ico: "https://bz.zzzmh.cn/img/icons/favicon-32x32.png",
        description: '极简壁纸'
    },
    {
        id: '29',
        name: '至美',
        url: 'https://zhutix.com/wallpaper/',
        category: 'images',
        ico: "https://zhutix.com/favicon.ico",
        description: '至美'
    },
    {
        id: '30',
        name: '哲风壁纸',
        url: 'https://www.haowallpaper.com/',
        category: 'images',
        ico: "https://www.haowallpaper.com/favicon.ico",
        description: '哲风壁纸'
    },
    {
        id: '31',
        name: '壁纸湖',
        url: 'https://bizihu.com/?www.xijitu.com=1',
        category: 'images',
        ico: "https://bizihu.com/fliee/ico.png",
        description: '壁纸湖'
    },
    {
        id: '32',
        name: '必应壁纸',
        url: 'https://bing.xinac.net/?www.xijitu.com=1',
        category: 'images',
        ico: "https://s.xinac.net/favicon.ico",
        description: '必应壁纸'
    },
    {
        id: '33',
        name: '4K壁纸网',
        url: 'https://www.bizhi99.com/3840x2160/',
        category: 'images',
        ico: "https://www.bizhi99.com/favicon.ico",
        description: '4K壁纸网'
    },
    {
        id: '34',
        name: '中关村壁纸',
        url: 'http://desk.zol.com.cn/',
        category: 'images',
        ico: "https://desk.zol.com.cn/favicon.ico",
        description: '中关村壁纸（4K／多分类）'
    },
    {
        id: '35',
        name: 'Pexels',
        url: 'https://www.pexels.com/zh-cn/',
        category: 'images',
        ico: "https://www.pexels.com/favicon.ico",
        description: 'Pexels'
    },
    {
        id: '36',
        name: '壁纸汇',
        url: 'https://www.bizhihui.com/',
        category: 'images',
        ico: "https://s.panlai.com/images/favicon.ico",
        description: '壁纸汇'
    },
    {
        id: '37',
        name: 'Wallspic',
        url: 'https://wallspic.com/cn',
        category: 'images',
        ico: "https://wallspic.com/static/images/favicon/favicon-32x32.png",
        description: 'Wallspic'
    },
    {
        id: '38',
        name: 'wallpaperscraft',
        url: 'https://wallpaperscraft.com/',
        category: 'images',
        ico: "https://wallpaperscraft.com/public/img/general/favicon.ico?v=1739404bd",
        description: 'wallpaperscraft'
    },
    {
        id: '39',
        name: 'BeautyYourDesktop',
        url: 'https://www.10wallpaper.com/',
        category: 'images',
        ico: "https://wallpaperscraft.com/public/img/general/favicon.ico?v=1739404bd",
        description: 'BeautyYourDesktop'
    },
    {
        id: '40',
        name: '商量',
        url: 'https://chat.sensetime.com/',
        category: 'AI',
        ico: "https://sensechat-ml.aoss.cn-sh-01.sensecoreapi-oss.cn/chat/prod/wb/favicon_ml.png",
        description: '商量'
    },
    {
        id: '40',
        name: 'ClearPNG',
        url: 'https://www.cleanpng.com/',
        category: 'images',
        ico: "https://www.cleanpng.com/favicon.ico",
        description: 'ClearPNG'
    },
    {
        id: '41',
        name: 'GameWallpapers',
        url: 'https://www.gamewallpapers.com/',
        category: 'images',
        ico: "https://www.cleanpng.com/favicon.ico",
        description: 'GameWallpapers'
    },
    {
        id: '42',
        name: 'WallHere 壁纸库',
        url: 'https://wallhere.com/',
        category: 'images',
        ico: "https://www.gamewallpapers.com/favicon.ico",
        description: 'WallHere 壁纸库'
    },
    {
        id: '43',
        name: '至美壁纸',
        url: 'https://zhutix.com/wallpaper/',
        category: 'images',
        ico: "https://zhutix.com/favicon.ico",
        description: '至美壁纸'
    },
    {
        id: '44',
        name: '彼岸图网',
        url: 'https://pic.netbian.com/',
        category: 'images',
        ico: "https://pic.netbian.com/favicon.ico",
        description: '彼岸图网'
    },
    {
        id: '45',
        name: '美化你的桌面',
        url: 'https://10wallpaper.com/cn/',
        category: 'images',
        ico: "https://10wallpaper.com/favicon.ico",
        description: '美化你的桌面'
    },
    {
        id: '46',
        name: 'Wallpapers',
        url: 'https://www.goodfon.com/',
        category: 'images',
        ico: "https://www.goodfon.com/static/favicon.svg?v=16",
        description: 'Wallpapers'
    },
    {
        id: '47',
        name: 'Social Wallpapering',
        url: 'https://www.socwall.com/',
        category: 'images',
        ico: "https://www.socwall.com/images/favicon.ico",
        description: 'Social Wallpapering'
    },
    {
        id: '48',
        name: '天堂磁力',
        url: 'https://tt6.ttcl.cc/',
        category: 'MagneticSearch',
        ico: "https://tt6.ttcl.cc/favicon.ico",
        description: '天堂磁力'
    },
    {
        id: '49',
        name: '磁力星球',
        url: 'https://so5.xingqiu.icu/',
        category: 'MagneticSearch',
        ico: "https://so5.xingqiu.icu/favicon.ico",
        description: '磁力星球'
    },
    {
        id: '50',
        name: 'BT1027',
        url: 'https://bt1207gb.top/',
        category: 'MagneticSearch',
        ico: "https://prod.b5.howcdn.com/img/bt1207/favicon.png",
        description: 'BT1027'
    },
    {
        id: '51',
        name: '磁力狐',
        url: 'https://bt31.foxs.vip/',
        category: 'MagneticSearch',
        ico: "https://i.loli.net/2021/10/18/7T4bMNpPDGRkyCV.png",
        description: '磁力狐'
    },
    {
        id: '52',
        name: '无极磁力',
        url: 'https://xcili.net/',
        category: 'MagneticSearch',
        ico: "https://xcili.net/favicon.ico",
        description: '无极磁力'
    },
    {
        id: '53',
        name: 'Yiove磁力搜索',
        url: 'https://bt.iaaaaa.com/',
        category: 'MagneticSearch',
        ico: "https://bt.iaaaaa.com/favicon.ico",
        description: 'Yiove磁力搜索'
    },
    {
        id: '54',
        name: '磁力多',
        url: 'https://ou.dobt.top/',
        category: 'MagneticSearch',
        ico: "https://ou.dobt.top/favicon.png",
        description: '磁力多'
    },
    {
        id: '55',
        name: 'SkrBT',
        url: 'https://skrbtgb.top/',
        category: 'MagneticSearch',
        ico: "https://prod.b5.howcdn.com/img/skrbt/favicon.png",
        description: 'SkrBT'
    },
    {
        id: '56',
        name: 'BT联盟',
        url: 'https://btlm.info/',
        category: 'MagneticSearch',
        ico: "https://btlm.info/favicon.png",
        description: 'BT联盟'
    },
    {
        id: '57',
        name: '磁力帝',
        url: 'https://kueawljv.1122128.xyz/',
        category: 'MagneticSearch',
        ico: "https://btlm.info/favicon.png",
        description: '磁力帝'
    },
    {
        id: '58',
        name: '豌豆PRO',
        url: 'https://wandou.la/',
        category: 'television',
        ico: "https://www.wandou.la/_next/static/media/headlogo.84672dbf.png",
        description: '豌豆PRO'
    },
    {
        id: '59',
        name: '追剧猫',
        url: 'https://zhuiyingmao5.com/',
        category: 'television',
        ico: "https://zhuiyingmao5.com/mxtheme/images/favicon.png",
        description: '追剧猫'
    },
    {
        id: '60',
        name: '51剧搜',
        url: 'https://51souju1.com/',
        category: 'television',
        ico: "https://51souju1.com/upload/site/20240308-1/d1b8cb820ccfd75329e10a9f4814d08b.png",
        description: '51剧搜'
    },
    {
        id: '61',
        name: '搜片',
        url: 'https://soupian.pro/',
        category: 'television',
        ico: "https://51souju1.com/upload/site/20240308-1/d1b8cb820ccfd75329e10a9f4814d08b.png",
        description: '搜片'
    },
    {
        id: '62',
        name: '影猫の仓库',
        url: 'https://ymck.pro/',
        category: 'television',
        ico: "https://ymck.pro/upload/site/20230825-1/5c00fbcfb4ff0737d3c8320d30b2d1de.png",
        description: '影猫の仓库'
    },
    {
        id: '63',
        name: '影搜',
        url: 'https://xn--p3tv7h.com/',
        category: 'television',
        ico: "https://ymck.pro/upload/site/20230825-1/5c00fbcfb4ff0737d3c8320d30b2d1de.png",
        description: '影搜'
    },
    {
        id: '64',
        name: 'MXONE',
        url: 'https://www.xmxone.cn/',
        category: 'television',
        ico: "https://www.xmxone.cn/mxtheme/images/logo.png",
        description: 'MXONE'
    },
    {
        id: '65',
        name: '7080影视搜',
        url: 'https://7080.wang/',
        category: 'television',
        ico: "https://7080.wang/img/index-logo.png",
        description: '7080影视搜'
    },
    {
        id: '66',
        name: '麻雀视频',
        url: 'https://www.mqtv.cc/',
        category: 'television',
        ico: "https://www.mqtv.cc/asset/img/favicon.png",
        description: '麻雀视频'
    },
    {
        id: '67',
        name: '看片狂人',
        url: 'https://kpkuang.sbs/',
        category: 'television',
        ico: "https://kpkuang.sbs/favicon.ico",
        description: '看片狂人'
    },
    // {
    //     id: '68',
    //     name: 'A8影视',
    //     url: 'https://a8ys.vip/',
    //     category: 'television',
    //     ico: "https://7080.wang/favicon.ico",
    //     description: 'A8影视'
    // },
    {
        id: '69',
        name: '麦田影院',
        url: 'https://www.mtyy1.com/',
        category: 'television',
        ico: "https://www.mtyy1.com/static/ds6/img/favicon.ico",
        description: '麦田影院'
    },
    {
        id: '70',
        name: '看B站',
        url: 'https://kanb.tv/#google_vignette',
        category: 'television',
        ico: "https://www.mtyy1.com/static/ds6/img/favicon.ico",
        description: '看B站'
    },
    {
        id: '71',
        name: '侠客影视',
        url: 'http://xkys.link/',
        category: 'television',
        ico: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVQI12P4//8/AAX+Av7czFnnAAAAAElFTkSuQmCC",
        description: '侠客影视'
    },
    {
        id: '72',
        name: '可达影视',
        url: 'https://www.kedays.org/',
        category: 'television',
        ico: "https://www.kedays.org/favicon.ico",
        description: '可达影视'
    },
    {
        id: '73',
        name: '饺子影院',
        url: 'https://www.jiaozi.me/',
        category: 'television',
        ico: "https://www.jiaozi.me/favicon.ico",
        description: '饺子影院'
    },
    // {
    //     id: '74',
    //     name: '厂长资源',
    //     url: 'https://www.czys.pro/',
    //     category: 'television',
    //     ico: "https://www.czys.pro/favicon.ico",
    //     description: '厂长资源'
    // },
    // {
    //     id: '75',
    //     name: 'NO视频',
    //     url: 'https://www.novipnoad.net/',
    //     category: 'television',
    //     ico: "https://www.czys.pro/favicon.ico",
    //     description: 'NO视频'
    // },
    {
        id: '76',
        name: '低端影视',
        url: 'https://ddys.pro/',
        category: 'television',
        ico: "https://ddys.pro/favicon-32x32.png",
        description: '低端影视'
    },
    {
        id: '77',
        name: '奈飞工厂',
        url: 'https://www.netflixgc.com/',
        category: 'television',
        ico: "https://www.netflixgc.com/.safeline/static/favicon.png",
        description: '奈飞工厂'
    },
    {
        id: '78',
        name: '在线之家',
        url: 'https://www.zxzjhd.com/',
        category: 'television',
        ico: "https://www.zxzjhd.com/statics/img/favicon.ico",
        description: '在线之家'
    },
    {
        id: '79',
        name: '热门网络短剧',
        url: 'http://www.yingshicun.com/',
        category: 'television',
        ico: "http://www.yingshicun.com/favicon.ico",
        description: '热门网络短剧'
    },
    {
        id: '80',
        name: 'NEX字幕组',
        url: 'https://nz99.xyz/index.html',
        category: 'television',
        ico: "https://nz99.xyz/favicon.ico",
        description: 'NEX字幕组'
    },
    {
        id: '81',
        name: 'MYFREEMP3',
        url: 'https://tool.liumingye.cn/music/?page=searchPage#/',
        category: 'music',
        ico: "https://ae01.alicdn.com/kf/H085a1499a38d4d8a920a396abceffa2bW.jpg",
        description: 'MYFREEMP3'
    },
    {
        id: '82',
        name: '熊猫无损音乐',
        url: 'https://www.xmwav.com/',
        category: 'music',
        ico: "https://ae01.alicdn.com/kf/H085a1499a38d4d8a920a396abceffa2bW.jpg",
        description: '熊猫无损音乐'
    },
    {
        id: '83',
        name: '放屁音乐网',
        url: 'https://www.fangpi.net/',
        category: 'music',
        ico: "https://www.fangpi.net/favicon.ico",
        description: '放屁音乐网'
    },
    {
        id: '84',
        name: '88影视网',
        url: 'https://www.88tvs.cn/',
        category: 'television',
        ico: "https://www.88tvs.cn/favicon.png",
        description: '88影视网'
    },
    {
        id: '85',
        name: '鸭梨视讯',
        url: 'https://www.yalishi.com/',
        category: 'television',
        ico: "https://www.yalishi.com/template/a_0011/assets/images/favicon.ico?v=20230523",
        description: '鸭梨视讯'
    },
    {
        id: '86',
        name: '旋风视频',
        url: 'https://miao101.com/',
        category: 'television',
        ico: "https://miao101.com/fs/static/logo.png",
        description: '旋风视频'
    },
    {
        id: '87',
        name: '磁力熊',
        url: 'https://www.cilixiong.org/',
        category: 'television',
        ico: "https://www.cilixiong.org/favicon.ico",
        description: '磁力熊'
    },
    {
        id: '88',
        name: '鸭梨视讯',
        url: 'https://www.yalishi.com/',
        category: 'television',
        ico: "https://www.yalishi.com/template/a_0011/assets/images/favicon.ico?v=20230523",
        description: '鸭梨视讯'
    },
    {
        id: '89',
        name: 'PDF转图片',
        url: 'https://www.jyshare.com/front-end/7271/',
        category: 'holdall',
        ico: "https://static.jyshare.com/images/c-runoob-logo.ico",
        description: 'PDF转图片'
    },
    {
        id: '90',
        name: '在线白板',
        url: 'https://visionon.cn/clipboard',
        category: 'holdall',
        ico: "https://visionon.cn/v-logo-2.png",
        description: '在线白板'
    },
    {
        id: '91',
        name: '画板',
        url: 'https://excalidraw.com/',
        category: 'holdall',
        ico: "https://excalidraw.com/favicon-32x32.png",
        description: '画板'
    },
    {
        id: '92',
        name: 'icon图标在线生成',
        url: 'https://www.ico51.cn/',
        category: 'holdall',
        ico: "https://www.ico51.cn/favicon.ico",
        description: 'icon图标在线生成'
    },
    {
        id: '93',
        name: '图床',
        url: 'https://telegraph-image-92x.pages.dev/',
        category: 'holdall',
        ico: "https://telegraph-image-92x.pages.dev/favicon.ico",
        description: '图床'
    },
    {
        id: '94',
        name: 'ME2在线工具',
        url: 'https://www.metools.info/?ref=www.myxinwen.top',
        category: 'holdall',
        ico: "https://www.metools.info/skin/images/toolicon.png",
        description: 'ME2在线工具'
    },
    {
        id: '95',
        name: '视频网址解析下载',
        url: 'https://greenvideo.cc/',
        category: 'holdall',
        ico: "https://greenvideo.cc/favicon.ico",
        description: '视频网址解析下载'
    },
    {
        id: '96',
        name: 'PS在线版',
        url: 'https://www.nuanque.com/ps/',
        category: 'holdall',
        ico: "https://www.nuanque.com/favicon.ico",
        description: 'PS在线版'
    },
    {
        id: '97',
        name: '颜色对照表',
        url: 'https://bbs.bianzhirensheng.com/color01.html',
        category: 'holdall',
        ico: "https://bbs.bianzhirensheng.com/favicon.ico",
        description: '颜色对照表'
    },
    {
        id: '98',
        name: '图好快',
        url: 'https://www.tuhaokuai.com/?ref=www.myxinwen.top',
        category: 'holdall',
        ico: "https://www.tuhaokuai.com/themes/default/images/fav.ico",
        description: '在线图片压缩'
    },
    {
        id: '99',
        name: 'SVG在线编辑器',
        url: 'https://www.jyshare.com/more/svgeditor/?ref=www.myxinwen.top',
        category: 'holdall',
        ico: "https://www.jyshare.com/more/svgeditor/images/favicon.svg",
        description: 'SVG在线编辑器'
    },
    {
        id: '100',
        name: 'icon图标制作',
        url: 'https://www.dute.org/ico-converter?ref=www.myxinwen.top',
        category: 'holdall',
        ico: "https://cdn-v2.tool.dute.me/assets/images/web/favicon.ico",
        description: 'icon图标制作'
    },
    {
        id: '101',
        name: 'PDF工具',
        url: 'https://pdf.io/tw/?ref=www.myxinwen.top',
        category: 'holdall',
        ico: "https://pdf.io/static/i/v3/favicon.svg",
        description: 'PDF工具'
    },
    {
        id: '102',
        name: '在线转换器',
        url: 'https://cn.office-converter.com/?ref=www.myxinwen.top',
        category: 'holdall',
        ico: "https://cn.office-converter.com/images/favicon.ico",
        description: '免费快速在线将pdf, 图像, 视频, 文档, 音频, 电子书及压缩等文件格式转换为其他格式'
    },
    {
        id: '103',
        name: '万兴hiPDF',
        url: 'https://www.hipdf.cn/?ref=www.myxinwen.top',
        category: 'holdall',
        ico: "https://www.hipdf.cn/favicon.ico",
        description: '万兴hiPDF'
    },
    {
        id: '104',
        name: 'iLovePDF',
        url: 'https://www.ilovepdf.com/zh-cn?ref=www.myxinwen.top',
        category: 'holdall',
        ico: "https://www.ilovepdf.com/img/favicons-pdf/favicon-32x32.png",
        description: 'iLovePDF'
    },
    {
        id: '105',
        name: 'mmPlayer',
        url: 'https://netease-music.fe-mm.com/#/music/details/19723756',
        category: 'music',
        ico: "https://netease-music.fe-mm.com/favicon.ico",
        description: 'mmPlayer'
    },







];

let currentCategory = 'all';

// DOM 元素
const bookmarksList = document.getElementById('bookmarks-list');
const categoriesList = document.getElementById('categories');

// 初始化页面
// 添加主题切换功能
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
    });
}

// 在init函数中调用
function init() {
    renderBookmarks();
    setupEventListeners();
    setupThemeToggle(); // 添加这一行
}

// 书签列表随机颜色渲染
// function renderBookmarks() {
//     bookmarksList.innerHTML = '';

//     let filteredBookmarks = bookmarks;

//     if (currentCategory !== 'all') {
//         filteredBookmarks = filteredBookmarks.filter(bookmark => bookmark.category === currentCategory);
//     }

//     if (filteredBookmarks.length === 0) {
//         bookmarksList.innerHTML = '<p class="no-bookmarks">没有找到书签</p>';
//         return;
//     }

//     filteredBookmarks.forEach(bookmark => {
//         const bookmarkCard = document.createElement('div');
//         bookmarkCard.className = 'bookmark-card';
//         bookmarkCard.classList.add(`category-${bookmark.category}`);

//         // 生成随机颜色并设置透明度
//         const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
//         const randomBg = `rgba(${parseInt(bgColor.slice(1, 3), 16)}, ${parseInt(bgColor.slice(3, 5), 16)}, ${parseInt(bgColor.slice(5, 7), 16)}, 0.2)`;

//         bookmarkCard.innerHTML = `
//             <div class="category-indicator" style="background-color: ${bgColor}"></div>
//             <h3><a href="${bookmark.url}" target="_blank">${bookmark.name}</a></h3>
//             <p>${bookmark.description || ''}</p>
//             ${bookmark.ico ? `<img class="bookmark-icon" src="${bookmark.ico}" alt="${bookmark.name}图标">` : '<div class="bookmark-icon">🔗</div>'}
//         `;
//         // 设置卡片背景色
//         bookmarkCard.style.backgroundColor = randomBg;
//         bookmarksList.appendChild(bookmarkCard);
//     });
// }

// function renderBookmarks() {
//     bookmarksList.innerHTML = '';

//     let filteredBookmarks = bookmarks;

//     if (currentCategory !== 'all') {
//         filteredBookmarks = filteredBookmarks.filter(bookmark => bookmark.category === currentCategory);
//     }

//     if (filteredBookmarks.length === 0) {
//         bookmarksList.innerHTML = '<p class="no-bookmarks">没有找到书签</p>';
//         return;
//     }

//     filteredBookmarks.forEach(bookmark => {
//         const bookmarkCard = document.createElement('div');
//         bookmarkCard.className = 'bookmark-card';
//         bookmarkCard.classList.add(`category-${bookmark.category}`);

//         // 移除随机背景色生成代码，使用CSS中的默认样式
//         bookmarkCard.innerHTML = `
//             <div class="category-indicator"></div>
//             <h3><a href="${bookmark.url}" target="_blank">${bookmark.name}</a></h3>
//             <p>${bookmark.description || ''}</p>
//             ${bookmark.ico ? `<img class="bookmark-icon" src="${bookmark.ico}" alt="${bookmark.name}图标">` : '<div class="bookmark-icon">🔗</div>'}
//         `;
//         bookmarksList.appendChild(bookmarkCard);
//     });
// }

function renderBookmarks() {
    bookmarksList.innerHTML = '';

    let filteredBookmarks = bookmarks;

    if (currentCategory !== 'all') {
        filteredBookmarks = filteredBookmarks.filter(bookmark => bookmark.category === currentCategory);
    }

    if (filteredBookmarks.length === 0) {
        bookmarksList.innerHTML = '<p class="no-bookmarks">没有找到书签</p>';
        return;
    }

    // 预加载第一屏图片
    const firstScreenBookmarks = filteredBookmarks.slice(0, 12);
    firstScreenBookmarks.forEach(bookmark => {
        if (bookmark.ico) {
            const img = new Image();
            img.src = bookmark.ico;
        }
    });

    filteredBookmarks.forEach(bookmark => {
        const bookmarkCard = document.createElement('div');
        bookmarkCard.className = 'bookmark-card';
        bookmarkCard.classList.add(`category-${bookmark.category}`);

        bookmarkCard.innerHTML = `
            <div class="category-indicator"></div>
            <h3><a href="${bookmark.url}" target="_blank">${bookmark.name}</a></h3>
            <p>${bookmark.description || ''}</p>
            ${bookmark.ico ? 
                `<img class="bookmark-icon" 
                      loading="lazy" 
                      src="${bookmark.ico}" 
                      alt="${bookmark.name}图标"
                      onerror="this.onerror=null;this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMCAxOGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNnptLTUtNWgxMHYySDd2LTJ6Ii8+PC9zdmc+'">` : 
                '<div class="bookmark-icon">🔗</div>'}
        `;
        bookmarksList.appendChild(bookmarkCard);
    });
}

// 设置事件监听器
function setupEventListeners() {
    // 分类点击事件
    categoriesList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            currentCategory = e.target.dataset.category;
            document.querySelectorAll('#categories li').forEach(li => li.classList.remove('active'));
            e.target.classList.add('active');
            renderBookmarks();
        }
    });
}



// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
