<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-19 10:17:21
 * @LastEditTime: 2020-12-13 23:09:23
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
  mounted() {},
  watch: {
    //---------------监听路由---------------
    $route() {
      if (!sessionStorage.getItem("username")) {
        this.$router.push("/login");
      }
    },
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
</style>
