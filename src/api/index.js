import axios from "axios"

export function requestFirstView() {
  return axios.get("/api/firstView")
}
export function requestClothes() {
  return axios.get("/api/clothes")
}
export function requestFoods() {
  return axios.get("/api/foods")
}
export function requestHealth() {
  return axios.get("/api/health")
}
export function requestToys() {
  return axios.get("/api/toys")
}
