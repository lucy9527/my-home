/*
 * @Description: 饼图
 * @Author: Do not edit
 * @Date: 2020-12-18 09:25:58
 * @LastEditTime: 2021-01-18 17:00:25
 * @LastEditors: HongXuan.Lu
 */
var draw = function(ct , data){
  this.ct = ct 
  this.x0 = 200 
  this.y0 = 100
  this.r = 50
  this.startAngle = 0
  this.endAngle = 0
  this.data = data
  this.outWidth = this.r + 60
  this.titleWidth = 50
  this.zone = 0
  this.color = ""
  this.init()  
}

draw.prototype.init = function(){
  this.getAngle()
  this.drawPie()
}

draw.prototype.drawPie = function(){
  for(var i =0 ; i < this.data.length; i++){
    this.startAngle = this.endAngle
    if(i === this.data.length-1){ this.endAngle = 2 * Math.PI }
    else this.endAngle = this.endAngle + this.data[i].angle
    this.ct.beginPath()
    this.ct.moveTo(this.x0 ,this.y0)
    this.ct.fillStyle = this.randomColor()
    this.ct.arc(this.x0, this.y0, this.r, this.startAngle , this.endAngle)
    this.ct.lineTo(this.x0 ,this.y0)
    this.ct.fill()
    this.drawTitle(this.startAngle , this.endAngle, this.data[i].title, this.ct.fillStyle  )
  }
}

draw.prototype.drawTitle = function(start , end , title ,color){
  this.ct.beginPath()
  this.ct.moveTo(this.x0 ,this.y0)
  this.ct.strokeStyle = color
  this.ct.font = '16px STHeiti, SimHei';
  this.ct.textBaseline = "bottom"
  var x1 = this.outWidth*Math.cos((end-start)/2 + start)
  var y1 = this.outWidth*Math.sin((end-start)/2 + start)
  this.ct.lineTo(this.x0 + x1, this.y0 + y1)
  if(x1>0) {
    this.ct.lineTo(this.x0 + x1+this.titleWidth , this.y0 + y1) 
    this.ct.fillText(title,this.x0 + 5 + x1, this.y0 + y1 )
  }else{
    this.ct.lineTo(this.x0 + x1-this.titleWidth , this.y0 + y1) 
    this.ct.fillText(title,this.x0 + 5 + x1 -this.titleWidth, this.y0 + y1 )
  }
  this.ct.stroke()
}

draw.prototype.getAngle = function(){
  // reduce 方法改造
  var sum = this.data.reduce((sum,item)=> {return {num : (sum.num + item.num)}; }).num
  for(var i=0;i< this.data.length-1;i++){
    this.data[i].angle = 2 * (this.data[i].num/sum).toPrecision(2) *Math.PI
  }
  this.data[this.data.length-1].angle = 2 * (this.data[this.data.length-1].num/sum).toPrecision(2) *Math.PI
}

draw.prototype.randomColor = function(){
  this.zone = (this.zone+1) % 4
  return "rgb(" + Math.floor(Math.random() * 64 + this.zone * 64) + ',' +
      Math.floor(Math.random() * 64 + this.zone * 64) + ',' + 
      Math.floor(Math.random() * 64 + this.zone * 64) + ")"
}
export default draw;