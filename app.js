/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-08 19:19:03
 * @LastEditTime: 2020-12-08 21:02:35
 * @LastEditors: HongXuan.Lu
 */
const HTTP = require('http');
const fs = require('fs')
const url = require('url')

const server = HTTP.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname.slice(1)
    console.log(pathname);
    switch(pathname) {
      case 'home':
        res.setHeader('Content-Type', 'text/html')
        var html = fs.readFileSync('./blog01/dist/index.html')
        res.write(html)
        res.end()
        break;
      case 'bundle':
        res.setHeader('Content-Type', 'text/plain')
        var js = fs.readFileSync('./blog01/dist/bundle.js')
        res.write(js)
        res.end()
        break;
      case 'dist/edit.jpg':
        res.setHeader('Content-Type', 'image/jpeg')
        var p1 = fs.readFileSync('./blog01/dist/edit.jpg')
        res.write(p1)
        res.end()
        break;
      case 'dist/game.jpg':
        res.setHeader('Content-Type', 'image/jpeg')
        var p1 = fs.readFileSync('./blog01/dist/game.jpg')
        res.write(p1)
        res.end()
        break;
      case 'dist/home.jpg':
        res.setHeader('Content-Type', 'image/jpeg')
        var p1 = fs.readFileSync('./blog01/dist/home.jpg')
        res.write(p1)
        res.end()
        break;
      case 'dist/myhome.jpg':
        res.setHeader('Content-Type', 'image/jpeg')
        var p1 = fs.readFileSync('./blog01/dist/myhome.jpg')
        res.write(p1)
        res.end()
        break;
      case 'dist/zhanwei.jpg':
        res.setHeader('Content-Type', 'image/jpeg')
        var p1 = fs.readFileSync('./blog01/dist/zhanwei.jpg')
        res.write(p1)
        res.end()
        break;
      case 'dist/fontello.svg':
        res.setHeader('Content-Type', 'text/plain')
        var p1 = fs.readFileSync('./blog01/dist/fontello.svg')
        res.write(p1)
        res.end()
        break;
    }
})

console.log('已启动');
server.on('clientError',(err,socket)=>{
  socket.end('HTTP/1.1 400 Bad Request\r\n')
})

server.listen(9527)