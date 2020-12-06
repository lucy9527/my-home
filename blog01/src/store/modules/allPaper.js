/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-06 14:03:21
 * @LastEditTime: 2020-12-06 18:18:36
 * @LastEditors: HongXuan.Lu
 */
const allpaper = {
  namespaced :true,
  state: {
    paper :[],
    img:{},
    articleId:''
  },
  mutations: {
    setpaper(state,val){
      state.paper = val 
    },
    setimg(state,val){
      state.img = val
    },
    setarticleId(state,val){
      state.articleId = val
    }
  },
  getters: {
    getimg(state){
      return state.img
    },
    getpaper(state){
      return state.paper
    },
    getblog(state){
      return function(articleId){
        return state.paper.filter(item=>item.articleId == articleId)[0]
      }
    },
    getid(state){
      return state.articleId
    }
  },
  actions: {}
}

export default allpaper;