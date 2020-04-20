<template>
  <el-select v-model="selectedIngredients" multiple filterable>
    <el-option v-for="ingredient in ingredients"
               :key="ingredient[0]"
               :label="ingredient[1]"
               :value="ingredient[1]">
      {{ingredient[1]}}
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'IngredientFilter',
  computed: {
    selectedIngredients: {
      set (newVal) {
        this.$store.commit('updateSelectedIngredients', newVal)
      },
      get () {
        return this.$store.state.selectedIngredients
      }
    },
    ingredients () {
      return this.$store.state.ingredients
    }
  }
}
</script>

<style scoped>

</style>
