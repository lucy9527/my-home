<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 14:35:16
 * @LastEditTime: 2020-12-03 15:34:56
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div id="editor">
    <div class="header">
      <el-button type="primary" @click="goTo()">返回上一层</el-button>
      <el-button type="primary" @click="goTo('home')">提交</el-button>
    </div>
    <!-- props就是里面的属性，toolbars也是属性，很多已经是默认值了 -->
    <mavon-editor
      style="height: 100%"
      v-model="value"
      undo="true"
      redo="true"
      language="cn"
      placeholder="请开始编辑文章"
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
      // 两个都是String类型
      this.$store.commit("blogedit/setcontent", render);
    },
    goTo() {
      this.$router.push("edit");
    },
  },
  mounted() {
    this.value = this.$store.getters["blogedit/content"];
  },
};
</script>

<style>
</style>