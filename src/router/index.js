import Vue from "vue"
import VueRouter from "vue-router"
import firstView from "../pages/firstView/firstView.vue"
import sorts from "../pages/sorts/sorts.vue"
import shopCart from "../pages/shopCart/shopCart.vue"
import myEpet from "../pages/myEpet/myEpet.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/firstView"
    },
    {
      path: "/firstView",
      component: firstView
    },
    {
      path: "/sorts",
      component: sorts
    },
    {
      path: "/shopCart",
      component: shopCart
    },
    {
      path: "/myEpet",
      component: myEpet
    }
  ]
})