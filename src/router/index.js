import Vue from "vue"
import VueRouter from "vue-router"
import firstView from "../pages/firstView/firstView.vue"
import clothes from "../pages/clothes/clothes.vue"
import foods from "../pages/foods/foods.vue"
import health from "../pages/health/health.vue"
import toys from "../pages/toys/toys.vue"

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
      path: "/clothes",
      component: clothes
    },
    {
      path: "/foods",
      component: foods
    },
    {
      path: "/health",
      component: health
    },
    {
      path: "/toys",
      component: toys
    },
    {
      path: "firstView",
      component: firstView
    },
  ]
})