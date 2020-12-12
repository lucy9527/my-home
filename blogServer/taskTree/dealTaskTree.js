const dbTaskTree = require('./DBTaskTree.js');
//----------------全部--------------------
 const getTaskTree = function(req,res){  
  new Promise(function(resolve,reject){
    dbTaskTree('getUserAll', req.params.username ,resolve)
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(data))}).catch(err=>err)
}
//----------------添加-----------------
const addTaskNode = function(req,res){  
  new Promise(function(resolve,reject){
    dbTaskTree('addTaskNode', req.body ,resolve)
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(data))}).catch(err=>err)
}
//----------------删除------------------
function deleteTaskNode(req,res){  
  new Promise(function(resolve,reject){
    dbTaskTree('deleTaskNode', req.params.tasknodeId ,resolve)
  }).then(data=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(data))}).catch(err=>err)
}

module.exports = {
  getTaskTree,
  addTaskNode,
  deleteTaskNode
}