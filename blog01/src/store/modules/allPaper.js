/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-06 14:03:21
 * @LastEditTime: 2020-12-07 17:37:30
 * @LastEditors: HongXuan.Lu
 */
const allpaper = {
  namespaced :true,
  state: {
    // paper :[],
    // img:{},
    articleId:'',
    curpaper:{}
  },
  mutations: {
    // setpaper(state,val){
    //   state.paper = val 
    // },
    // setimg(state,val){
    //   state.img = val
    // },
    setarticleId(state,val){
      state.articleId = val
    },
    setcurpaper(state,val){
      state.curpaper = val
    }
  },
  getters: {
    // getimg(state){
    //   return state.img
    // },
    // getpaper(state){
    //   return state.paper
    // },
    getblog(state){
      return function(articleId){
        return state.paper.filter(item=>item.articleId == articleId)[0]
      }
    },
    getid(state){
      return state.articleId
    },
    getcurpaper(state){
      return state.curpaper
    }
  },
  actions: {}
}

export default allpaper;