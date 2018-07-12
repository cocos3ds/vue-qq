<template>
  <div class="contacts-list">
    <ul>
      <li>
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
          </div>
        </div>
      </li>
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
    height 1.2rem
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
        .name
          color #000
          font-size .4rem
        .date
          float right
  .select
    background #edfaff
  
</style>
