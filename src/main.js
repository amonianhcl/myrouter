import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Item from 'ant-design-vue'

Vue.use(Item)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

