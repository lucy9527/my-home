/*
 * @Description: 文章内容数据库操作
 * @Author: Do not edit
 * @Date: 2020-11-27 18:34:33
 * @LastEditTime: 2020-12-07 17:26:03
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
        var dataString = JSON.stringify(data);
        data = JSON.parse(dataString);
        switch (type){
          case 'all':
            resolve(data);
            break;
          case 'id':
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
function dbOptions(op , data,resolve){
  var ret = ""
  switch (op) {
    case 'searchAll':
      // var sql = 'SELECT * FROM `article` WHERE `username` = "' + data.username+'"'
      var sql = 'SELECT * FROM `article`'
      queryData(sql,'all').then(data=>resolve(data))
      break;
    case 'searchid':
      var sql = `SELECT * FROM article where articleId = ${data}`
      queryData(sql,'id').then(data=>resolve(data))
      break;
    case 'userpaper':
      var sql = `SELECT * FROM article where username = '${data}'`
      queryData(sql,'all').then(data=>resolve(data))
      break;
    case 'insert':
      var sql = `INSERT INTO article(title,intro,content,articleId,count,labels,username,comment) values ('${data.title}','${data.intro}','${data.content}','${data.articleId}','${data.count || 0 }','${data.labels || ""}','${data.username}','${data.articleId}')` //初始化给comment赋值文章id
      queryData(sql,'insert').then(userData=>
        {
          resolve(userData? 'no' : 'yes')
        })
      break;
    case 'update':
      var arr = data.split('+')
      var sql = `UPDATE article SET comment = '${data}' where articleId = '${arr[0]}'`
      db.query(sql,function(err,data){
        if(err){
          console.log("数据库访问出错",err);
        }else{
          // 如果不写resolve，请求显示是pending，前端await后面的代码不会执行
          resolve('yes');
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
  return ret
}
module.exports = dbOptions;