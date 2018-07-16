<template>
    <div class="SendBox">
        <div class="left">
          <input class="message" type="text" v-model="Message">
        </div>
       <div class="right">
          <button>发送</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SendBox',
  data: function () {
    return {
      Message: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .SendBox
    width 100%
    display flex
    height .8rem
    .left
      flex 1
      .message
        height 100%
        width 100%
    .right
      line-height .8rem

</style>

