/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-03 11:09:36
 * @LastEditTime: 2020-12-12 00:27:11
 * @LastEditors: HongXuan.Lu
 */
const edit = {
  namespaced :true,
  state: {
    title:"",
    intro:"",
    content:"",
    // img:"",
  },
  mutations: {
    setall(state,val){
      var content = state.content
      state = val
      state.content = content
    },
    // ---------------------------
    settitle(state, newValue) {
      console.log(newValue);
      state.title = newValue
    },
    setintro(state, newValue) {
      state.intro = newValue
    },
    setcontent(state, val) {
      state.content = val
    },
    // setimg(state, newValue) {
    //   state.img = newValue
    // },
  },
  getters: {
    getall(state){
      return state
    },
    //---------------不要写错了--------------------
    title(state) {
      return state.title
    },
    intro(state) {
      return state.intro
    },
    content(state) {
      return state.content
    },
    // img(state) {
    //   return state.img
    // },
  },
  actions: {}
}

export default edit;