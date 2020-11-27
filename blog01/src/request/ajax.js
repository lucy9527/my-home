/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-25 20:30:11
 * @LastEditTime: 2020-11-26 14:17:10
 * @LastEditors: HongXuan.Lu
 */
import baseUrl from './config'
var ajax = new XMLHttpRequest()
function request(type,params){
  ajax.open('post',baseUrl+'login',true)
  ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  ajax.send('username='+params.username+'&password='+params.password)
  return new Promise((resolve,reject)=>{
    try{   //使用promise包装数据，得到异步数据
      ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
          resolve(ajax.responseText);
        }
      }
    }catch(err){
      reject(err)
    }
  })
}

export default request;