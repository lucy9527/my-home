/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-09 17:14:31
 * @LastEditTime: 2020-12-09 17:32:09
 * @LastEditors: HongXuan.Lu
 */
const dateOp = function (data) {
  console.log(data,typeof(data));
  var date = new Date(data-0)
  var year = date.getFullYear()
  var month = date.getMonth()
  var day = date.getDay()
  var minute = date.getMinutes()
  return [year,month,day,minute].join('/')
}

export const  dateFormat = dateOp;