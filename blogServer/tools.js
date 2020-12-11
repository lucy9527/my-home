/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-11 13:06:20
 * @LastEditTime: 2020-12-11 13:07:56
 * @LastEditors: HongXuan.Lu
 */
function getId(){
  var id = Math.floor(Math.random()*2147483646);
  // fs.mkdirSync('./images/'+id) //node创建目录
  // 可以加上username表示个人的数据
  return id;
}

module.exports = {
  getId
}