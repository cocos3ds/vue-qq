<template>
  <div class="chat">
    <chat-header/>
    <message-list :newMessage="newMessage" :userid="userid"/>
    <send-box @SendMessage="handleSendMessage" :userid="userid"/>
  </div>
</template>

<script>
import ChatHeader from './components/Header.vue'
import SendBox from './components/SendBox.vue'
import MessageList from './components/MessageList.vue'
import io from 'socket.io-client'

export default {
  name: 'Chat',
  data: function () {
    return {
      newMessage:{},
      userid:''
    }
  },
  components: {
    ChatHeader,
    SendBox,
    MessageList
  },
  methods: {
    handleSendMessage: function (message) {
      this.socket.emit('chat message',message)
    },
    setMessage: function (message) {
       this.newMessage = message
    }
  },
  mounted () {
    this.socket = new io('http://localhost:3000')
    var self = this
    this.socket.on('chat message',function (message) {
      message.type = 'otehr'
      self.setMessage(message);
    })
    this.socket.on('connect',()=>{
      this.userid = this.socket.id
    })
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




