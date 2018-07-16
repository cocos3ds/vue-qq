<template>
  <div class="chat">
    <chat-header/>
    <message-list/>
    <send-box/>
  </div>
</template>

<script>
import ChatHeader from './components/Header.vue'
import SendBox from './components/SendBox.vue'
import MessageList from './components/MessageList.vue'

export default {
  name: 'Chat',
  components: {
    ChatHeader,
    SendBox,
    MessageList
  }
}
</script>

<style lang="stylus" scoped>
  .chat
    height 100%
    display flex
    flex-direction column
</style>




