// pages/wode/wodeDetail/wodeDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    steps: [
      {
        text: '步骤一',
        desc: '监听页面加载',
        inactiveIcon: 'location-o',
        activeIcon: 'success',
      },
      {
        text: '步骤二',
        desc: '监听页面初次渲染完成',
        inactiveIcon: 'like-o',
        activeIcon: 'plus',
      },
      {
        text: '步骤三',
        desc: '监听页面显示',
        inactiveIcon: 'star-o',
        activeIcon: 'cross',
      },
      {
        text: '步骤四',
        desc: '监听页面隐藏',
        inactiveIcon: 'star-o',
        activeIcon: 'cross',
      },
      {
        text: '步骤五',
        desc: '监听用户下拉动作',
        inactiveIcon: 'star-o',
        activeIcon: 'cross',
      },
      {
        text: '步骤六',
        desc: '页面上拉触底事件的处理函数',
        inactiveIcon: 'star-o',
        activeIcon: 'cross',
      },
      {
        text: '步骤七',
        desc: '用户点击右上角分享',
        inactiveIcon: 'star-o',
        activeIcon: 'cross',
      },
      {
        text: '步骤八',
        desc: '生命周期结束',
        inactiveIcon: 'phone-o',
        activeIcon: 'fail',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})