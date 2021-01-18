<!--
 * @Description: 我的博客页面
 * @Author: Do not edit
 * @Date: 2020-11-25 18:40:09
 * @LastEditTime: 2021-01-18 19:31:08
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="myArticle-box">
    <header-vue type="myArticle"></header-vue>
    <main-vue></main-vue>
  </div>
</template>

<script>
import headerVue from "@/components/common/header.vue";
import mainVue from "./main.vue";
export default {
  components: {
    headerVue,
    mainVue,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.myArticle-box {
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
    background: url("../../assets/images/myPaperbg.jpg");
    background-size: 100%;
  }
}
</style>