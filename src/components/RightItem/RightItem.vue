<template>
  <div class="sortTotals">
    <div class="sortTotals2">
      <a class="sortMethod" href="">热门分类</a>
      <ul>
        <li>
          <a href="">
            <div class="sortSingle">
              <img src="./img1.jpg" alt="">
            </div>
            <p>磨牙洁牙</p>
          </a>
        </li>
        <li>
          <a href="">
            <div class="sortSingle">
              <img src="./img1.jpg" alt="">
            </div>
            <p>磨牙洁牙</p>
          </a>
        </li>
        <li>
          <a href="">
            <div class="sortSingle">
              <img src="./img1.jpg" alt="">
            </div>
            <p>磨牙洁牙</p>
          </a>
        </li>
        <li>
          <a href="">
            <div class="sortSingle">
              <img src="./img1.jpg" alt="">
            </div>
            <p>磨牙洁牙</p>
          </a>
        </li>
        <li>
          <a href="">
            <div class="sortSingle">
              <img src="./img1.jpg" alt="">
            </div>
            <p>磨牙洁牙</p>
          </a>
        </li>
        <li>
          <a href="">
            <div class="sortSingle">
              <img src="./img1.jpg" alt="">
            </div>
            <p>磨牙洁牙</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      RightItem: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sortTotals
    width 305px
    box-sizing: border-box;
    position absolute
    top 45px
    left 70px
    background-color #fff
    box-sizing: border-box;
    padding-left 5px
    .sortTotals2
      padding 15px 5px
      box-sizing: border-box;
      .sortMethod
        display block
        font-size 12px
        color: #999
        padding-left 5px
        padding-top 10px
        line-height 19px
        box-sizing: border-box;
      ul
        width 100%
        overflow hidden
        margin 0
        padding 0
        li
          width 33.3333%
          height 116px
          padding 0 5px
          margin-top 10px
          float left
          box-sizing border-box
          a
            display block
            color: #333
            box-sizing border-box
            width 86px
            height 116px
            .sortSingle
              width 86px
              height 86px
              box-sizing: border-box;
              img
                width 100%
                height 100%
                vertical-align middle
                box-sizing: border-box;
            p
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              height: 20px;
              font-size: 12px;
              color: #333;
              margin-top: 5px;
              text-align: center;
              box-sizing: border-box;

</style>