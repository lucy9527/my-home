<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-11-30 18:15:36
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="edit-page">
    <head-vue></head-vue>
    <edit-box></edit-box>
  </div>
</template>

<script>
import headVue from "../../components/common/header";
import editBox from "./main";

export default {
  components: {
    headVue,
    editBox,
  },
};
</script>

<style>
</style>