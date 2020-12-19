<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-19 11:14:25
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
              v-model="article.content"
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
        content: "",
        username: sessionStorage.getItem("username"),
        date: new Date().getTime(),
      },
      curclick: "",
      saveSign: false,
      opType: "",
    };
  },
  methods: {
    async publishData(data) {
      var res;
      if (this.opType === "create") {
        res = await publish("create", data);
      } else {
        res = await publish("edit", data);
      }
      if (res === "yes") this.$router.push("home");
    },
    onSubmit() {
      if (!this.saveSign) {
        this.$message.error("编辑后未点击红色保存按钮！");
        return;
      }
      if (this.article.title == "" || this.article.intro == "") {
        this.$message.error("文章标题、要纲不能为空！");
        return;
      }
      this.publishData(this.article);
    },
    save(value, render) {
      this.$message.success("已保存！");
      this.saveSign = true;
      // 两个都是String类型   保存按钮
      value = value.replace(/^'$/, "\'");
      console.log(value);
      this.article.content = render;
    },
  },
  mounted() {
    console.log(this.$route.params);
    this.opType = this.$route.params.type;
    if (this.opType === "edit") {
      this.article = this.$store.getters["allpaper/getcurpaper"];
    }
  },
};
</script>

<style lang="scss" src="./main.scss"></style>