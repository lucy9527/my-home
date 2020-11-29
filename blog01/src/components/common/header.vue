<template>
    <div class="header">
      <div class="left">
        <a @click="goTo('home')" class="hand">首页</a>
        <a @click="goTo('myArticle')" class="hand">我的博客</a>
        <a @click="goTo('game')" class="hand">游戏页面</a>
        <a @click="goTo('edit')" class="hand">博客编辑</a>
      </div>
      <div class="middle"></div>
      <div class="right"></div>
    </div>
</template>

<script>
export default {
  name:'Header',
  methods:{
    goTo(type) {
      console.log("跳转");
      this.$router.push(type);
    },
  }
}
</script>

<style lang="scss">

</style>