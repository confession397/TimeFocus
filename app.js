/**
 * TimeFocus 专注时钟 - 应用程序入口
 * 定制开源版本 - 移除所有第三方服务密钥
 */
const defaultTime = {
  defaultWorkTime: 30,  // 默认工作时间（分钟）
  defaultRestTime: 5   // 默认休息时间（分钟）
}


App({
  /**
   * 应用程序启动时执行
   * 初始化默认的工作时间和休息时间
   */
  onLaunch: function() {
    let workTime = wx.getStorageSync('workTime')
    let restTime = wx.getStorageSync('restTime')

    // 如果本地没有存储工作时间，则设置默认值
    if (!workTime) {
      wx.setStorage({
        key: 'workTime',
        data: defaultTime.defaultWorkTime
      })
    }
    // 如果本地没有存储休息时间，则设置默认值
    if (!restTime) {
      wx.setStorage({
        key: 'restTime',
        data: defaultTime.defaultRestTime
      })
    }
  }
  // viblong: function(){

  //   var vibison = wx.getStorageSync('vibison')
  //   console.log(vibison)
  // }
})
