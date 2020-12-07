/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-25 20:30:11
 * @LastEditTime: 2020-12-07 17:13:01
 * @LastEditors: HongXuan.Lu
 */
import baseUrl from './config'
var ajax = new XMLHttpRequest()

//--------------------用户登录----------------------------
function logOrReg(type,params){
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
//---------------------创建博客-----------------------------
function createBlog(type,bodyData){
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
//---------------------获取文章------------------------
function getBlogs(type,articleId){
  ajax.open('post', baseUrl+type ,true)
  ajax.setRequestHeader('Content-type','application/json');
  var id = {}
  id.articleId = articleId
  ajax.send(JSON.stringify(id))
  return new Promise((resolve,reject)=>{
    try{   
      ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
          setTimeout(resolve(JSON.parse(ajax.responseText)),1000)
        }
      }
    }catch(err){
      reject(err)
    }
  })
}
function getUserBlogs(type,username){
  ajax.open('post', baseUrl+type ,true)
  ajax.setRequestHeader('Content-type','application/json');
  var user = {}
  user.username = username
  ajax.send(JSON.stringify(user))
  return new Promise((resolve,reject)=>{
    try{   
      ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
          setTimeout(resolve(JSON.parse(ajax.responseText)),1000)
        }
      }
    }catch(err){
      reject(err)
    }
  })
}
//------------------提交评论------------------------
function subCom(type,bodyData){
  var obj = {}
  obj['data'] = bodyData
  ajax.open('post',baseUrl+type ,true)
  ajax.setRequestHeader('Content-type','application/json');
  ajax.send(JSON.stringify(obj))
  // ajax.send(bodyData)
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
export const request = logOrReg;
export const publish = createBlog;
export const getBlog = getBlogs;
export const subV = subCom;
export const getUserBlog = getUserBlogs;



