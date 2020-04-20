<template>
  <tr>
    <td v-for='(field, index) in ingredientLocation' :key='index' :class="{'unit-selected': selectedIngredients.includes(field)}">
      {{field}}
    </td>
  </tr>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IngredientLocation',
  props: ['ingredientLocation'],
  computed: mapState(['selectedIngredients'])
}
</script>

<style scoped>
  .unit-selected {
    background: coral;
  }
</style>
