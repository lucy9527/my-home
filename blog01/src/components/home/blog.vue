<!--
 * @Description: 首页主题部分
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-13 20:08:25
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="home-page">
    <div class="home-content">
      <div
        class="blog-box scale1_5"
        v-for="(item, index) in blogData"
        :key="index"
        @click="goTo('blog', item.articleId)"
      >
        <div class="blog-img">
          <img
            :src="require(`../../assets/images/home-paper/${getRandom(5)}.jpg`)"
            alt="#"
          />
        </div>
        <div class="blog-intro">
          <p class="intro">{{ item.intro }}</p>
          <div class="blog-title">
            <p :class="'color' + Math.floor(Math.random() * 5)" class="title">
              {{ item.title }}
            </p>
            <p class="date">{{ dateformat(item.date) }}</p>
            <p class="count">阅读量：{{ item.count }}</p>
          </div>
        </div>
      </div>
      <page-vue :total="totalSize" @pageChange="pageChange"></page-vue>
    </div>
  </div>
</template>

<script>
import pageVue from "@/components/common/pagination.vue";
import { getBlog } from "@/request/ajax.js";
import { getRandomId, dateFormat } from "../../utils/help.js";
export default {
  components: {
    pageVue,
  },
  data() {
    return {
      blogData: "",
      totalSize: 0,
    };
  },
  methods: {
    getRandom: getRandomId,
    dateformat: dateFormat,
    goTo(type, id) {
      if (type == "blog") this.$store.commit("allpaper/setarticleId", id);
      this.$router.push(type);
    },
    async reqArticle(pageNo = 1) {
      const res = await getBlog("allpaper", pageNo);
      this.blogData = res.data;
      this.totalSize = res.total;
    },
    pageChange(pageNo) {
      this.reqArticle(pageNo);
    },
  },
  mounted() {
    this.reqArticle();
  },
};
</script>
<style lang="scss" src="./blog.scss"></style>