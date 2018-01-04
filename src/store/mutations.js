import {
  RECEIVE_FIRSTVIEW,
  RECEIVE_SORTS,
  RECEIVE_SHOPCART,
  RECEIVE_MYEPET
} from "./mutations-types"

export default {
  [RECEIVE_FIRSTVIEW] (state,{firstView}) {
    state.firstView = firstView
  },
  [RECEIVE_SORTS] (state,{sorts}) {
    state.sorts = sorts
  },
  [RECEIVE_SHOPCART] (state,{shopCart}) {
    state.shopCart = shopCart
  },
  [RECEIVE_MYEPET] (state,{myEpet}) {
    state.myEpet = myEpet
  }
}