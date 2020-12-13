<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-13 23:12:35
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="header" :class="type + 'bg'">
    <div class="left">
      <a @click="goTo('home')" class="hand scale1_5">首页</a>
      <a @click="goTo('myArticle')" class="hand scale1_5">我的博客</a>
      <a @click="goTo('edit')" class="hand scale1_5">博客编辑</a>
      <a @click="goTo('lifetree')" class="hand scale1_5">树生活</a>
      <a @click="goTo('tasktree')" class="hand scale1_5">任务树</a>
    </div>
    <div class="middle"></div>
    <div class="right">
      <a @click="goTo('suggestions')" class="hand scale1_5">留言板</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type"],
  name: "Header",
  data() {
    return {};
  },
  methods: {
    goTo(type) {
      this.$router.push(type);
    },
  },
  created() {},
};
</script>

<style lang="scss" src="./header.scss" scoped></style>