<!--
 * @Description: 我的博客页面
 * @Author: Do not edit
 * @Date: 2020-11-25 18:40:09
 * @LastEditTime: 2020-11-25 20:20:01
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="myArticle-box">
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
  },
  methods: {
  },
};
</script>

<style lang= "scss">
.myArticle-box{
  width: 100%;
}
</style>