import Vue from 'vue'
import App from './App.vue'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
