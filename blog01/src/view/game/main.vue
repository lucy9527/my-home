<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-07 16:28:49
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="game-content">
    <div>
      <type-vue></type-vue>
    </div>
  </div>
</template>

<script>
import typeVue from '@/components/game/typing/index'
export default {
  components:{
    typeVue
  }
}
</script>

<style lang="scss">
.game-content{
  height: 100%;
}
</style>