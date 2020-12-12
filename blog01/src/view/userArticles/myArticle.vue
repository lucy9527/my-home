<!--
 * @Description: 我的博客页面
 * @Author: Do not edit
 * @Date: 2020-11-25 18:40:09
 * @LastEditTime: 2020-12-12 19:25:18
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
}
</style>