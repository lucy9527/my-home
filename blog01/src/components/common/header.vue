<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-16 22:07:54
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="header">
    <div class="left">
      <a @click="goTo('home')" class="hand scale1_5">首页</a>
      <a @click="goTo('myArticle')" class="hand scale1_5">我的博客</a>
      <a
        @click="goTo({ name: 'edit', params: { type: 'create' } })"
        class="hand scale1_5"
        >博客编辑
      </a>
      <a @click="goTo('lifetree')" class="hand scale1_5">树生活</a>
      <a @click="goTo('tasktree')" class="hand scale1_5">任务树</a>
    </div>
    <div class="middle"></div>
    <div class="right">
      <a @click="goTo('leaveMessage')" class="hand scale1_5">留言板</a>
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
      // if (this.$router.currentRoute.fullPath.slice(1) === type) return;
      if (this.$route.name === (type instanceof Object ? type.name : type))
        return;
      this.$router.push(type);
    },
  },
  created() {},
};
</script>

<style lang="scss" src="./header.scss" scoped></style>