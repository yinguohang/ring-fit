<template>
  <div>
    <p class="segment-header">{{ $t('message.smoothiePageHeader') }}</p>
    <smoothie-list :smoothies="starredSmoothies"></smoothie-list>
    <p class="segment-header">{{ $t('message.ingredientLocationPageHeader') }}</p>
    <ingredient-location-list
      :ingredient-locations="starredStages"
      :highlighted-ingredients="[]"></ingredient-location-list>
  </div>
</template>

<script>
import SmoothieList from '../components/SmoothieList'
import IngredientLocationList from '../components/IngredientLocationList'
export default {
  name: 'StarredPage',
  components: { IngredientLocationList, SmoothieList },
  computed: {
    starredSmoothies () {
      if (this.$store.state.smoothies.length === 0) {
        // Still loading
        return []
      }
      return this.$storage.get('starredSmoothies', []).map(
        x => this.$store.state.smoothies[x]
      )
    },
    starredStages () {
      if (this.$store.state.ingredientLocations.length === 0) {
        // Still loading
        return []
      }
      console.log(this.$storage.get('starredStages', []).map(
        x => this.$store.state.ingredientLocations[x]
      ))
      return this.$storage.get('starredStages', []).map(
        x => this.$store.state.ingredientLocations[x]
      )
    }
  }
}
</script>

<style scoped>

</style>
