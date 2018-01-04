import Mock from "mockjs"
import data from "./data.json"

Mock.mock("/api/firstView", {
  code: 0,
  // 在mockjs上模拟数据 只是个例子 随机生成
  data: data.firstView
})
Mock.mock("/api/sorts", {
  code: 0,
  // 在mockjs上模拟数据 只是个例子 随机生成
  data: data.clothes
})
Mock.mock("/api/shopCart", {
  code: 0,
  // 在mockjs上模拟数据 只是个例子 随机生成
  data: data.foods
})
Mock.mock("/api/myEpet", {
  code: 0,
  // 在mockjs上模拟数据 只是个例子 随机生成
  data: data.health
})