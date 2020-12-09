<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-07 16:35:04
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

<style>
</style>