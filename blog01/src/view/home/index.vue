<!--
 * @Description: 首页--所有博客
 * @Author: Do not edit
 * @Date: 2020-11-19 15:19:04
 * @LastEditTime: 2020-12-08 09:21:50
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