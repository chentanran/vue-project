import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home.vue'
import newsList from "@/page/home/newsList/newsList.vue"
import newsinfo from "@/page/home/newsinfo/newsinfo.vue"
import member from "@/page/member/member.vue"
import search from "@/page/search/search.vue"
import shopcar from "@/page/shopcar/shopcar.vue"
import photoList from "@/page/home/photo/photoList.vue"
import photoInfo from "@/page/home/photo/photoinfo.vue"




Vue.use(Router)

export default new Router({
  routes: [
    {path: "/", redirect: "/home"},
    {path: '/home', name: 'home', component: home},
    {path: "/home/newsList", name:"newsList", component: newsList},
    {path: "/home/newsinfo/:id", name: 'newsinfo', component: newsinfo},
    {path: "/home/photoList", name: 'photoList', component: photoList},
    {path: "/home/photoinfo/:id", name: 'photoinfo', component: photoInfo},
    {path: '/member', name: 'member', component: member},
    {path: '/search', name: 'search', component: search},
    {path: '/shopcar', name: 'shopcar', component: shopcar},
  ]
})
