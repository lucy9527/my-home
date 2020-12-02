/*
 * @Description: 选择图片
 * @Author: HongXuan.Lu
 * @Date: 2020-12-02 19:47:29
 * @LastEditTime: 2020-12-02 20:05:11
 * @LastEditors: HongXuan.Lu
 */
// var input2 = document.getElementById("input2")
// var input3 = document.getElementById("input3")
// var input4 = document.getElementById("input4")
export const ip1 = function() {
  var input1 = document.getElementById("input1")
  console.log('input',input1);
  return new Promise(function(resolve){
    input1.addEventListener('change', () => {
      const reader = new FileReader()
      reader.readAsDataURL(input1.files[0]) // input.files[0]为第一个文件
      reader.onload = () => {
        // const img = new Image()
        resolve(reader.result)
        // img.src = reader.result
        // document.body.appendChild(img)  // reader.result为获取结果
      }
    }, false)
  })
}
// input1.addEventListener('change', () => {
//   console.log(input.files)
//   const reader = new FileReader()
//   reader.readAsDataURL(input.files[0]) // input.files[0]为第一个文件
//   console.log(input.files, reader)
//   reader.onload = () => {
//     const img = new Image()
//     // img.src = reader.result
//     // document.body.appendChild(img)  // reader.result为获取结果
//   }
// }, false)