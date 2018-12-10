import axios from "axios"

const baseURL = "http://www.lovegf.cn:8899/"
axios.default.baseURL= baseURL
//获取轮播图数据
export const swipe = () => { return axios.get("/swipe").then(res=>res) }