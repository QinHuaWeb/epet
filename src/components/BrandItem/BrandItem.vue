<template>
  <div class="brand">
    <div class="brandA">
      <div class="top">

      </div>
      <div class="content">
        <ul>
          <li>
            <a href="">
              <div class="imgs">
                <img src="./brand.jpg" alt="">
              </div>
              <p class="name">冠能</p>
              <p class="country">美国</p>
            </a>
          </li>
        </ul>
      </div>
      <split class="split" />
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brand
    margin-top 45px
    width 375px
    .brandA

      .top
        width 375px
        height 39px
        padding-top 20px
        font-size: 12px;
        color: #999;
        text-align: center;
        box-sizing: border-box;
      .content
        width 375px
        padding 0 5px
        box-sizing border-box
        font-size 14px
        overflow hidden
        ul
          box-sizing: border-box;
          li
            margin-top 20px
            width 33.3333%
            padding 0 5px
            position relative
            float left
            a
              color: #333;
              display: block;
              box-sizing: border-box;
              .imgs
                border ipx solid #e2e2e2
                text-align: center;
                padding: 50px 10px 10px;
                background: url(./e.png) no-repeat center center #fff;
                background-size: 120px auto;
                height 50px
                box-sizing border-box
                img
                  max-width: 90%;
                  margin: 10px auto 0;
                  height: 40px;
                  right: 0;
                  top: 0;
                  left: 0;
                  position: absolute;
                  display block
                  vertical-align: middle;
                  box-sizing: border-box;
                  text-align: center;
              .name
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 13px;
                margin-top: 5px;
                text-align: center;
                box-sizing: border-box;
                color: #333;
              .country
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
                color: #999;
                text-align: center;
                box-sizing: border-box;

</style>