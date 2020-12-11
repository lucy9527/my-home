const dbTimeTree = require('./DBTimeTree.js');
//----------------全部--------------------
 const getLifeTree = function(req,res){  
  new Promise(function(resolve,reject){
    dbTimeTree('getUserAll', req.params.username ,resolve)
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(data))}).catch(err=>err)
}
//----------------添加-----------------
const addLifeNode = function(req,res){  
  new Promise(function(resolve,reject){
    dbTimeTree('addLifeNode', req.body ,resolve)
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(data))}).catch(err=>err)
}
//----------------删除------------------
function deleteLifeNode(req,res){  
  new Promise(function(resolve,reject){
    dbTimeTree('deleLifeNode', req.params.lifenodeId ,resolve)
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(data))}).catch(err=>err)
}

module.exports = {
  getLifeTree,
  addLifeNode,
  deleteLifeNode
}