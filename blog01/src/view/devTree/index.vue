<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-09 13:40:36
 * @LastEditTime: 2020-12-09 14:52:00
 * @LastEditors: HongXuan.Lu
-->
<template>
<div class="devtree-box">
  <header-vue type="devtree"></header-vue>
  <div class="devTree">
    <div class="lifenode">
      <!-- 随机宽度、随机颜色 -->
      <div class="node__text">第一次记录</div>
    </div>
  </div>
</div>
</template>

<script>
import headerVue from "@/components/common/header.vue";
export default {
  components:{
    headerVue
  },
  data() {
    return {
      treeData:[]
    }
  },
}
</script>

<style lang="scss" src='./index.scss'></style>