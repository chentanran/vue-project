import Mock from "mockjs"
import swipe from "./home.json"
import newslist from "./newslist.json"
import newsinfo from "./newsinfo.json"


//轮播图
Mock.mock('/swipe', {code:0, data:swipe})
//新闻列表
Mock.mock('/newslist', {code:0, data:newslist})
//新闻详情
// Mock.mock("/newsinfo/1", "get", (options)=>{
//     return Mock.mock(newslist)
// })