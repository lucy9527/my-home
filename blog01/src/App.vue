<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-19 10:17:21
 * @LastEditTime: 2020-12-01 16:40:46
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div id="app">
    <router-view ref="routerView" />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // console.log(this.$route);
  },
  watch: {
    // $route(to) {
    //   // 对路由变化作出响应...
    //   // console.log(to);
    // },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/common.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  opacity: 0.3;
  z-index: -1;
  background: url("./assets/warhaven.jpg") no-repeat;
  background-size: 100%;
}
</style>
