/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-25 20:44:15
 * @LastEditTime: 2020-12-01 09:15:44
 * @LastEditors: HongXuan.Lu
 */
const express = require('express')
const app =  express();
const bodyParser = require('body-parser')

const db = require('./db.js')

// 解析body
// parse application/x-www-form-urlencoded  
app.use(bodyParser.urlencoded({ extended: false }))    
// parse application/json  
app.use(bodyParser.json()) 

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  next()
})
app.post('/login',function(req,res){
  //登录
  // res.set('charset','utf-8')
  console.log('login');
  new Promise(function(resolve,reject){
    db('search', req.body ,resolve)
  }).then(data=>res.end(data))
  // res.end(ret)
})

app.post('/register',function(req,res){
  //注册
  // res.set('charset','utf-8')
  console.log('register');
  new Promise(function(resolve,reject){
    db('insert', req.body ,resolve)
  }).then(data=>res.end(data))
})
app.listen(3000)