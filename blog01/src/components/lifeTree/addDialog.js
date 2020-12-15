/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-10 10:43:15
 * @LastEditTime: 2020-12-15 18:46:46
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
  color: [
    { required: true, message: '请选择一种背景颜色', trigger: 'change' }
  ],
  end: [
    { type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }
  ],
  content: [
    { required: true, message: '请填写活动内容', trigger: 'blur' }
  ]
}

export const colors = colorOptions
export const formrules = formRule