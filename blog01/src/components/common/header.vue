<template>
    <div class="header">
      <div class="left">
        <a @click="goTo('myArticle')">我的博客</a>
        <div @click="goTo('game')">游戏页面</div>
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
@import './header.scss';
  .header{
    height: 50px;
    @include flexRow;
    .left , .mid , .right{
      @include flexRow;
    }
    .left{
      a{
        padding-right: 10px;
      }
    }
  }
</style>