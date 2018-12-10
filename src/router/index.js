import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home.vue'
import newsList from "@/page/home/newsList/newsList.vue"
import member from "@/page/member/member.vue"
import search from "@/page/search/search.vue"
import shopcar from "@/page/shopcar/shopcar.vue"



Vue.use(Router)

export default new Router({
  routes: [
    {path: "/", redirect: "/home"},
    {path: '/home', name: 'home', component: home,},
    {path: "/home/newsList", name:"newsList", component: newsList},
    {path: '/member', name: 'member', component: member},
    {path: '/search', name: 'search', component: search},
    {path: '/shopcar', name: 'shopcar', component: shopcar},
  ]
})
