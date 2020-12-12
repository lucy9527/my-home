/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-09 17:14:31
 * @LastEditTime: 2020-12-12 13:29:19
 * @LastEditors: HongXuan.Lu
 */
const dateOp = function (data) {
  var date = new Date(data-0)
  var year = date.getFullYear()
  var month = date.getMonth()
  var day = date.getDay()
  var minute = date.getMinutes()
  return [year,month,day,minute].join('/')
}
function getId(num=5,offset=0){
  var id = Math.floor(Math.random()*num + offset);
  return id;
}
export const  dateFormat = dateOp;
export const getRandomId = getId;