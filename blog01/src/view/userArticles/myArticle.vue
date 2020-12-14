<!--
 * @Description: 我的博客页面
 * @Author: Do not edit
 * @Date: 2020-11-25 18:40:09
 * @LastEditTime: 2020-12-13 23:37:14
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

<style lang= "scss">
.myArticle-box {
  width: 100%;
  height: 100%;
  &::after {
    content: "";
    display: block;
    position: absolute;
    min-height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.6;
    z-index: -1;
    background: url("../../assets/images/myPaperbg.jpg");
    background-size: 100%;
  }
}
</style>