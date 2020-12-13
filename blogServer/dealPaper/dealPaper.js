/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-12 15:58:58
 * @LastEditTime: 2020-12-13 20:18:18
 * @LastEditors: HongXuan.Lu
 */
const {getId} = require('../tools.js')
const dbArticle = require('./dbArticle.js');

function edit(req,res){
  var reqData = req.body
  reqData.articleId = getId()
  new Promise(function(resolve,reject){
    dbArticle('insert', reqData ,resolve)
  }).then(data=>res.end(data))
}

function paperAll(req,res){
  new Promise(function(resolve,reject){
    dbArticle('searchAll', req.body.pageNo ,resolve)
    //网络只能传输字符串或buffer二进制流，先处理成json字符串
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // Array 的type 为object
    // data.push({'img':readDict()})
    res.send(data)
    res.end()})
}

function paperId(req,res){
  new Promise(function(resolve,reject){
    dbArticle('searchid', req.body.articleId ,resolve)
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send(data)
    res.end()})
}
function paperView(req,res){  
  new Promise(function(resolve,reject){
    dbArticle('update', req.body ,resolve)
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(data)})
}

function userpaper(req,res){ 
  new Promise(function(resolve,reject){
    dbArticle('userpaper', req.body ,resolve)
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(data))})
}
function delpaper(req,res){ 
  new Promise(function(resolve,reject){
    dbArticle('delpaper', req.body.id ,resolve)
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(data))})
}
function countAdd(req,res){ 
  new Promise(function(resolve,reject){
    dbArticle('count', req.body.id ,resolve)
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(data))})
}
module.exports = {
  edit,
  paperAll,
  paperId,
  paperView,
  userpaper,
  delpaper,
  countAdd
}