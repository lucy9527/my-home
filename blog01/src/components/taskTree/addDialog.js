/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-10 10:43:15
 * @LastEditTime: 2020-12-11 20:38:27
 * @LastEditors: HongXuan.Lu
 */
const colorOptions = [
  {
    label: "红色",
    value: "red",
  },
  {
    label: "蓝色",
    value: "blue",
  },
  {
    label: "浅绿",
    value: "green",
  },
  {
    label: "黄色",
    value: "yellow",
  },
  {
    label: "橘色",
    value: "orange",
  },
]

const formRule = {
  // name: [
  //   { required: true, message: '请输入活动名称', trigger: 'blur' },
  //   { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
  // ],
  color: [
    { required: true, message: '请选择一种背景颜色', trigger: 'change' }
  ],
  // dateBegin: [
  //   { type: 'date', required: true, message: '请选择开始时间', trigger: 'change' }
  // ],
  dateEnd: [
    { type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }
  ],
  // label: [
  //   { required: true, message: '请选择一个标签', trigger: 'change' }
  // ],
  content: [
    { required: true, message: '请填写活动内容', trigger: 'blur' }
  ]
}

export const colors = colorOptions
export const formrules = formRule