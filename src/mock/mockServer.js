import Mock from "mockjs"
import swipe from "./home.json"
import newslist from "./newslist.json"


//轮播图
Mock.mock('/swipe', {code:0, data:swipe})
//新闻列表
Mock.mock('/newslist', {code:0, data:newslist})