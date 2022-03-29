let Mock = require("mockjs")
let datas = [
    {
        title:"中国npm镜像源升级公告",
        author:"fengmk2",
        number:"43467",
        reply:'8'
    },
    {
        title:"望周知求扩散 淘宝npm镜像",
        author:"atian25",
        number:"77331",
        reply:'13'
    },
    {
        title:"node.js2021年开发者报告",
        author:"i5ting",
        number:"168026",
        reply:'10'
    },
    {
        title:"2021/11/26 请大家遵纪守法",
        author:"tinsos",
        number:"116512",
        reply:'226'
    },
    {
        title:"冒个泡，过完年面试奇虎360",
        author:"dyjiang",
        number:"10996",
        reply:'17'
    },
    {
        title:"Websockts.js介绍",
        author:"yvlscool",
        number:"4094",
        reply:'26'
    },
]
Mock.mock("/api/home","get",function(config){
    console.log(config)
    return datas
})

Mock.mock(/\/api\/del\/\d/,"delete",function(config){
    console.log(config)
    let arr = config.url.split('/')
    let id = arr.pop()
    datas.splice(id,1)
    //防止数组塌陷
    datas.forEach(function(item,index){
        item.id = index
    })
    return datas
})