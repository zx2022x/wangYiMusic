// pages/login/login.js
import request from '../../utils/requests'
Page({

    /**
     * 页面的初始数据
     */
    data: {
       phone:'',
       password:''
    },
    handleInput(event){
        //    console.log(event)
        let type=event.currentTarget.id
        console.log(type,event.detail.value)
        this.setData({
            [type]:event.detail.value
        })
    },
   async login(){
        let {phone,password}=this.data
        //
        if(!phone){
            wx.showToast({
                title:'号码不能为空',
                icon:'none'
            })
            return
        }
        let phoneReg=/^1(3|4|5|6|7|8|9)\d{9}$/
        
        if(!phoneReg.test(phone)){

           wx.showToast({
               title:'手机号格式不正确',
               icon:'none'
           })
           return

        }
       if(!password){
           wx.showToast({
               title:"密码不能为空",
               icon:'none'
           })
       }
    //    wx.showToast({
    //        title:'前端验证通过',
          
    //    })

       //后端验证
       let result=await request(`/login/cellphone?phone=${phone}&password=${password}`)
    //    console.log(`/login/cellphone?phone=${phone}&password=${password}`)
    //    console.log(result)
    if(result.code==200){
        wx.showToast({
            title:'登录成功',
        })
        
        wx.reLaunch({
          url: '/pages/personal/personal',
        })
        wx.setStorageSync("userInfo",JSON.stringify(result.profile))
    }
    else if(result.code==400){
        wx.showToast({
            title:'手机号错误',
            icon:'none'
        })
    }
    else if(result.code==502){
        wx.showToast({
            title:'密码错误',
            icon:'none'
        })
    }
    else{
        wx.showToast({
            title:'登录失败，请重新登录',
            icon:'none'
        })
    }
    
     


    
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