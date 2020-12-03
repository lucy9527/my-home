/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-03 11:01:00
 * @LastEditTime: 2020-12-03 18:09:50
 * @LastEditors: HongXuan.Lu
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import  actions from './actions.js'
import * as mutations from './mutation.js'
import {state} from './state.js'

import blogedit from './modules/blogEdit.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions,
  mutations,
  modules:{
    blogedit
  }
})