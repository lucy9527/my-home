/*
 * @Description: 入口文件
 * @Author: Do not edit
 * @Date: 2020-11-19 10:17:21
 * @LastEditTime: 2020-12-11 14:30:56
 * @LastEditors: HongXuan.Lu
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import store from './store/index.js'

Vue.use(elementUI);
Vue.use(mavonEditor);


console.log(typeof Vue,'????',Object.keys(Vue));
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
