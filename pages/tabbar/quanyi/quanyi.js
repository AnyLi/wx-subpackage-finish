// pages/quanyi/quanyi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainActiveIndex: 0,
    activeId: [],
    max: 2,
    items:[
      {
        // 导航名称
        text: '临摹',
        // 禁用选项
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          {
            // 名称
            text: '抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          {
            // 名称
            text: '抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          {
            // 名称
            text: '抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          
        ],
      },
      {
        // 导航名称
        text: '写真抽象临摹',
        // 禁用选项
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '人物抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          {
            // 名称
            text: '人物抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          {
            // 名称
            text: '人物抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          {
            // 名称
            text: '人物抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          
        ],
      },
      {
        // 导航名称
        text: '临摹',
        // 禁用选项
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          {
            // 名称
            text: '抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          {
            // 名称
            text: '抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          {
            // 名称
            text: '抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          
        ],
      },
      {
        // 导航名称
        text: '写真抽象临摹',
        // 禁用选项
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '人物抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          {
            // 名称
            text: '人物抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          {
            // 名称
            text: '人物抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          {
            // 名称
            text: '人物抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          
        ],
      },
      {
        // 导航名称
        text: '临摹',
        // 禁用选项
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '抽象素描速写A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          {
            // 名称
            text: '抽象A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          {
            // 名称
            text: '抽象A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          {
            // 名称
            text: '抽象A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '抽象B',
            id: 2,
          },
          
        ],
      },
      {
        // 导航名称
        text: '写真抽象临摹',
        // 禁用选项
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '人物抽象A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          {
            // 名称
            text: '人物抽象A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          {
            // 名称
            text: '人物抽象A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          {
            // 名称
            text: '人物抽象A',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: '景物抽象B',
            id: 2,
          },
          
        ],
      },
    ]
  },
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({ detail = {} }) {
    const { activeId } = this.data;

    const index = activeId.indexOf(detail.id);
    if (index > -1) {
      activeId.splice(index, 1);
    } else {
      activeId.push(detail.id);
    }

    this.setData({ activeId });
    wx.navigateTo({
      url: '../../quanyi/pages/quanyiDetail/quanyiDetail',
    })
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