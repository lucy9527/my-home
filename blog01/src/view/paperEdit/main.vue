<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-13 19:56:50
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="edit-box">
    <div class="edit-zone">
      <el-form ref="form" :model="article" label-width="80px">
        <el-form-item class="title" label="文章标题:">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item class="intro" label="文章要纲:">
          <el-input v-model="article.intro"></el-input>
        </el-form-item>
        <el-form-item label="文章内容:">
          <div id="editor">
            <!-- props就是里面的属性，toolbars也是属性，很多已经是默认值了 -->
            <mavon-editor
              style="height: 100%"
              v-model="article.blogValue"
              undo="true"
              redo="true"
              language="cn"
              placeholder="请开始编辑文章"
              @save="save"
            ></mavon-editor>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">上传</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { publish } from "@/request/ajax.js";
export default {
  data() {
    return {
      article: {
        title: "",
        intro: "",
        blogValue: "",
      },
      curclick: "",
      saveSign: false,
    };
  },
  methods: {
    async publishData() {
      var data = this.$store.getters["blogedit/getall"];
      data.username = sessionStorage.getItem("username");
      var pubDate = new Date();
      data.date = pubDate.getTime();
      await publish("edit", data);
    },
    onSubmit() {
      if (!this.saveSign) {
        this.$message.error("编辑后未点击红色保存按钮！");
        return;
      }
      this.$store.commit("blogedit/setall", this.article);
      if (this.article.title == "" || this.article.intro == "") {
        this.$message.error("文章标题、要纲不能为空！");
        return;
      }
      this.publishData();
      this.$router.push("home");
    },
    save(value, render) {
      this.$message.success("已保存！");
      this.saveSign = true;
      // 两个都是String类型   保存按钮
      this.article.blogValue = render;
      // this.$store.commit("blogedit/setcontent", render);
    },
  },
  mounted() {
    this.article = this.$store.getters["blogedit/getall"];
  },
};
</script>

<style lang="scss" src="./main.scss"></style>