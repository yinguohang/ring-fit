<template>
  <div>
    <IngredientLocationList :ingredient-locations="ingredientLocations"></IngredientLocationList>
  </div>
</template>

<script>
import parse from 'csv-parse/lib/sync'
import IngredientLocationList from '@/components/IngredientLocationList.vue'
import axios from 'axios'

export default {
  name: 'ingredient-location-page',
  components: {
    IngredientLocationList
  },
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      allIngredientLocations: []
    }
  },
  created: function () {
    axios.get(this.publicPath + 'data/ingredient_location.csv').then(
      response => { this.allIngredientLocations = parse(response.data, { from_line: 2, quote: '|' }) }
    )
  },
  computed: {
    ingredientLocations: function () {
      if (this.selectedIngredients.length === 0) {
        return this.allIngredientLocations
      }
      return this.allIngredientLocations.filter(
        ingredientLocation => ingredientLocation.filter(i => this.selectedIngredients.includes(i)).length > 0
      )
    },
    selectedIngredients: function () {
      return this.$store.state.selectedIngredients
    }
  }
}
</script>
