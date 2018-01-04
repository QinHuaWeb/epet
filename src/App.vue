<template>
  <div>
    <ele-header/>

    <div class="tab">
      <div class="tab-item">
        <router-link to="/firstView">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sorts">分类</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shopCart">购物车</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/myEpet">我的E宠</router-link>
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
      axios.get("/api/myEpet")
        .then(response => {
          const result = response.data
          console.log("axios",result)
        })
      this.$store.dispatch("requestMyEpet")
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