import axios from "axios"

export function requestFirstView() {
  return axios.get("/api/firstView")
}
// export function requestSorts() {
//   return axios.get("/api/sorts")
// }
// export function requestShopCart() {
//   return axios.get("/api/shopCart")
// }
// export function requestMyEpet() {
//   return axios.get("/api/myEpet")
// }
