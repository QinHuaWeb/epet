<template>
  <div>
    <div class="header">
      <div class="headerImg">
        <a href="">
          <img src="./imgHeader.jpg">
        </a>
      </div>
      <div class="main">
        <div class="mainContent">
          <div class="search">
            <a href="" class="s1">
              <span class="a1">狗狗站</span>
              <span class="a2">|</span>
              <span class="a3">重庆</span>
              <i></i>
            </a>
          </div>
          <p>
            <a href="" class="s2">
              <input class="s3"/>
            </a>
          </p>
          <img src="">
        </div>
        <div class="nav" ref="nav2">
          <ul>
            <li><a href="">首页</a></li>
            <li><a href="">服饰城</a></li>
            <li><a href="">狗狗主粮</a></li>
            <li><a href="">医疗保健</a></li>
            <li><a href="">零食玩具</a></li>
            <li><a href="">日用外出</a></li>
            <li><a href="">美容香波</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <mt-swipe :auto="2000" class="banner_item">
          <mt-swipe-item><img src="./img1.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="./img2.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="./img3.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="./img4.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="./img5.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="./img6.jpg" alt=""></mt-swipe-item>

          <!--<mt-swipe-item><img src="firstView[0].value[2].image" alt=""></mt-swipe-item>-->
        </mt-swipe>
        <div class="arraySorts">
          <ul class="tenSorts">
            <li class="f1"><a href=""><img src="./img7.jpg" alt=""></a></li>
            <li class="f1"><a href=""><img src="./img7.jpg" alt=""></a></li>
            <li class="f1"><a href=""><img src="./img7.jpg" alt=""></a></li>
            <li class="f1"><a href=""><img src="./img7.jpg" alt=""></a></li>
            <li class="f1"><a href=""><img src="./img7.jpg" alt=""></a></li>
            <li class="f1"><a href=""><img src="./img7.jpg" alt=""></a></li>
            <li class="f1"><a href=""><img src="./img7.jpg" alt=""></a></li>
            <li class="f1"><a href=""><img src="./img7.jpg" alt=""></a></li>
            <li class="f1"><a href=""><img src="./img7.jpg" alt=""></a></li>
            <li class="f1"><a href=""><img src="./img7.jpg" alt=""></a></li>
          </ul>
        </div>
        <split class="split"/>
        <div class="swiper-wrapper">
          <a href="">
            <img src="./img8.gif" alt="">
          </a>
        </div>
        <div class="crazyDay">
          <div class="crazy">
            <div class="crazyImg">
              <img src="" >
            </div>
            <div class="timeLeft">
              据本场结束
            </div>
            <div class="timing">
              <div class="timing2">
                <span class="t1"></span>
                <span class="t2"></span>
                <span class="t3"></span>
                <span class="t4"></span>
                <span class="t5"></span>
              </div>
            </div>
            <div class="crazyMore" >
              <a href="">
                <img src="" alt="">
              </a>
            </div>
          </div>
        </div>
        <split class="split"/>
        <div class="echong">
          <a href="">
            <img src="./m12.jpg" alt="">
          </a>
        </div>
        <split class="split"/>
        <div class="guoji">
          <div class="guojiLeft">
            <a href="">
              <img src="./m13.jpg" alt="">
            </a>
          </div>
          <div class="guojiRight">
            <div class="guojiRight1">
              <a href="">
                <img src="./m14.jpg" alt="">
              </a>
            </div>
            <div class="guojiRight2">
              <a href="">
                <img src="./m14.jpg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios"
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      // 在mounted中使用axios发送ajax请求获取后台提供的数据
      axios.get("/api/firstView")
        .then(response => {
          const result = response.data
          console.log("axios",result)
        })
      // 通过vuex发送ajax请求获取数据，并更新状态
      this.$store.dispatch("requestFirstView")

      // better-scroller的使用
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
//      this.$nextTick(() => {
//        this.scroll = new BScroll(this.$refs.nav2, {})
//      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position fixed
    left 0
    right 0
    top 0
    z-index 40
    background-color #ffffff
    .headerImg
      width 375px
      height 55px
      margin 0 auto
      a
        width 375px
        height 55px
        display block
        img
          width 100%
          height 100%
    .main
      width 375px
      height 86px
      margin 0 auto
      .mainContent
        width 100%
        height 51px
        padding 5px 10px
        box-sizing border-box
        overflow hidden
        .search
          box-sizing border-box
          padding 8px 0
          background-color #ffffff
          text-align center
          width 100%
          display float
          .s1
            width 96px
            height 22px
            line-height 22px
            font-size 14px
            display block
            overflow hidden
            .a1
              width 42px
              height 19px
              display block
              float left
              color: #898989;
            .a2
              margin 0 4px
              width 4px
              height 19px
              display block
              float left
              color: #898989;
            .a3
              width 26px
              height 17px
              display block
              float left
              color: #898989;
              font-size: 13px;
            i
              width 8px
              height 8px
              display block
              float left
              background-color #02a774


        p
          float left
          width 220px
          height 25px
          .s2
            width 220px
            height 19px
            float left
            .s3
              outline none
              width 100%
              height 100%
          a
            margin-left 10px
            width 25px
            height 25px
            img
              display block
              float left

              width 25px
              height 25px

      .nav
        width 375px
        height 36px
        font-size: 14px;
        color: #666;
        ul
          width 140%
          height 100%
          line-height 36px
          overflow hidden
          li
            width 74px
            height 100%
            float left
            text-align center
            a
              width 74px
              height 100%
  .wrapper
    width 375px
    height 470px
    background-color #02a774
    margin 0 auto
    .content
      margin-top 142px
      .banner_item
        width 375px
        height 160px
        margin 0 auto
        img
          width 100%
          height 100%
      .arraySorts
        width 375px
        height 190px
        margin 0 auto
        .tenSorts
          width 100%
          height 100%
          li
            width 20%
            height 95px
            float left
            a
              width 100%
              height 100%
              img
                width 100%
                height 100%
      .swiper-wrapper
        width 375px
        height 120px
        margin 0 auto
        a
          width 100%
          height 100%
          display block
          img
            width 100%
            height 100%
      .crazyDay
        width 375px
        height 190px
        margin 0 auto
        .crazy
          width 375px
          height 60px
          position: relative
          padding 10px
          overflow hidden
          box-sizing border-box
          .crazyImg
            float left
            img
              height: 85px
              height: 24px
              margin-left: -20px
              display: block
              vertical-align: middle
              box-sizing border-box
      .echong
        width 375px
        height 185px
        margin 0 auto
        a
          width 100%
          height 100%
          display block
          background-color #f4f4f4
          color: #333;
          img
            width 100%
            height 100%
            display: block;
            vertical-align: middle;
      .guoji
        width 375px
        height 250px
        margin 0 auto
        overflow hidden
        .guojiLeft
          width 50%
          height 100%
          float left
          a
            width 100%
            height 100%
            display block
            img
              width 100%
              height 100%
              display: block;
              vertical-align: middle;
        .guojiRight
          width 50%
          height 50%
          float left
          .guojiRight1
            width 100%
            height 50%
            a
            width 100%
            height 100%
            display block
            img
              width 100%
              height 100%
              display: block;
              vertical-align: middle;
          .guojiRight2
            width 100%
            height 50%
            a
            width 100%
            height 100%
            display block
            img
              width 100%
              height 100%
              display: block;
              vertical-align: middle;


</style>