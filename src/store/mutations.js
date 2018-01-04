import {
  RECEIVE_FIRSTVIEW,
  RECEIVE_CLOTHES,
  RECEIVE_FOODS,
  RECEIVE_HEALTH,
  RECEIVE_TOYS
} from "./mutations-types"

export default {
  [RECEIVE_FIRSTVIEW] (state,{firstView}) {
    state.firstView = firstView
  },
  [RECEIVE_CLOTHES] (state,{clothes}) {
    state.clothes = clothes
  },
  [RECEIVE_FOODS] (state,{foods}) {
    state.foods = foods
  },
  [RECEIVE_HEALTH] (state,{health}) {
    state.health = health
  },
  [RECEIVE_TOYS] (state,{toys}) {
    state.toys = toys
  },

}