<template>
  <div>
    <filter-bar/>
    <IngredientLocationList
      :ingredient-locations="ingredientLocations"
      :highlighted-ingredients="$store.state.selectedIngredients"></IngredientLocationList>
  </div>
</template>

<script>
import IngredientLocationList from '../components/IngredientLocationList.vue'
import FilterBar from '../components/FilterBar'

export default {
  name: 'ingredient-location-page',
  components: {
    IngredientLocationList,
    FilterBar
  },
  computed: {
    allIngredientLocations () {
      return this.$store.state.ingredientLocations
    },
    ingredientLocations: function () {
      if (this.selectedIngredients.length === 0) {
        return this.allIngredientLocations
      }
      return this.allIngredientLocations.filter(
        ingredientLocation => ingredientLocation.ingredients.filter(
          i => this.selectedIngredients.includes(this.$store.state.ingredientEnToID[i])
        ).length > 0
      )
    },
    selectedIngredients: function () {
      return this.$store.state.selectedIngredients
    }
  }
}
</script>
