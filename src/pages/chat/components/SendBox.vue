<template>
    <div class="SendBox">
        <div class="left">
          <input 
            class="message" 
            type="text" 
            v-model="message"
            @keydown.enter="handleSendMessage"
          >
        </div>
       <div class="right">
          <div 
          :class="{blue:message}" 
          class="sendbtn" 
          @click="handleSendMessage"
          >
          发送
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SendBox',
  data: function () {
    return {
      message: ''
    }
  },
  methods: {
    handleSendMessage: function () {
      this.$emit('SendMessage',{type:'self',text:this.message});
      this.message = ''
    }
  }

}
</script>

<style lang="stylus" scoped>
  .SendBox
    width 100%
    display flex
    height 1.2rem
    .left
      flex 1
      margin 0.2rem .2rem
      .message
        height 100%
        width 100%
        border-radius .2rem
    .right
      line-height .8rem
      margin .2rem .2rem .2rem 0rem
      .sendbtn
        background #dddee2
        padding 0 .3rem
        border-radius .2rem
      .blue
        background #12b7f5
        color #fff
</style>

