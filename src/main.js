import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css';
import '@vant/touch-emulator';
import axios from 'axios'
////导入样式表
import './assets/css/global.css'

Vue.use(Vant);


axios.defaults.baseURL = '/jeewms_war_exploded'

Vue.prototype.$axios = axios
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
