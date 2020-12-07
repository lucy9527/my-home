/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-03 11:01:00
 * @LastEditTime: 2020-12-07 08:57:24
 * @LastEditors: HongXuan.Lu
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persistedstate'  // 浏览器最大缓存是5M

// import  actions from './actions.js'
import * as mutations from './mutation.js'
import {state} from './state.js'

import blogedit from './modules/blogEdit.js'
import allpaper from './modules/allPaper.js'

const vuexPersisted = new VuexPersistence({
  storage: window.sessionStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions,
  mutations,
  modules:{
    blogedit,
    allpaper
  },
  plugins: [vuexPersisted]
})