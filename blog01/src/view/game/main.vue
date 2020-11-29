<template>
  <div class="game-content">
    <div>
      <type-vue></type-vue>
    </div>
  </div>
</template>

<script>
import typeVue from '../../components/game/typing/index'
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