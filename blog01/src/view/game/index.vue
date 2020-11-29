<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-25 20:22:59
 * @LastEditTime: 2020-11-25 20:23:13
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="game-page">
    <header-vue></header-vue>
    <main-vue></main-vue>
  </div>
</template>

<script>
import headerVue from '../../components/common/header';
import mainVue from './main'
export default {
  components:{
    headerVue,
    mainVue
  },
  data(){
    return {

    }
  }
};
</script>

<style>
.game-page{
  height: 100%;
}
</style>