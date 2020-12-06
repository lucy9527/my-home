<!--
 * @Description: 文章详情页
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-07 00:13:00
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div>
    <header-vue></header-vue>
    <div class="paper-box">
      <div class="blog-header">
        <h2 class="title">{{ blogData.title }}</h2>
        <p class="date">2020</p>
      </div>
      <div class="blog-content" :blogData="blogData">
        <div v-html="blogData.content" class="content"></div>
      </div>
      <div class="footer">
        <div class="comment-edit">
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="myView"
            maxlength="30"
            show-word-limit
          >
          </el-input>
          <el-button type="primary" @click="subView">提交评论</el-button>
        </div>
        <div class="views">
          <ul>
            <p>评论区留言：</p>
            <li v-for="(item, index) in views" :key="index + 'v'">
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerVue from "@/components/common/header";
import { subV, getBlog } from "@/request/ajax";

export default {
  components: {
    headerVue,
  },
  data() {
    return {
      blogData: "",
      articleId: "",
      myView: "",
      views: [],
    };
  },
  methods: {
    async subView() {
      if (this.myView.trim() === "") {
        this.$message.error("评论不能为空！");
        return;
      }
      const res = await subV(
        "myview",
        [
          this.articleId,
          sessionStorage.getItem("username"),
          this.myView.trim(),
        ].join("+")
      );
      console.log(res);
    },
    async getPaper() {
      const res = await getBlog("paper", this.articleId);
      this.blogData = res[0];
      if (res[0].comment !== "") {
        this.views = res[0].comment.split("+").slice(1);
      }
    },
  },
  mounted() {
    this.articleId = this.$store.getters["allpaper/getid"];
    this.getPaper();
  },
};
</script>

<style lang="scss" src='./index.scss'></style>