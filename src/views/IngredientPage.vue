<template>
  <el-container>
    <el-container>
      <el-aside width="150px" style="height: calc(100vh - 85px);">
        <el-scrollbar style="height: 100%; overflow-x: hidden">
          <ingredient-list></ingredient-list>
        </el-scrollbar>
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

<style>
.el-scrollbar__wrap {
  overflow-x:hidden !important;
}
</style>
