<template>
  <el-container>
    <el-container>
      <el-aside class='sidebar' width="100px" style="height: calc(100vh - 85px);">
        <el-scrollbar style="height: 100%; overflow-x: hidden">
          <ingredient-list></ingredient-list>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <el-select v-model="selectedIngredient" filterable>
          <el-option v-for="ingredient in ingredients"
                     :key="ingredient[0]"
                     :label="ingredient[1]"
                     :value="ingredient[0]">
            {{ingredient[1]}}
          </el-option>
        </el-select>
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
  },
  computed: {
    ingredients () {
      return this.$store.state.ingredients.map(
        x => ([x[0], this.$t('ingredients[' + this.$store.state.ingredientEnToID[x[1]] + ']')])
      )
    },
    selectedIngredient: {
      get () {
        return this.$route.params.id
      },
      set (newVal) {
        this.$store.commit('updateSelectedIngredient', newVal)
      }
    }
  }
}
</script>

<style>
.sidebar .el-scrollbar__wrap {
  overflow-x:hidden !important;
}
</style>
