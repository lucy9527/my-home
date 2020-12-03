/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-03 11:09:36
 * @LastEditTime: 2020-12-03 18:42:05
 * @LastEditors: HongXuan.Lu
 */
const module = {
  namespaced :true,
  state: {
    title:"",
    intro:"",
    content:"",
    img1:"",
    img2:"",
    img3:"",
    img4:""
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
    setimg1(state, newValue) {
      state.img1 = newValue
    },
    setimg2(state, newValue) {
      state.img2 = newValue
    },
    setimg3(state, newValue) {
      state.img3 = newValue
    },
    setimg4(state, newValue) {
      state.img4 = newValue
    }
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
    img1(state) {
      return state.img1
    },
    img2(state) {
      return state.img2
    },
    img3(state) {
      return state.img3
    },
    img4(state) {
      return state.img4
    },
  },
  actions: {}
}

export default module;