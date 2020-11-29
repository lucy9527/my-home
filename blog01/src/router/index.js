/*
 * @Description: 首页
 * @Author: Do not edit
 * @Date: 2020-11-19 14:34:18
 * @LastEditTime: 2020-11-26 19:30:34
 * @LastEditors: HongXuan.Lu
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../view/login/index.vue'
import home from '../view/home/home.vue'
import myArticle from '../view/article/myArticle.vue'
import game from '../view/game'
import edit from '../view/blog-edit/edit'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: 'login'
  },
  {
    path: "/home",
    name : 'home',
    //node中的概念  require(files,callback) 第一个参数是要加载的js文件，是一个数组，第二个参数是回调函数，前面的js文件加载运行完后，会执行callback这个回调函数
    component : home
    // component : Home
  },
  {
    path: "/login",
    name : 'login',
    component : login  
  },
  {
    path: "/myArticle",
    name : 'myArticle',
    component : myArticle  },
  {
    path: "/game",
    name : 'game',
    component : game  },
  {
    path: "/edit",
    name : 'edit',
    component : edit  },    
]

const router = new VueRouter({routes})
export default router