// pages/index/index.js.js
import requests from "../../utils/requests"
Page({

    /**
     * 页面的初始数据
     */
    data: {
      bannerList:[],
      personList:[],
      topList:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
   async onLoad(options) {
        
       let result1=await requests('/banner',{type:2})
       this.setData({
           bannerList:result1.banners
       })
       let {result}=await requests('/personalized',{limit:5})
        this.setData({
            personList:result
        })

        //获取排行榜数据
        let i=0;
        let resultArr=[];
        while(i<5){
            let topListData=await requests('/top/list',{idx:i++})
            let topListItem={name:topListData.playlist.name,tracks:topListData.playlist.tracks.slice(1,4)}
             console.log(topListItem)
            resultArr.push(topListItem)
        }
        this.setData({
            topList:resultArr
        })
        

         
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