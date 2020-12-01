/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-27 18:34:33
 * @LastEditTime: 2020-12-01 09:39:32
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
            resolve(data.length ? 'yes' : 'no');
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
      var sql = 'SELECT * FROM `userdata` WHERE `username` = "' + data.username+'"'
      queryData(sql,'search').then(data=>resolve(data))
      break;
    case 'insert':
      // 套中套 
      var sql = 'SELECT username FROM `userdata` WHERE `username` = "' + data.username+'"'
      queryData(sql,'insert').then(userData=>
        {
          // console.log(data,userList['0']);
          if(userData == "no"){ //查询得到的是{'0':{数据1},'1':{数据2}}
            sql = `INSERT INTO userdata(username,password) values ('${data.username}','${data.password}')`
            queryData(sql).then(data=>{resolve('yes');console.log('data',data);})
          }else{
            resolve('no')
          }
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