import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home.vue'
import Chat from './pages/chat/Chat.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})
