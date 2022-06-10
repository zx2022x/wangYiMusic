// pages/video/video.js
import requests from '../../utils/requests'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        videoGroupList:[],
        navId:'',//导航的标识
    },
    //点击导航栏
    changeNav(event){
       let navId=event.currentTarget.id
       this.setData({
           navId:navId*1
       })
    },
    //获取导航栏数据
   async getVideoGroupListData(){
          let videoGroupListData=await requests("/video/group/list")
        //   console.log(videoGroupListData)
          if(videoGroupListData.code==200){
            this.setData({
                videoGroupList:videoGroupListData.data.slice(0,14),
                navId:videoGroupListData.data[0].id
              })
               //获取对应的视频列表
            this.getVideoList(this.data.navId)
          }

         
          
    },
    //获取视频列表数据
    async getVideoList(navId){
        // if(!navId){
        //     return;
        // }
         let videoListdata=await requests(`/video/group?id=${navId}`)



    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
       this.getVideoGroupListData()
      
    },
   
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})