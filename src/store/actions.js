import {
  requestFirstView,
  requestClothes,
  requestFoods,
  requestHealth,
  requestToys
} from "../api"

import {
  RECEIVE_FIRSTVIEW,
  RECEIVE_CLOTHES,
  RECEIVE_FOODS,
  RECEIVE_HEALTH,
  RECEIVE_TOYS
} from "./mutations-types"

export default {
  requestFirstView ({commit}) {
    requestFirstView().then(response => {
      const result = response.data
      if (result.code === 0) {
        const firstView = result.firstView
        commit(RECEIVE_FIRSTVIEW,{firstView})
      }
    })
  },
  requestClothes ({commit}) {
    requestClothes().then(response => {
      const result = response.data
      if (result.code === 0) {
        const clothes = result.clothes
        commit(RECEIVE_CLOTHES,{clothes})
      }
    })
  },
  requestFoods ({commit}) {
    requestFoods().then(response => {
      const result = response.data
      if (result.code === 0) {
        const foods = result.foods
        commit(RECEIVE_FOODS,{foods})
      }
    })
  },
  requestHealth ({commit}) {
    requestHealth().then(response => {
      const result = response.data
      if (result.code === 0) {
        const health = result.health
        commit(RECEIVE_HEALTH,{health})
      }
    })
  },
  requestToys ({commit}) {
    requestToys().then(response => {
      const result = response.data
      if (result.code === 0) {
        const toys = result.toys
        commit(RECEIVE_TOYS,{toys})
      }
    })
  },
}

// 发送ajax请求，但写在api中，api是用来前后台交互的
// api定义行为，actions来调用执行行为