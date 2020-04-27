<template>
  <tr>
    <td v-for='(field, index) in ingredientLocation' :key='index'
        :class="{
          'unit-selected':
            $store.state.ingredientEnToID.hasOwnProperty(field) &&
            selectedIngredients.includes($store.state.ingredientEnToID[field])
        }">
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
