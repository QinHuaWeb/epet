<template>
  <div>
    header component
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    computed: {
      ...mapState(["toys"])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>