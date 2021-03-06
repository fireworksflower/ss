Page({
  data: {
    // collected:true,
    ssLeftColor: "#ffffff",
    ssRightColor: "#E0210E",
    lists: [
      {
        imgUrl: util.ossAliyuncs + "/images/Screenshot_2016-12-13-10-19-12-215.png",
        title: "《高山流水》 - 古筝",
        info: "高山流水，梅花三弄，夕阳箫鼓，汉宫秋月，阳春白雪，渔樵问答，胡笳十八拍，广陵散，平沙落雁，十面埋伏。",
        avatar: util.ossAliyuncs + "/images/banner6.jpg",
        uName: "张珊珊",


        browse: 13299,
        like: 595,
        comment: 789,
        time: "刚刚"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/banner2.jpg",
        title: "女儿情-西游记 电视剧配乐原声",
        info: "九九八十一难，最难过的，其实是女儿国这一关，因为比起其他的艰难困苦来说，此时的唐僧是真的动心了，一句“来生若有缘分”道尽一切，只是为了心中崇高的理想，纵使心动也要断绝柔情继续西行。为国王惋惜，同时也对唐僧充满崇敬，尤其是了解了史上真实的唐玄奘以后，更是觉得此人了不起。",
        avatar: util.ossAliyuncs + "/images/banner5.jpg",
        uName: "麦田的守望者",
        browse: 32499,
        like: 222,
        comment: 789,
        time: "1小时前"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/Screenshot_2016-12-13-10-13-16-926.png",
        title: "犯错-双管巴乌",
        info: "小哥的声音真好。《一剪梅》改了这么多版，还是这版耐听。如泣如诉，余音袅袅。",
        avatar: util.ossAliyuncs + "/images/banner4.jpg",
        uName: "雨碎江南",


        browse: 4299,
        like: 2113,
        comment: 789,
        time: "昨天"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/Screenshot_2016-12-13-10-13-38-305.png",
        title: "车站-双管巴乌",
        info: "虽然但现在为止还没有去过彩云之南，但是这支曲子几乎包含了我全部的关于那里的畅想：绿油油的树林，精巧的竹楼，还有美丽的月光……太美了……",
        avatar: util.ossAliyuncs + "/images/banner3.jpg",
        uName: "小丸子",


        browse: 3299,
        like: 80,
        comment: 352,
        time: "2016-08-12"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/banner5.jpg",
        title: "美丽的神话-孙楠",
        info: "自从张艺谋《英雄》之后，国内开始了“拍大片”潮流，05年《无极》《神话》扎堆贺岁，《无极》因为《一个馒头引发的血案》成就了张柏芝谢霆锋的预言片，也算神作。《神话》剧情平平，只留下这首歌，记得这歌05年火了整整一整年啊，我惨绿的高中岁月啊。",
        avatar: util.ossAliyuncs + "/images/banner2.jpg",
        uName: "丶Song",
        browse: 23299,
        like: 810,
        comment: 221,
        time: "2016-12-13"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/banner6.jpg",
        title: "赛马-二胡独奏",
        info: "想起来武林外传里有一集，老白他们挖地道，小六拉这个曲，最后老白掉地道里了哈哈哈哈哈",
        avatar: util.ossAliyuncs + "/images/banner1.jpg",
        uName: "狂凝眉",
        browse: 3599,
        like: 134,
        comment: 12,
        time: "2016-12-12"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/bg0.jpg",
        title: "痴情冢-电视剧《新天龙八部》主题曲",
        info: "塞上旧约终成空，夜阑魂归应梦同。纵死未肯忘心盟，何妨濡沫泥涂中。雁字依稀相思浓，女儿痴情谁与共？从此相见殊参商，却无画图忆姣容。地匝万芦一鸿起，老翅不回缘情重。碧落黄泉两孤冢，君自南北我西东。”写了个同人，唱起来佶屈聱牙，但似乎比原歌词稍微贴合一点。",
        avatar: util.ossAliyuncs + "/images/bg2.jpg",
        uName: "Sarbanes-Oxley",
        browse: 3299,
        like: 80,
        comment: 789,
        time: "2016-12-12"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/bg01.jpg",
        title: "西海情歌-降央卓玛",
        info: "前天看了CCTV的top10点播的这首歌，现场版的，感觉歌手很美，歌声也犹如天籁",
        avatar: util.ossAliyuncs + "/images/bg2.jpg",
        uName: "Sarbanes-Oxley",
        browse: 3299,
        like: 80,
        comment: 789,
        time: "2016-12-12"
      }
    ],
    controls: true//是否显示播放控件
  },
  onLoad: function (options) {
    // var postId = options.id;
    // this.data.currentPostId = postId;
    // var posts1Collected = wx.getStorageSync('posts1_collected');
    // if (posts1Collected) {
    //   var post1Collected = posts1Collected[postId];
    //   this.setData({
    //     collected: post1Collected
    //   })
    // } else {
    //   var posts1Collected = {};
    //   posts1Collected[postId] = false;
    //   wx.setStorageSync('posts1_collected', posts1Collected);

    // }

    // xun
    let list = this.data.lists;
    for (let x = 0; x < list.length; x++) {
      list[x].is_like = false;
    }
    this.setData({
      lists: list
    })
    // let list01 = this.data.lists;
    // for(let x = 0;xc < list01.length;x++){
    //   list01[x].is_view = false;
    // }
    // this.setData({
    //   lists:list01
    // })
  },
  // collect01: function (e) {
  //   let that = this;
  //   let i = e.currentTarget.dataset.index;

  //   let t = that.data.lists;
  //   if (t[i].is_view) {
  //     t[i].view--;
  //   } else {
  //     t[i].view++;
  //   }
  //   t[i].is_view = !t[i].is_view;
  //   console.log(i);
  //   that.setData({
  //     lists: t
  //   });
  // },
  // xin
  collect: function (e) {
    let that = this;
    let i = e.currentTarget.dataset.index;

    let t = that.data.lists;
    if (t[i].is_like) {
      t[i].like--;
    } else {
      t[i].like++;
    }
    t[i].is_like = !t[i].is_like;
    console.log(i);
    that.setData({
      lists: t
    });
  },
})