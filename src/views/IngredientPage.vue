<template>
  <el-container>
    <el-container>
      <el-aside width="150px">
        <ingredient-list></ingredient-list>
      </el-aside>
      <el-main>
        <ingredient-detail></ingredient-detail>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import IngredientList from '../components/IngredientList'
import IngredientDetail from '../components/IngredientDetail'
export default {
  name: 'IngredientPage.vue',
  components: { IngredientDetail, IngredientList },
  watch: {
    '$route' () {
      this.$store.commit('updateSelectedIngredient', this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
