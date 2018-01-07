<template>
  <div>
    <div class="main">
      <div class="header">
        <div class="headerLeft">
          <router-link to="RightItem">
            <span>分类</span>
          </router-link>
        </div>
        <div class="headerRight">
          <router-link to="BrandItem" class="headerRight1">
            <span>品牌</span>
          </router-link>
          <a class="headerRight2" href="">
            <img src="./search-ico.png" alt="">
          </a>
        </div>
      </div>
      <router-view/>
    </div>
    <div class="line">
    </div>
  </div>
</template>

<script>
  import RightItem from "../../components/RightItem/RightItem.vue"
  // 引入axios
  import axios from "axios"
  export default {
    data () {
      return {

      }
    },
//    mounted () {
//      // 在mounted中使用axios发送ajax请求获取后台提供的数据
//      axios.get("/api/sorts")
//        .then(response => {
//          const result = response.data
//          console.log("axios",result)
//        })
//      // 通过vuex发送ajax请求获取数据，并更新状态
//      this.$store.dispatch("requestSorts")
//    },
    methods: {

    },
    computed: {

    },
    components:{
      RightItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main
    .header
      margin 0 auto
      width 375px
      height 40px
      padding 0 15px
      border-bottom: 1px solid #cbcbcb;
      position fixed
      left 0
      top 0
      z-index 10
      box-sizing border-box
      .headerLeft
        width 50%
        height 100%
        line-height 40px
        float  left
        text-align right
        padding-right 5%
        box-sizing border-box
        font-weight 700
        font-size 13px
        a
          color #333
          box-sizing border-box
          span
            color: #ed4044
            border-bottom 2px solid #ed4044
            display inline-block
            height 40px
            padding 0 4px

      .headerRight
        width 50%
        height 100%
        line-height 40px
        float  left
        padding-left 5%
        box-sizing border-box
        font-size 13px
        font-weight 700
        .headerRight1
          color #333
          box-sizing border-box
          &span
            display inline-block
            height 40px
            padding 0 4px
        .headerRight2
          color: #333
          img
            position absolute
            top 13px
            right 15px
            width 14px
            height 14px
            vertical-align middle


    .header:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    }
  .line
    width 375px
    height 5px
    background-color #eee
    position absolute
    top 40px
    left 0
</style>