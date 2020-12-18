/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-16 21:31:25
 * @LastEditTime: 2020-12-18 10:09:50
 * @LastEditors: HongXuan.Lu
 */
var drawLine = function(ct , data ,width , height){
  this.ct = ct 
  this.x0 = 20 
  this.y0 = height - 15
  this.data = data
  this.rank = 0
  this.width = width 
  this.height = height
  this.scaleX = Math.floor((width - 50)/data.length)
  this.scaleY = Math.floor((height - 15)/5)
  this.beforeX = this.x0
  this.beforeY = this.y0
  this.init()
  console.log(this);
}

drawLine.prototype.init = function(){
  this.drawCorSystem()
  this.draw()
}

drawLine.prototype.drawCorSystem = function(){
  this.ct.beginPath()
  this.ct.moveTo(this.x0 , this.y0)
  this.ct.strokeStyle = "black"
  this.ct.lineWidth = 2
  this.ct.lineTo(this.width , this.y0)
  this.ct.lineTo(this.x0,this.y0)
  this.ct.fillText('0', this.x0-10, this.y0 +10)
  this.ct.lineTo(this.x0 , 0)
  this.ct.stroke()
  this.ct.beginPath()
  this.ct.strokeStyle = "red"
  this.ct.moveTo(this.x0 -20, this.y0)
  for(var i = 20 ; i < this.y0-10 ; i += 20){
    this.ct.fillText(i, this.x0-20 , this.y0 - i)
    this.ct.moveTo(this.x0,this.y0 - i)
    this.ct.lineTo(this.x0+3,this.y0 - i)
  }
  this.ct.stroke()
}

drawLine.prototype.draw = function(){
  this.ct.font = '12px';
  for(var i = 0 ;i < this.data.length ;i++){
    this.ct.beginPath()
    this.ct.fillStyle = this.randomColor()
    this.ct.arc(this.x0+(i+1)*this.scaleX-10 , this.y0 -this.data[i].num , 3 ,0 ,2*Math.PI) 
    this.ct.fill()
    this.ct.fillStyle = 'black'
    this.ct.fillText(this.data[i].title, this.x0+(i+1)*this.scaleX-14,this.y0 + 10)
    this.ct.fillText(this.data[i].num, this.x0+(i+1)*this.scaleX-14,this.y0 -this.data[i].num -5)
    if(i > 0 ){
      this.ct.beginPath()
      this.ct.strokeStyle = 'black'
      this.ct.moveTo(this.beforeX,this.beforeY)
      this.ct.lineTo(this.x0+(i+1)*this.scaleX-10 , this.y0 -this.data[i].num)
      this.ct.stroke()
    }
    this.beforeX = this.x0+(i+1)*this.scaleX-10
    this.beforeY = this.y0 -this.data[i].num
  }
}

drawLine.prototype.randomColor = function(){
  this.rank = (this.rank+1) % 4
  return "rgb(" + Math.floor(Math.random() * 64 + this.rank * 64) + ',' +
      Math.floor(Math.random() * 64 + this.rank * 64) + ',' + 
      Math.floor(Math.random() * 64 + this.rank * 64) + ")"
}
export default drawLine;