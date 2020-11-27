<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-25 18:40:09
 * @LastEditTime: 2020-11-25 20:20:01
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="myArticle-box">
    <div @click="goHome">首页</div>
    <div class="title">标题</div>
    <div class="body">文章体</div>
    <div class="foot">底部</div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("home");
    },
  },
};
</script>

<style>
</style>