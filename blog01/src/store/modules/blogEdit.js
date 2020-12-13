/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-03 11:09:36
 * @LastEditTime: 2020-12-13 14:41:18
 * @LastEditors: HongXuan.Lu
 */
const edit = {
  namespaced :true,
  state: {
    title:"",
    intro:"",
    blogValue:"",
  },
  mutations: {
    setall(state,val){
      state = val
    },
    settitle(state, newValue) {
      console.log(newValue);
      state.title = newValue
    },
    setintro(state, newValue) {
      state.intro = newValue
    },
    setblogValue(state, val) {
      state.blogValue = val
    },
  },
  getters: {
    getall(state){
      return state
    },
    title(state) {
      return state.title
    },
    intro(state) {
      return state.intro
    },
    blogValue(state) {
      return state.blogValue
    },
  },
  actions: {}
}

export default edit;