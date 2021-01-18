<!--
 * @Description: 节点处理对话框
 * @Author: Do not edit
 * @Date: 2021-01-16 14:24:38
 * @LastEditTime: 2021-01-18 19:11:17
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="dealDialog">
    <el-form ref="dealForm" :model="dealForm" label-width="80px">
      <el-form-item label="任务日志：" prop="tasklog">
        <el-input
          type="textarea"
          v-model="dealForm.tasklog"
          maxlength="100"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="任务名：" prop="name">
        <el-input v-model="dealForm.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="结束时间：" prop="end">
        <el-input v-model="dealForm.end" disabled></el-input>
      </el-form-item>
      <el-form-item label="难度：" pop="difficulty">
        <el-input v-model="dealForm.difficulty" disabled></el-input>
      </el-form-item>
      <el-form-item label="任务内容：" prop="content">
        <el-input
          type="textarea"
          disabled
          v-model="dealForm.content"
          maxlength="40"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateLog">更新日志</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { newLog } from "../../../request/taskTreeApi.js";
import { dateFormat } from "../../../utils/help.js";
export default {
  props: ["dealdata"],
  data() {
    return {
      dealForm: {},
    };
  },
  watch: {
    dealdata: {
      immediate: true,
      handler: function (newV) {
        this.dealForm = newV;
        this.dealForm.end = dateFormat(this.dealForm.end);
      },
    },
  },
  methods: {
    async updateLog() {
      var data = {
        tasklog: this.dealForm.tasklog,
        tasknodeId: this.dealForm.tasknodeId,
      };
      const res = await newLog("newlog", data);
      this.$emit("updateLogs");
      setTimeout(() => {
        this.$message.success(
          res === "ok" ? "任务日志更新成功！" : "更新失败！"
        );
      }, 100);
    },
  },
};
</script>

<style lang="scss" src="./index.scss"></style>