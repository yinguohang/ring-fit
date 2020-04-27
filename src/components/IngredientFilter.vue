<template>
  <el-col :sm="24" :xl="8">
    <el-button icon="el-icon-right" size="small" style="margin-right: 5px" @click="importFromReferred"></el-button>
    <el-select v-model="selectedIngredients" multiple filterable clearable style="width: calc(100% - 50px)">
      <el-option v-for="ingredient in ingredients"
                 :key="ingredient[0]"
                 :label="ingredient[1]"
                 :value="ingredient[0]">
        {{ingredient[1]}}
      </el-option>
    </el-select>
  </el-col>
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
      return this.$store.state.ingredients.map(
        x => ([x[0], this.$t('ingredients[' + this.$store.state.ingredientEnToID[x[1]] + ']')])
      )
    }
  },
  methods: {
    importFromReferred () {
      this.selectedIngredients = this.$store.state.ingredientsReferred
      if (this.$router.currentRoute !== '/ingredient_location') {
        this.$router.push('/ingredient_location')
      }
    }
  }
}
</script>

<style scoped>

</style>
