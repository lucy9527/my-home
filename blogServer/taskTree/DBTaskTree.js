/*
 * @Description: 文章内容数据库操作
 * @Author: Do not edit
 * @Date: 2020-11-27 18:34:33
 * @LastEditTime: 2020-12-11 23:48:42
 * @LastEditors: HongXuan.Lu
 */
const mysql = require("mysql");
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
            console.log(data);
            resolve(data);
            break;
          case 'id':
            resolve(data);
            break;
          case 'insert' : 
            resolve(data.serverStatus ? 'Y' : 'N');
            break;
          case 'delete':
            resolve('Y');
            break;
        }
      }
    })
  })
}
function dbOptions(op , data,resolve){
  var ret = ""
  switch (op) {
    case 'getUserAll':
      var sql = `SELECT * FROM tasktree where username = "${data}"`
      queryData(sql,'all').then(data=>resolve(data))
      break;
    case 'addTaskNode':
      var sql = `INSERT INTO tasktree (name,end,difficulty,content,tasklog,username,tasknodeId) value ("${data.name}","${data.dateEnd}","${data.difficulty}","${data.content}","${data.tasklog}","${data.username}","${data.tasknodeId}") `
      queryData(sql,'insert').then(data=>resolve(data))
      break;
    case 'deleTaskNode':
      var sql = `DELETE FROM tasktree where tasknodeId = "${data}"`
      queryData(sql,'delete').then(data=>resolve(data))
      break;
    default:
      break;
  }
  return ret
}
module.exports = dbOptions;