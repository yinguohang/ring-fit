<template>
  <el-col :sm="24" :xl="8">
    <el-button icon="el-icon-right" size="small" style="margin-right: 5px" @click="importFromReferred"></el-button>
    <el-select v-model="selectedIngredients" multiple filterable clearable size="medium">
      <el-option v-for="ingredient in ingredients"
                 :key="ingredient[0]"
                 :label="ingredient[1]"
                 :value="ingredient[1]">
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
      return this.$store.state.ingredients
    }
  },
  methods: {
    importFromReferred () {
      this.selectedIngredients = this.$store.state.ingredientsReferred
    }
  }
}
</script>

<style scoped>

</style>
