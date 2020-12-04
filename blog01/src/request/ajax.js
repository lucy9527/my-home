/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-25 20:30:11
 * @LastEditTime: 2020-12-04 13:11:40
 * @LastEditors: HongXuan.Lu
 */
import baseUrl from './config'
var ajax = new XMLHttpRequest()
function login(type,params){
  ajax.open('post',baseUrl+type ,true)
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

function pubData(type,bodyData){
  ajax.open('post',baseUrl+type ,true)
  ajax.setRequestHeader('Content-type','application/json');
  ajax.send(JSON.stringify(bodyData))
  return new Promise((resolve,reject)=>{
    try{   
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

function reqA(type){
  console.log(type);
  ajax.open('post',baseUrl+type ,true)
  ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  ajax.send()
  return new Promise((resolve,reject)=>{
    try{   
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
export const request = login;
export const publish = pubData;
export const reqData = reqA;


