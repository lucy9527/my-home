<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 14:35:16
 * @LastEditTime: 2020-11-30 18:24:52
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div id="editor">
    <div class="header">
      <el-button type="primary" @click="goTo()">返回上一层</el-button>
      <el-button type="primary" @click="goTo('home')">提交</el-button>
    </div>
    <mavon-editor
      style="height: 100%"
      v-model="value"
      @save="save"
    ></mavon-editor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    save(value, render) {
      console.log(value, render);
    },
    goTo() {
      this.$router.push("edit");
    },
  },
};
</script>

<style>
</style>