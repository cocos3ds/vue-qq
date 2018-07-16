<template>
  <div class="chat">
    <chat-header/>
    <message-list :newMessage="newMessage"/>
    <send-box @SendMessage="handleSendMessage"/>
  </div>
</template>

<script>
import ChatHeader from './components/Header.vue'
import SendBox from './components/SendBox.vue'
import MessageList from './components/MessageList.vue'

export default {
  name: 'Chat',
  data: function () {
    return {
      newMessage:{}
    }
  },
  components: {
    ChatHeader,
    SendBox,
    MessageList
  },
  methods: {
    handleSendMessage: function (message) {
      this.newMessage = message
    }
  }
}
</script>

<style lang="stylus" scoped>
  .chat
    height 100%
    display flex
    flex-direction column
    background #f0f2f8
</style>




