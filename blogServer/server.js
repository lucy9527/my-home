/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-25 20:44:15
 * @LastEditTime: 2020-12-04 13:25:09
 * @LastEditors: HongXuan.Lu
 */
const express = require('express')
const app =  express();
const bodyParser = require('body-parser')
//---------------数据库--------------------
const dbUser = require('./dbUser.js')
const dbArticle = require('./dbArticle.js')
//------------------处理所有请求-------------------------
// 解析body
// parse application/json  
app.use(bodyParser.json({limit:'2mb'}));
// parse application/x-www-form-urlencoded  
app.use(bodyParser.urlencoded({limit:'5mb',extended:false}));

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
   //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  res.header('Access-Control-Allow-Methods','POST,GET'); //允许的请求方式
  next()
})

//-------------------具体接口-----------------------
app.post('/login',function(req,res){
  //登录
  // res.set('charset','utf-8')
  console.log('login');
  new Promise(function(resolve,reject){
    dbUser('search', req.body ,resolve)
  }).then(data=>res.end(data))
  // res.end(ret)
})

app.post('/register',function(req,res){
  console.log('register');
  new Promise(function(resolve,reject){
    dbUser('insert', req.body ,resolve)
  }).then(data=>res.end(data))
})

app.post('/edit',function(req,res){
  console.log('edit');
  console.log(req.body);
  new Promise(function(resolve,reject){
    dbArticle('insert', req.body ,resolve)
  }).then(data=>res.end(data))
})

app.post('/allpaper',function(req,res){
  console.log('allpaper');
  new Promise(function(resolve,reject){
    dbArticle('search', req.body ,resolve)
    // 数据乱码
  }).then(data=>res.end(JSON.stringify(data)))
})

app.listen(3000)