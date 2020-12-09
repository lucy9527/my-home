/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-08 18:49:32
 * @LastEditTime: 2020-12-08 19:10:36
 * @LastEditors: HongXuan.Lu
 */
const HTTP = require('http');
const fs = require('fs')

const server = HTTP.createServer((req,res)=>{
  console.log('被访问');
  fs.createReadStream('./dist/index.html').pipe(res)
  res.end()
})

console.log('已启动');
server.on('clientError',(err,socket)=>{
  socket.end('HTTP/1.1 400 Bad Request\r\n')
})

server.listen(9527)