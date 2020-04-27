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
    <td>
      {{ course }}
    </td>
    <td>
      <el-tag :style="{color: '#000000',backgroundColor: '#' + difficultyColor}">{{ difficulty }}</el-tag>
    </td>
  </tr>

</template>

<script>
export default {
  name: 'IngredientLocation',
  props: ['ingredientLocation'],
  computed: {
    selectedIngredients () {
      return this.$store.state.selectedIngredients
    },
    course () {
      return this.$store.state.stages[this.$store.state.stageNumberToID[this.ingredientLocation[1]]][4]
    },
    difficulty () {
      return this.$store.state.courses[this.course][2]
    },
    difficultyColor () {
      return this.$store.state.courses[this.course][1]
    }
  }
}
</script>

<style scoped>
  .unit-selected {
    background: coral;
  }
</style>
