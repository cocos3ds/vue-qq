<template>
  <div class="MessageList">
    <ul>
      <li class="message-wrapper" 
      v-for="(message,index) of messageList" 
      :key="index">
        <div class="message-me" v-if="message.type == 'self'">
          <div class="avatar">
            <img src="/img/avatar.jpg" class="avatar">
          </div>
          <div class="text-wrapper">
            <div class="text">{{message.text}}</div>
            <span class="arrow"></span>
          </div>
        </div>
        <div class="message-other" v-else>
          <div class="avatar">
            <img src="/img/avatar.jpg" class="avatar">
          </div>
          <div class="text-wrapper">
            <div class="text">{{message.text}}</div>
            <span class="arrow"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MessageList',
  data: function () {
    return {
      messageList: []
    }
  },
  props:{
    newMessage: Object
  },
  watch: {
    newMessage: function (newValue) {
      if (newValue.text !== '') {
        this.messageList.push(newValue);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .MessageList
    flex 1
    background #f0f2f8
    overflow hidden
    .message-wrapper
      margin .3rem 0rem
      .message-me
        display flex
        flex-direction row-reverse
        align-items flex-start
        .text-wrapper
          max-width 60%
          margin-right .2rem
          position relative
          .text
            background #98e165
            font-size .6rem
            padding .2rem
            overflow-wrap break-word
            border-radius .1rem
          .arrow
            position absolute
            top 13px
            right -7px
            border-left: .2rem solid #9bdf53;
            border-top: .2rem solid #ffffff00;
            border-bottom: .2rem solid #ffffff00;
        .avatar
          width 1rem
          height 1rem
          margin-right .2rem
      .message-other
        display flex
        align-items flex-start
        .text-wrapper
          max-width 60%
          margin-right .2rem
          position relative
          .text
            background #98e165
            font-size .6rem
            padding .2rem
            overflow-wrap break-word
            border-radius .1rem
          .arrow
            position absolute
            top 13px
            left -7px
            border-right: .2rem solid #9bdf53;
            border-top: .2rem solid #ffffff00;
            border-bottom: .2rem solid #ffffff00;
        .avatar
          width 1rem
          height 1rem
          margin-right .2rem
                  
</style>
