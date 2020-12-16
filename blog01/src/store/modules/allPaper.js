/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-06 14:03:21
 * @LastEditTime: 2020-12-16 09:12:30
 * @LastEditors: HongXuan.Lu
 */
const allpaper = {
  namespaced :true,
  state: {
    articleId:'',
    curpaper:{},
  },
  mutations: {
    setarticleId(state,val){
      state.articleId = val
    },
    setcurpaper(state,val){
      state.curpaper = val
    },
  },
  getters: {
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
    },
  },
  actions: {}
}

export default allpaper;