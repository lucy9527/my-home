/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-25 20:44:15
 * @LastEditTime: 2020-11-26 20:54:40
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
  // res.set('charset','utf-8')
  console.log('login');
  db('insert', req.body)
  res.end('yes')
})

app.listen(3000)