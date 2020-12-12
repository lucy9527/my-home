<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-10 10:11:40
 * @LastEditTime: 2020-12-11 23:08:11
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="addDialog">
    <el-form ref="addForm" :model="addForm" :rules="rule" label-width="80px">
      <el-form-item label="活动名称：" prop="name">
        <el-input v-model="addForm.name"></el-input>
      </el-form-item>
      <el-form-item label="颜色：" prop="color">
        <el-select v-model="addForm.color" placeholder="请选择颜色">
          <el-col :span="11">
            <el-option
              v-for="(item, index) in options"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-col>
          <el-col :span="11"></el-col>
        </el-select>
      </el-form-item>
      <el-form-item label="开始时间：" prop="dateBegin">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="addForm.dateBegin"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="结束时间：" prop="dateEnd">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="addForm.dateEnd"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="标签：" prop="label">
        <el-radio-group v-model="addForm.label">
          <el-radio label="饮食" name="type"></el-radio>
          <el-radio label="游戏" name="type"></el-radio>
          <el-radio label="学习" name="type"></el-radio>
          <el-radio label="旅游" name="type"></el-radio>
          <el-radio label="无为" name="type"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动内容：" prop="content">
        <el-input
          type="textarea"
          v-model="addForm.content"
          maxlength="40"
          show-word-limit
        ></el-input>
      </el-form-item>
      <slot name="footer"></slot>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { colors, formrules } from "./addDialog.js";
export default {
  data() {
    return {
      addForm: {
        name: "",
        color: "",
        dateBegin: new Date(),
        dateEnd: "",
        label: "", //多选框这里是【】，单选是""
        content: "",
      },
      options: colors,
      rule: formrules,
    };
  },
  methods: {
    onSubmit() {
      var data = this.addForm;
      this.$emit("submit", data);
      this.addForm = {
        name: "",
        color: "",
        dateBegin: new Date(),
        dateEnd: "",
        label: "", //多选框这里是【】，单选是""
        content: "",
      };
      // this.$refs["addForm"].validate((valid) => {
      //   //必须有这部分代码才会去验证
      //   if (valid) {
      //     //成功执行代码
      //     this.$emit("submit", this.addForm);
      //   } else {
      //     this.$messge.error("error submit!!");
      //     return false;
      //   }
      // });
    },
    resetForm() {
      this.$refs["addForm"].resetFields();
    },
  },
};
</script>

<style lang="scss" src="./addDialog.scss"></style>