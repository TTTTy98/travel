import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import 'quill/dist/quill.snow.css'; // 引入 Quill 样式

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI)

let bus = new Vue({});
Vue.prototype.$bus = bus
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')


