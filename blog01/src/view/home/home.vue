<!--
 * @Description: 首页--所有博客
 * @Author: Do not edit
 * @Date: 2020-11-19 15:19:04
 * @LastEditTime: 2020-11-30 13:20:28
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="home">
    <header-vue></header-vue>
    <main-vue></main-vue>
  </div>
</template>

<script>
import headerVue from "../../components/common/header";
import mainVue from "../../components/home/blog";
export default {
  components: {
    headerVue,
    mainVue,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
.home {
  .main {
    .blog-box {
    }
  }
}
</style>