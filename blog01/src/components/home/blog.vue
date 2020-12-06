<!--
 * @Description: 首页主题部分
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-06 11:10:40
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="main">
    <div class="main-content">
      <div class="blog-box" v-for="(item, index) in blogData" :key="index">
        <div class="blog-intro">
          <div class="blog-name hand" @click="goTo('content')">
            <p>{{ item.title }}</p>
            <p>{{ item.intro }}</p>
          </div>
          <div class="blog-date">2020-1-30</div>
        </div>
        <div class="blog-part">
          <div class="blog-img">
            <img :src="jsonToBuffer(item)" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBlog } from "@/request/ajax";
export default {
  data() {
    return {
      blogData: "",
      imgData: "",
      testImg: "",
    };
  },
  methods: {
    jsonToBuffer(data) {
      var key = "" + data.articleId;
      var img = this.imgData[key];
      return img ? Buffer.from(JSON.parse(JSON.stringify(img))) : "";
    },
    goTo(type) {
      this.$router.push(type);
    },
    async reqArticle() {
      const res = await getBlog("allpaper");
      this.imgData = res.pop().img;
      this.testImg = Buffer.from(
        JSON.parse(JSON.stringify(this.imgData["1242630713"]))
      );
      // const reader = new FileReader();
      // reader.readAsDataURL(this.imgData["1242630713"]);
      // reader.onload = () => {
      //   this.testImg = reader.result;
      // };
      this.blogData = res;
    },
  },
  mounted() {
    this.reqArticle();
  },
};
</script>
<style lang="scss" src="./blog.scss"></style>