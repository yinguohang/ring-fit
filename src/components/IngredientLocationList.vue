<template>
  <table>
    <ingredient-location
      v-for="(ingredientLocation, index) in ingredientLocations"
      :ingredient-location="ingredientLocation"
      :key="index">
    </ingredient-location>
  </table>
</template>

<script>
import IngredientLocation from './IngredientLocation'

export default {
  name: 'IngredientLocationList',
  components: { IngredientLocation },
  props: ['ingredientLocations']
}
</script>
