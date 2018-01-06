import Mock from "mockjs"
import data from "./dataTotal.json"

console.log("mockServer")
Mock.mock("/api/firstView", {
  code: "0",
  data: data.firstView
})
// Mock.mock("/api/sorts", {
//   // 在mockjs上模拟数据 只是个例子 随机生成
//   data: data.sorts
// })
// Mock.mock("/api/shopCart", {
//   code: 0,
//   // 在mockjs上模拟数据 只是个例子 随机生成
//   data: data.shopCart
// })
// Mock.mock("/api/myEpet", {
//   code: 0,
//   // 在mockjs上模拟数据 只是个例子 随机生成
//   data: data.myEpet
// })