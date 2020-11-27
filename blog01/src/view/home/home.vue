<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-19 15:19:04
 * @LastEditTime: 2020-11-25 20:22:06
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="home">
    <div class="self-home">
      <a @click="goTo('myArticle')">我的博客</a>
    </div>
    <div class="blog-box">
      <div class="blog-intro">
        <div class="blog-name">博客名称</div>
        <div class="blog-date">博客发布时间</div>
      </div>
      <div class="blog-part">
        <div class="blog-img">
          <img src="" alt="" />
        </div>
        <div class="blog-content">博客简介</div>
      </div>
    </div>
    <div class="blog-box">
      <div class="blog-intro">
        <div class="blog-name">vue</div>
        <div class="blog-date">2020.01.02</div>
      </div>
      <div class="blog-part">
        <div class="blog-img">
          <img src="" alt="" />
        </div>
        <div class="blog-content">vue是一种前端技术框架</div>
      </div>
    </div>
    <div @click="goTo('game')">游戏页面</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goTo(type) {
      console.log("跳转");
      this.$router.push(type);
    },
  },
  mounted() {
    // console.log(this.$route);
  },
};
</script>

<style>
</style>