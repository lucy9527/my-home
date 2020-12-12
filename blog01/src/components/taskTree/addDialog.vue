<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-10 10:11:40
 * @LastEditTime: 2020-12-11 23:20:13
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="addDialog">
    <el-form ref="addForm" :model="addForm" :rules="rule" label-width="80px">
      <el-form-item label="任务名：" prop="name">
        <el-input v-model="addForm.name"></el-input>
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
      <el-form-item label="难度：" prop="label">
        <el-radio-group v-model="addForm.label">
          <el-radio label="简单" name="type"></el-radio>
          <el-radio label="有挑战" name="type"></el-radio>
          <el-radio label="困难" name="type"></el-radio>
          <el-radio label="艰难" name="type"></el-radio>
          <el-radio label="绝望" name="type"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="任务内容：" prop="content">
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
import { formrules } from "./addDialog.js";
export default {
  data() {
    return {
      addForm: {
        name: "",
        dateEnd: "",
        difficulty: "", //多选框这里是【】，单选是""
        content: "",
        tasklog: "",
      },
      rule: formrules,
    };
  },
  methods: {
    onSubmit() {
      var data = this.addForm;
      this.$emit("submit", data);
      this.addForm = {
        name: "",
        dateEnd: "",
        difficulty: "", //多选框这里是【】，单选是""
        content: "",
        tasklog: "",
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