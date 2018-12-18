import axios from "axios"

const baseURL = "http://www.lovegf.cn:8899"
axios.defaults.baseURL= baseURL

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//获取轮播图数据
export const swipe = () => { return axios.get("/api/getlunbo").then(res=>res.data) }
//获取新闻列表数据
export const newsList = () => { return axios.get("/api/getnewslist").then(res => res.data) }
//获取新闻详情数据
export const newsInfo = (params) => { return axios.get(`/api/getnew/${params}`).then(res => res.data) }
//获取评论列表数据
export const getComment = (params, pageindex) => { return axios.get(`/api/getcomments/${params}?pageindex=${pageindex}`).then(res => res.data) }
//添加评论数据
export const addComment = (params, content) => { return axios.post(`/api/postcomment/${params}`, content).then(res => res.data) }
//图片分类数据
export const getClassfiy = () => { return axios.get(`/api/getimgcategory`).then(res => res.data) }
//图片列表数据
export const getPhotoList = (id) => { return axios.get(`/api/getimages/${id}`).then(res => res.data) }
//图文详情
export const  getPhotoinfo = (id) => { return axios.get(`/api/getimageInfo/${id}`).then(res => res.data) }
//图文详情缩略图
export const getSmallImage = (id) => { return axios.get(`/api/getthumimages/${id}`).then(res => res.data) }
//获取商品列表数据
export const getGoodsList = (number) => { return axios.get(`/api/getgoods?pageindex=${number}`).then(res => res.data) }