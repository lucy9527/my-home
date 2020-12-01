/*
 * @Description: 入口文件
 * @Author: Do not edit
 * @Date: 2020-11-19 10:17:21
 * @LastEditTime: 2020-11-30 14:33:44
 * @LastEditors: HongXuan.Lu
 */
import Vue from 'vue'
import App from './App.vue'
// 默认找文件下的index
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
 
Vue.use(elementUI);
Vue.use(mavonEditor);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
