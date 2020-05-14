<template>
  <div style="text-align: left">
    <p>ID: {{ ingredient.id }}</p>
    <p>English Name: {{ ingredient.nameEn }}</p>
    <p>中文名称: {{ ingredient.nameZh }}</p>
    <p class="segment-header">{{ $t('message.smoothiePageHeader') }}</p>
    <smoothie-list :smoothies="ingredient.smoothies"></smoothie-list>
    <p class="segment-header">{{ $t('message.ingredientLocationPageHeader') }}</p>
    <ingredient-location-list
      :ingredient-locations="ingredient.locations"
      :highlighted-ingredients="[ingredient.id]"></ingredient-location-list>
  </div>
</template>

<script>
import SmoothieList from './SmoothieList'
import IngredientLocationList from './IngredientLocationList'
export default {
  name: 'IngredientDetail',
  components: { IngredientLocationList, SmoothieList },
  computed: {
    ingredient () {
      const selectedIngredient = this.$store.state.selectedIngredient
      const ingredients = this.$store.state.ingredients
      if (selectedIngredient >= ingredients.length) {
        return {
          id: '',
          nameEn: '',
          nameZh: '',
          smoothies: [],
          locations: []
        }
      }
      const basicInfo = ingredients[selectedIngredient]
      const ingredient = {}
      ingredient.id = basicInfo[0]
      ingredient.nameEn = this.$t('ingredients[' + basicInfo[0] + ']', 'en')
      ingredient.nameZh = this.$t('ingredients[' + basicInfo[0] + ']', 'zh')
      const smoothies = this.$store.state.smoothies
      const locations = this.$store.state.ingredientLocations
      ingredient.smoothies = smoothies.filter(
        smoothie => smoothie.ingredients.some(
          ingredientCount => ingredientCount.name === ingredient.nameEn
        )
      )
      ingredient.locations = locations.filter(
        location => location.ingredients.includes(ingredient.nameEn)
      )
      return ingredient
    }
  }
}
</script>

<style scoped>
.segment-header {
  text-align: center;
  font-weight: bold;
  background: #DDDDDD;
}
</style>
