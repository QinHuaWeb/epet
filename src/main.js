import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./mock/mockServer"
import store from "./store"
import { Swipe, SwipeItem } from 'mint-ui'

import split from './components/split/split.vue'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 注册全局组件(映射成标签)
Vue.component('split', split)

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
})