<template>
  <div>
    <ul class="tab">
      <li class="tab-item">
        <router-link class="tab-item1 tab1" to="/firstView">

        </router-link>
      </li>
      <li class="tab-item">
        <router-link class="tab-item2 tab1" to="/sorts">

        </router-link>
      </li>
      <li class="tab-item">
        <router-link class="tab-item3 tab1" to="/shopCart">

        </router-link>
      </li>
      <li class="tab-item">
        <router-link class="tab-item4 tab1" to="/myEPet">

        </router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    mounted () {

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    width 100%
    height: 45px;
    line-height: 45px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 20;
    border-top: 1px solid #e7e7e7;
    box-sizing: content-box;
    background: #fff;
    .tab-item
      float: left;
      height: 55px;
      width 25%
      .tab1
        display block
        background: url(./img/img.png) no-repeat;
        background-size: 234px 163px;
        margin: 0 auto;
        height: 40px;
        width: 42px;
        margin-top: 2px;
        color: #333;
      .tab-item1
        background-position: 0 0;
      .tab-item2
        background-position: -85px -41px
      .tab-item2:visited
        background-position: 0 -41px
      .tab-item3
        background-position: -85px -81px
      .tab-item3:visited
        background-position: 0 -81px;
      .tab-item4
        background-position: -85px -122px;
      .tab-item3:visited
        background-position: 0 -122px;
</style>