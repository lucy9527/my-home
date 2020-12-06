/*
 * @Description: 前端路由控制
 * @Author: Do not edit
 * @Date: 2020-11-19 14:34:18
 * @LastEditTime: 2020-12-06 15:00:31
 * @LastEditors: HongXuan.Lu
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/view/login/index.vue'
import home from '@/view/home'
import myArticle from '@/view/article/myArticle.vue'
import game from '@/view/game'
import edit from '@/view/blog-edit'
import blog from '@/view/blog-content'
import editor from '@/components/editor.vue'
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
]

const router = new VueRouter({routes})
export default router