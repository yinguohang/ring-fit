<template>
  <el-menu @select="selectIngredient"
           :default-active="$route.params.id">
    <el-menu-item
      :index="String(index)"
      v-for="(ingredient, index) in $store.state.ingredients"
      :key="index">{{ $t("ingredients[" + index + "]") }}</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'IngredientList',
  methods: {
    selectIngredient (index) {
      index = parseInt(index)
      this.$store.commit('updateSelectedIngredient', index)
      this.$router.push({ path: '/ingredient/' + index })
    }
  }
}
</script>

<style scoped>

</style>
