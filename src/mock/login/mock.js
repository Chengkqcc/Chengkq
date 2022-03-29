let Mock = require("mockjs")
Mock.mock("/api/login",'post',function(config){
    console.log(config)
    let obj = JSON.parse(config.body)
    let user = obj.user
    let pw = obj.pw
    if(user ==='admin' && pw ==='123456'){
        return{
            message:"success",
            data:{
                token:"tongguo"
            }
        }
    }else{
        return{
            message:"failed",
            data:{
                mess:"用户名或者密码错误"
            }
        }
    }

})
