<!--
 * @Description: 留言
 * @Author: Do not edit
 * @Date: 2020-12-10 10:11:40
 * @LastEditTime: 2020-12-18 09:23:04
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="addDialog">
    <el-form ref="addForm" :model="suggestion" :rules="rule" label-width="80px">
      <el-form-item label="任务内容：" prop="content">
        <el-input
          type="textarea"
          v-model="suggestion"
          maxlength="40"
          show-word-limit
        ></el-input>
      </el-form-item>
      <slot name="footer"></slot>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onSubmit('no')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      suggestion: "",
    };
  },
  methods: {
    onSubmit(type) {
      if (type === "no") {
        this.suggestion = "";
        return;
      }
      var data = this.addForm;
      this.$emit("submit", data);
    },
  },
};
</script>

<style lang="scss" src="./addDialog.scss"></style>