/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-12 15:51:30
 * @LastEditTime: 2020-12-12 15:57:59
 * @LastEditors: HongXuan.Lu
 */
const dbUser = require('./dbUser.js')
function login(req,res){
  //登录
  // res.set('charset','utf-8')
  console.log('login');
  new Promise(function(resolve,reject){
    dbUser('search', req.body ,resolve)
  }).then(data=>res.end(data))
  // res.end(ret)
}
function register(req,res){
  console.log('register');
  new Promise(function(resolve,reject){
    dbUser('insert', req.body ,resolve)
  }).then(data=>res.end(data))
}
module.exports = {
  login,
  register
}