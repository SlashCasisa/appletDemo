const list = require('../../utils/list.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 1,
    loading: true,// 初次加载
    isShowLoadmore: true, //正在加载
    isShowNoDatasTips: true, // 暂无数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(()=>{
      this.setData({
        list: list.list(this.data.page),
        loading: false
      })
    },3000)
    
    console.log(this.data.list, 'list*')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


})