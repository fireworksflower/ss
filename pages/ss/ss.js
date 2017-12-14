Page({
  data:{
    bgcolor:"#E0210E",
    sscolor:"#ffffff",

  },
  onPickupDynamic:function(){
   
      this.setData({ bgcolor: "#E0210E", sscolor: "#ffffff"})
   
    setTimeout(()=>{
      wx.navigateTo({
        url: '../pickup-dynamic/pickup-dynamic',
      })
    }, 100)
    
   
  },
  onLoseDynamic: function () {
    this.setData({ bgcolor: "#ffffff", sscolor: "#E0210E" })
    
    setTimeout(()=>{
      wx.navigateTo({
        url: '../lose-dynamic/lose-dynamic',
      })
    },100)
   
  }
})