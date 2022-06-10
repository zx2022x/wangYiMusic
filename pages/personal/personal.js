// pages/personal/personal.js
let startY=0
let moveY=0
let moveDistance=0
Page({

    /**
     * 页面的初始数据
     */
    data: {
         coverTransform:'translateY(0)',
         coverTransition:''

    },
    handleTouchStart(event){
        startY=event.touches[0].clientY

    },
    handleTouchMove(event){
       moveY=event.touches[0].clientY
       moveDistance=moveY-startY;
    //    this.coverTransform=`translateY(${moveDistance}+px)`
    //    console.log(moveDistance)
       if(moveDistance<=0){
           return 0;
       }
       if(moveDistance>=80){
        moveDistance=80;
       }
       this.setData({
        coverTransform:`translateY(${moveDistance}rpx)`,
        coverTransition:'transform 1s linear'
       })
    },
    handleTouchEnd(){
        this.setData({
            coverTransform:`translateY(0)`
           })
    },
    //跳转到登录
    toLogin(){
        wx.navigateTo({
            url:`../login/login`,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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