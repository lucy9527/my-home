/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-04 20:05:03
 * @LastEditTime: 2020-12-04 22:04:52
 * @LastEditors: HongXuan.Lu
 */
const fs = require('fs')
const path = require("path");

function getId(){
  var id = Math.floor(Math.random()*2147483646);
  fs.mkdirSync('./images/'+id) //node创建目录
  // 可以加上username表示个人的数据
  return id;
}
function dealImg(imgData){
  var articleId = getId()
  fs.writeFileSync('images/'+articleId+'.txt',imgData)
  return articleId
}
function readDir(){
  var fs = require("fs");
  var dirs = [];
  var pathName = "E:/test";
  fs.readdir(pathName, function(err, files){
      for (var i=0; i<files.length; i++)
      {
        fs.stat(path.join(pathName, files[i]), function(err, data){     
              if(data.isFile())
              {               
                  dirs.push(files[i]);
              }
          });
      } 
      console.log(dirs);  
  });
}

module.exports = dealImg;
// exports.dealImg = {dealImg};