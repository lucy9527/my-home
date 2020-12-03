<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-03 17:59:26
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="edit-page">
    <head-vue></head-vue>
    <main-vue></main-vue>
  </div>
</template>

<script>
import headVue from "@/components/common/header";
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