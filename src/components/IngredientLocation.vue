<template>
  <tr>
    <td v-for='(field, index) in ingredientLocation' :key='index' :class="{'unit-selected': selectedIngredients.includes(field)}">
      {{ index &lt; 2 ? field : $t("ingredients[" + $store.state.ingredientEnToID[field]+ "]") }}
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
