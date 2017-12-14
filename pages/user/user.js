Page({
  data: {
    info: {
      nickname: "烟火兮",
      signature: "风一样的女子!",
      locate: "北京",
      contact: "13103540312"
    }
  },
  onPrivate:function(){
    wx.navigateTo({
      url: '../chat/chat',
    })
  }
})