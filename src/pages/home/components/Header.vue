<template>
    <div class="header">
        <div class="header-left">
            <img src="/img/avatar.jpg" class="avatar">
        </div>
        <div class="header-middle">
            消息
        </div>
        <div class="header-right">
            <span class="iconfont plus">&#xe626;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
      height $headerHeight
      display flex
      overflow hidden
      background #3ea4fe
      padding .1rem .3rem
      color #fff
      .header-left
        height 1rem
        width 1rem
        .avatar
          height 100%
          width 100%
          border-radius 50%
      .header-middle
        flex 1
        text-align center
        line-height 1rem
        height 1rem
        font-size .4rem
      .header-right
        width 1rem
        height 1rem
        line-height 1rem
        text-align center
        .plus
          color #ffffff
          font-size .5rem !important
</style>

