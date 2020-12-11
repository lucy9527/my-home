/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-10 17:47:43
 * @LastEditTime: 2020-12-11 16:53:38
 * @LastEditors: HongXuan.Lu
 */
import baseUrl from './config'
var ajax = new XMLHttpRequest()
var param = ""
// ----------------添加-------------------------
function addLifenode(type,data){
  data.username = sessionStorage.getItem('username')
  ajax.open('post',baseUrl+type,true)
  ajax.setRequestHeader('Content-type','application/json');
  ajax.send(JSON.stringify(data))
  return new Promise((resolve,reject)=>{
    try{
      ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
          resolve(JSON.parse(ajax.responseText));
        }
      }
    }catch(err){
      reject(err)
    }
  })
}
//----------------删除--------------------
function deleteLifenode(type,id){
  param = '/'+ id
  ajax.open('post',baseUrl+type+param ,true)
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
//----------------获取全部-------------------
function getLifetree(type){
  param = '/'+sessionStorage.getItem('username') 
  ajax.open('post',baseUrl+type+param ,true)
  ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  ajax.send()
  return new Promise((resolve,reject)=>{
    try{
      ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
          resolve(JSON.parse(ajax.responseText));
        }
      }
    }catch(err){
      reject(err)
    }
  })
}
export const addLifeNode = addLifenode;
export const deleteLifeNode = deleteLifenode;
export const getLifeTree = getLifetree;