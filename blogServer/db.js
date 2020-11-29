/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-26 19:31:52
 * @LastEditTime: 2020-11-26 21:02:52
 * @LastEditors: HongXuan.Lu
 */
const mysql = require("mysql");
// 这里跟express没有关系， 实质上是node的mysql模块在操作
var db=mysql.createConnection({host:'localhost',port:'3306',user:"root",password:'123',database:'user'});
db.connect()
var count = 3

function dbOptions(op , data){
  switch (op) {
    case 'search':
      db.query("SELECT * FROM userdata WHERE user",function(err,data){
        if(err){
          console.log("数据库访问出错",err);
        }else{
          console.log(data);
        }
      })
      break;
    case 'insert':
      console.log(data);
      db.query(`INSERT INTO userdata(userid,username,password) values (${count++},'${data.username}','${data.password}')`,function(err,data){
        if(err){
          console.log("数据库访问出错",err);
        }else{
          console.log(data);
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
}

module.exports = dbOptions;