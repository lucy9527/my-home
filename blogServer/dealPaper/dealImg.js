/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-04 20:05:03
 * @LastEditTime: 2020-12-12 00:33:53
 * @LastEditors: HongXuan.Lu
 */
const { json } = require('express');
const fs = require('fs')
const path = require("path");

function getId(){
  var id = Math.floor(Math.random()*2147483646);
  // fs.mkdirSync('./images/'+id) //node创建目录
  return id;
}
//存储图片
function dealImg(imgData){
  var articleId = getId() //判断是否有图片数据
  if(imgData.length > 0 ) fs.writeFileSync('images/'+articleId+'.txt',imgData)
  return articleId
}

function readDict(){
  var dict = {};
  var files = fs.readdirSync('./images') 
  for (var i=0; i<files.length; i++)
    {
      var key = files[i].split('.')[0]
      dict[key] = Buffer.from(JSON.parse(JSON.stringify(fs.readFileSync('images/'+files[i]))))      
    } 
  return dict ; 
}

module.exports = {dealImg,readDict};
// exports.dealImg = {dealImg};