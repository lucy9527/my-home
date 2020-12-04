<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-04 21:34:08
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
          <el-button type="primary" @click="goTo('editor')">编辑</el-button>
        </el-form-item>
        <el-form-item label="上传封面:">
          <div class="img-filter">
            <div class="img-box">
              <img :src="article.img" alt="暂无" />
              <input type="file" @click="clicked('img')" @change="change" />
            </div>
          </div>
          <!-- <el-input v-model="article.picture"></el-input> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
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
        img: "",
      },
      curclick: "",
    };
  },
  methods: {
    //--------------上传图片-------------------
    clicked(type) {
      this.curclick = type;
    },
    change(e) {
      // console.log(e.target.files);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        this.article[this.curclick] = reader.result;
      };
    },
    // ----------------上传文章信息-------------------------
    async publishData() {
      var data = this.$store.getters["blogedit/getall"];
      data.username = sessionStorage.getItem("username")
      await publish("edit", data);
    },
    onSubmit() {
      this.$store.commit("blogedit/setall", this.article);
      if (this.article.title == "" || this.article.intro == "") {
        this.$message.error("文章标题、要纲不能为空！");
        return;
      }
      this.publishData();
    },
    goTo(type) {
      this.$router.push(type);
    },
  },
  mounted() {
    this.article = this.$store.getters["blogedit/getall"];
  },
};
</script>

<style lang="scss" src="./main.scss"></style>