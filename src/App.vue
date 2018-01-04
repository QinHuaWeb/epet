<template>
  <div>
    <ele-header/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/firstView">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/clothes">服饰城</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/foods">狗狗主粮</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/health">医疗保健</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/toys">零食玩具</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import axios from "axios"
  import header from "./components/header/header.vue"
  export default {
    mounted () {
      // 使用axios发送ajax请求mockjs提供的接口
      axios.get("/api/toys")
        .then(response => {
          const result = response.data
          console.log("axios",result)
        })
      this.$store.dispatch("requestToys")
    },
    components: {
      "ele-header": header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    .tab-item
      display inline-block
      router-link-active
        color green
</style>