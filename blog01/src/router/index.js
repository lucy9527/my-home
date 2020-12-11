/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-27 18:34:33
 * @LastEditTime: 2020-12-11 17:05:27
 * @LastEditors: HongXuan.Lu
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../view/login/index.vue'
import home from '../view/home/index.vue'
import myArticle from '../view/userArticles/myArticle.vue'
import game from '../view/game/index.vue'
import edit from '../view/paperEdit/index.vue'
import blog from '../view/paperContent/index.vue'
import editor from '../components/editor.vue'
import lifetree from '../view/lifeTree'
import tasktree from '../view/taskTree'

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
  {
    path: "/blog",
    name : 'blog',
    component : blog  }, 
  {
    path: "/editor",
    name : 'editor',
    component : editor  },
  {
    path: "/lifetree",
    name : 'lifetree',
    component : lifetree  },
  {
    path: "/tasktree",
    name : 'tasktree',
    component : tasktree  },     
]

const router = new VueRouter({routes})
export default router