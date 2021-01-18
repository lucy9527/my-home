<!--
 * @Description: 首页--所有博客
 * @Author: Do not edit
 * @Date: 2020-11-19 15:19:04
 * @LastEditTime: 2021-01-18 19:30:56
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="home">
    <header-vue type="home"></header-vue>
    <main-vue></main-vue>
  </div>
</template>

<script>
import headerVue from "@/components/common/header.vue";
import mainVue from "@/components/home/blog.vue";
export default {
  components: {
    headerVue,
    mainVue,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.home {
  position: relative;
  min-height: 100%;
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    opacity: 0.5;
    z-index: -1;
    background: url("../../assets/images/homebg.jpg");
    background-size: 100%;
  }
}
</style>