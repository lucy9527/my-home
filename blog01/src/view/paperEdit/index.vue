<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-13 23:37:44
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="edit-page">
    <head-vue type="edit"></head-vue>
    <main-vue></main-vue>
  </div>
</template>

<script>
import headVue from "@/components/common/header.vue";
import mainVue from "./main.vue";

export default {
  components: {
    headVue,
    mainVue,
  },
};
</script>

<style lang="scss">
.edit-page {
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("../../assets/images/editbg.jpg");
    background-size: 100%;
    opacity: 0.5;
    z-index: -1;
  }
}
</style>