// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/style/common.css" //引入基本样式
import "@/style/font/iconfont.css" //引入字体文件
// import "@/mock/mockServer.js" //模拟数据
import VuePreview from 'vue2-preview' //引入图片预览插件
Vue.use(VuePreview)

import { Button, Header, Swipe, SwipeItem } from 'mint-ui' //按需引入mint-ui
Vue.component(Button.name, Button)
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false
//格式化时间
Vue.filter('format', (res)=>{
    let date = new Date(res)
    let y = date.getFullYear()
    let m = (date.getMonth()+1).toString().padStart(2,'0')
    let d = date.getDay().toString().padStart(2,'0')
    let hh = date.getHours().toString().padStart(2,'0')
    let mm = date.getMinutes().toString().padStart(2,'0')
    let ss = date.getSeconds().toString().padStart(2,'0')

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
