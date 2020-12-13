<!--
 * @Description: 文章详情页
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-13 20:15:02
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="paper-content">
    <header-vue type="articles"></header-vue>
    <div class="paper-box">
      <div class="blog-header">
        <p class="title">{{ blogData.title }}</p>
        <p class="date">{{ dateformat(blogData.date) }}</p>
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
          <p class="v_header">评论区留言：</p>
          <ul>
            <li
              class="view-card shadow"
              v-for="(item, index) in viewList"
              :key="index + 'v'"
            >
              <div class="view-card">
                <p class="text">{{ item.split("=")[1] }}</p>
                <p class="name">{{ item.split("=")[0] }} 2018/4/12 20:46</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerVue from "@/components/common/header.vue";
import { subV, getBlog, countadd } from "@/request/ajax.js";
import { dateFormat } from "../../utils/help.js";

export default {
  components: {
    headerVue,
  },
  data() {
    return {
      blogData: "",
      articleId: "",
      myView: "",
      viewList: [],
      comment: "",
      st: "",
    };
  },
  methods: {
    dateformat: dateFormat,
    async subView() {
      // 更新评论
      if (this.myView.trim() === "") {
        this.$message.error("评论不能为空！");
        return;
      }
      var newComment =
        this.comment +
        "&" +
        sessionStorage.getItem("username") +
        "=" +
        this.myView.trim();
      const res = await subV("myview", this.articleId, newComment);
      if (res === "yes") {
        this.viewList.push(
          sessionStorage.getItem("username") + "=" + this.myView.trim()
        );
      }
      this.myView = "";
    },
    async getPaper() {
      const res = await getBlog("paper", this.articleId);
      this.blogData = res[0];
      this.comment = res[0].comment;
      this.viewList = res[0].comment.split("&").filter((item) => item !== "");
    },
    async countAdd() {
      const res = await countadd("count", this.articleId);
      console.log(res);
    },
  },
  mounted() {
    this.articleId = this.$store.getters["allpaper/getid"];
    this.getPaper();
    this.st = setTimeout(this.countAdd, 6000);
  },
  beforeDestroy() {
    clearTimeout(this.st);
  },
};
</script>

<style lang="scss" src='./index.scss'></style>
<style lang="scss" src='./shadow.scss' scoped></style>