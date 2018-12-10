// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/style/common.css" //引入基本样式
import "@/style/font/iconfont.css" //引入字体文件
import "@/mock/mockServer.js" //模拟数据

import { Button, Header, Swipe, SwipeItem } from 'mint-ui' //按需引入mint-ui
Vue.component(Button.name, Button)
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
