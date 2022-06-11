import config from './config'
export default (url,data={},method='GET')=>{
   return new Promise((resolve,reject)=>{

    wx.request({
        url:config.host+url,
        data,
        method,
        header:{
         cookie:wx.getStorageSync('cookies')[1]

        },
        success:(res)=>{
            //console.log("请求成功",res)
            if(data.isLogin){
                // console.log("实际上")
                // console.log(res.cookies)
                
                wx.setStorageSync({
                    key:'cookies',
                    data:res.cookies
                })
            //    let aja= wx.getStorageSync('cookies')
            //    console.log(aja)
            }
            resolve(res.data)
        },
        fail:(err)=>{
            //console.log("请求失败",err)
            reject(err)
        }

    })

   })
   
    
}