/*
 * @Description: 服务器入口
 * @Author: Do not create
 * @Date: 2020-11-27 18:34:33
 * @LastEditTime: 2021-01-18 10:38:28
 * @LastEditors: HongXuan.Lu
 */
const express = require('express')
const app =  express();
const bodyParser = require('body-parser')
const fs = require('fs')
//---------------用户登录--------------
const {login,register} = require('./dealUser/dealuser.js')
//---------------Tree处理--------------
const {getLifeTree,addLifeNode, deleteLifeNode} = require('./timeTree/dealTimeTree.js')
const {getTaskTree,addTaskNode,deleteTaskNode,updateLog} = require('./taskTree/dealTaskTree.js')
//---------------文章处理--------------
const { edit ,create,paperAll,paperId,paperView, userpaper ,delpaper,countAdd } = require('./dealPaper/dealPaper.js')
//------------------处理所有请求-------------------------
// 解析body
// parse application/json  
app.use(bodyParser.json({limit:'2100000kb'}));
// parse application/x-www-form-urlencoded  
app.use(bodyParser.urlencoded({limit:'2100000kb',extended:false}));

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
   //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  res.header('Access-Control-Allow-Methods','POST,GET'); //允许的请求方式
  next()
})
// -------------------全局预览--------------------
app.post("*",function(req,res,next){
  console.log(req.path);
  next()
})
//-------------------登录单元-----------------------
app.post('/login',login)
app.post('/register',register)
//-------------------文章单元-----------------------
app.post('/create',create)
app.post('/edit',edit)
app.post('/allpaper',paperAll)
app.post('/paper',paperId)
app.post('/myview',paperView)
app.post('/userpaper',userpaper)
app.post('/delPaper',delpaper)
app.post('/count',countAdd)
//--------------------生活树单元--------------------
app.post('/deleteLife/:lifenodeId',deleteLifeNode)
app.post('/addLife',addLifeNode)
app.post('/allLife/:username',getLifeTree)
//--------------------任务树单元--------------------
app.post('/deleteTask/:tasknodeId',deleteTaskNode)
app.post('/addTask',addTaskNode)
app.post('/allTask/:username',getTaskTree)
app.post('/newlog',updateLog)

app.listen(3000)