<template>
  <div style="text-align: left">
    <p>ID: {{ ingredient.id }}</p>
    <p>English Name: {{ ingredient.nameEn }}</p>
    <p>中文名称: {{ ingredient.nameZh }}</p>
    <smoothie-list :smoothies="ingredient.smoothies"></smoothie-list>
  </div>
</template>

<script>
import SmoothieList from './SmoothieList'
export default {
  name: 'IngredientDetail',
  components: { SmoothieList },
  computed: {
    ingredient () {
      const selectedIngredient = this.$store.state.selectedIngredient
      const ingredients = this.$store.state.ingredients
      if (selectedIngredient >= ingredients.length) {
        return {
          id: '',
          nameEn: '',
          nameZh: '',
          smoothies: []
        }
      }
      const basicInfo = ingredients[selectedIngredient]
      const ingredient = {}
      ingredient.id = basicInfo[0]
      ingredient.nameEn = this.$t('ingredients[' + basicInfo[0] + ']', 'en')
      ingredient.nameZh = this.$t('ingredients[' + basicInfo[0] + ']', 'zh')
      const smoothies = this.$store.state.smoothies
      ingredient.smoothies = smoothies.filter(
        smoothie => smoothie.ingredients.some(
          ingredientCount => ingredientCount.name === ingredient.nameEn
        )
      )
      return ingredient
    }
  }
}
</script>

<style scoped>

</style>
