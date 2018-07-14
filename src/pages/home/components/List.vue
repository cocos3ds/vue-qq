<template>
  <div class="contacts-list">
    <ul>
      <router-link to="/chat" tag="li">
        <div class="item border-bottom select">
          <div class="item-left">
            <img class="item-avatar" src="/img/avatar.jpg" >
          </div>
          <div class="item-right">
            <div class="up">
              <div class="name">
                vue聊天群
              </div>
              <div class="date">
                2018-07-01
              </div>
            </div>
            <div class="down">
              打开支付宝首页搜索"7401104",即可领...
            </div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeList'
}
</script>
<style lang="stylus" scoped>
  .item
    height 1.5rem
    overflow hidden
    padding .2rem .3rem
    display flex
    .item-avatar
      height 1.2rem
      width 1.2rem
      border-radius 50%
    .item-right
      flex 1
      margin-left .2rem
      .up
        display flex
        .name
          color #000
          font-size .4rem
          flex 1
        .date
          float right
          line-height .44rem
      .down
        color #828282
        line-height .7rem
  .select
    background #edfaff
  
</style>
