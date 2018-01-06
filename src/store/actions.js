import {
  requestFirstView,
  // requestSorts,
  // requestShopCart,
  // requestMyEpet
} from "../api"

import {
  RECEIVE_FIRSTVIEW,
  // RECEIVE_SORTS,
  // RECEIVE_SHOPCART,
  // RECEIVE_MYEPET
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
  // requestSorts ({commit}) {
  //   requestSorts().then(response => {
  //     const result = response.data
  //     if (result.code === 0) {
  //       const sorts = result.sorts
  //       commit(RECEIVE_SORTS,{sorts})
  //     }sorts
  //   })
  // },
  // requestShopCart ({commit}) {
  //   requestShopCart().then(response => {
  //     const result = response.data
  //     if (result.code === 0) {
  //       const shopCart = result.shopCart
  //       commit(RECEIVE_SHOPCART,{shopCart})
  //     }
  //   })
  // },
  // requestMyEpet ({commit}) {
  //   requestMyEpet().then(response => {
  //     const result = response.data
  //     if (result.code === 0) {
  //       const myEpet = result.myEpet
  //       commit(RECEIVE_MYEPET,{myEpet})
  //     }
  //   })
  // },
}

// 发送ajax请求，但写在api中，api是用来前后台交互的
// api定义行为，actions来调用执行行为