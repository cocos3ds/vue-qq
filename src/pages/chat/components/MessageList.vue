<template>
  <div class="MessageList">
    <ul>
      <li class="message-wrapper" 
      v-for="(message,index) of messageList" 
      :key="index">
        <div class="message" v-if="message.type == 'self'">
          <div class="avatar">
            <img src="/img/avatar.jpg" class="avatar">
          </div>
          <span class="text">
          {{message.text}}
          </span>
        </div>
        <div class="message" v-else></div>
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
      .message
        display flex
        flex-direction row-reverse
        .text
          background #98e165
          margin-right .2rem
        .avatar
          width 1rem
          height 1rem
          border-radius 50%          
</style>
