/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-19 10:17:21
 * @LastEditTime: 2020-11-25 09:40:35
 * @LastEditors: HongXuan.Lu
 */
import Vue from 'vue'
import App from './App.vue'
// 默认找文件下的index
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementUI) 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
