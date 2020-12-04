/*
 * @Description: 文章内容数据库操作
 * @Author: Do not edit
 * @Date: 2020-11-27 18:34:33
 * @LastEditTime: 2020-12-04 13:22:34
 * @LastEditors: HongXuan.Lu
 */
// 数据库操作也是异步的
const mysql = require("mysql");
// 这里跟express没有关系， 实质上是node的mysql模块在操作
var db=mysql.createConnection({host:'localhost',port:'3306',user:"root",password:'123',database:'user'});
db.connect()

function queryData(sql,type){
  var ret
  return new Promise((resolve,reject)=>{
    db.query(sql, function(err,data){
      if(err){
        console.log("数据库访问出错",err);
        reject(err)
      }else{
        switch (type){
          case 'search':
            
            // var dataString = JSON.stringify(data);
            // data = JSON.parse(dataString);
            resolve(data);
            break;
          case 'insert' : 
            resolve(data.length ? 'yes' : 'no');
            break;
        }
      }
    })
  })
}
function dbOptions(op , data ,resolve){
  var ret = ""
  switch (op) {
    case 'search':
      // var sql = 'SELECT * FROM `article` WHERE `username` = "' + data.username+'"'
      var sql = 'SELECT * FROM `article`'
      queryData(sql,'search').then(data=>resolve(data))
      break;
    case 'insert':
      // 套中套 
      sql = `INSERT INTO article(title,intro,content,img1,img2,img3,img4,username) values ('${data.title}','${data.intro}','${data.content}','${data.img1}','${data.img2}','${data.img3}','${data.img4}','${data.username}')`
      queryData(sql,'insert').then(userData=>
        {
          console.log(userData);
          resolve(userData? 'no' : 'yes')
        })
      break;
    case 'update':
      db.query("UPDATE userdata SET password = '321' WHERE userid = 2",function(err,data){
        if(err){
          console.log("数据库访问出错",err);
        }else{
          console.log(data);
        }
      })
      break;
    case 'delete':
      db.query("DELETE FROM userdata WHERE userid= 2",function(err,data){
        if(err){
          console.log("数据库访问出错",err);
        }else{
          console.log(data);
        }
      })
      break;
    default:
      break;
  }
  console.log(ret);
  return ret
}
module.exports = dbOptions;