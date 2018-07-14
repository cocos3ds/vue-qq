<template>
    <div class="header">
        <router-link to="/" tag="div" class="header-left">
            <div class="back">
              <span class="iconfont">
                &#xe614;
              </span>
            </div>
        </router-link>
        <div class="header-middle">
            vue聊天群
        </div>
        <div class="header-right">
            <span class="iconfont group">&#xe638;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
      height $headerHeight
      display flex
      overflow hidden
      background #3ea4fe
      color #fff
      padding 0rem .1rem
      .header-left
        height $headerHeight
        .back
          line-height $headerHeight
          height $headerHeight
          .iconfont
            font-size .6rem
      .header-middle
        flex 1
        text-align center
        line-height $headerHeight
        font-size .4rem
      .header-right
        height $headerHeight
        line-height $headerHeight
        text-align center
        .group
          color #ffffff
          font-size .6rem !important
</style>

