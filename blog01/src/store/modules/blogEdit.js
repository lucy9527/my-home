/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-03 11:09:36
 * @LastEditTime: 2020-12-16 10:26:36
 * @LastEditors: HongXuan.Lu
 */
const edit = {
  namespaced :true,
  state: {
    title:"",
    intro:"",
  },
  mutations: {
    settitle(state, newValue) {
      console.log(newValue);
      state.title = newValue
    },
    setintro(state, newValue) {
      state.intro = newValue
    },
  },
  getters: {
    title(state) {
      return state.title
    },
    intro(state) {
      return state.intro
    },
  },
  actions: {}
}

export default edit;