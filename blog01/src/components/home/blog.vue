<!--
 * @Description: 首页主题部分
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-07 13:34:11
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="home-page">
    <div class="home-content">
      <div class="blog-box" v-for="(item, index) in blogData" :key="index">
        <div class="blog-img">
          <img :src="jsonToBuffer(item)" alt="#" />
        </div>
        <div class="blog-intro" @click="goTo('blog', item.articleId)">
          <p class="intro">{{ item.intro }}</p>
          <div class="blog-title">
            <p :class="'color' + Math.floor(Math.random() * 5)" class="title">
              {{ item.title }}
            </p>
            <p class="date">2020-1-30</p>
            <p class="count">阅读量：{{ item.count }}</p>
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
    };
  },
  methods: {
    jsonToBuffer(data) {
      var key = "" + data.articleId;
      var img = this.imgData[key];
      return img ? Buffer.from(JSON.parse(JSON.stringify(img))) : "";
    },
    goTo(type, id) {
      if (type == "blog") this.$store.commit("allpaper/setarticleId", id);
      this.$router.push(type);
    },
    async reqArticle() {
      const res = await getBlog("allpaper");
      this.imgData = res.pop().img;
      this.blogData = res;
      // this.$store.commit("allpaper/setpaper", this.blogData);
      // this.$store.commit("allpaper/setimg", this.imgData);
      // this.testImg = Buffer.from(
      //   JSON.parse(JSON.stringify(this.imgData["1242630713"]))
      // );
      // const reader = new FileReader();
      // reader.readAsDataURL(this.imgData["1242630713"]);
      // reader.onload = () => {
      //   this.testImg = reader.result;
      // };
    },
  },
  mounted() {
    this.reqArticle();
  },
};
</script>
<style lang="scss" src="./blog.scss"></style>