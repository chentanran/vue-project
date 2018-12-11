import axios from "axios"

const baseURL = "http://www.lovegf.cn:8899/"
axios.default.baseURL= baseURL

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//获取轮播图数据
export const swipe = () => { return axios.get("/swipe").then(res=>res.data) }
//获取新闻列表数据
export const newsList = () => { return axios.get("/newslist").then(res => res.data) }