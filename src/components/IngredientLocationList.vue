<template>
  <el-table :data="ingredientLocationsParsed" style="margin: auto">
    <el-table-column
      :label="$t('message.world')"
      prop="world"
      sortable>
    </el-table-column>
    <el-table-column
      :label="$t('message.stageNumber')"
      prop="stageNumber">
    </el-table-column>
    <el-table-column v-for="i in 5"
      :label="$t('message.ingredient') + i"
      :key="i"
      :prop="'ingredient' + i"
      >
      <template slot-scope="scope">
        <div
          :class="{
          'unit-selected':
            $store.state.ingredientEnToID.hasOwnProperty(scope.row['ingredient' + i]) &&
            highlightedIngredients.includes($store.state.ingredientEnToID[scope.row['ingredient' + i]])
          }"
        >
          {{ $t("ingredients[" + $store.state.ingredientEnToID[scope.row["ingredient" + i]]+ "]") }}
        </div>
      </template>
    </el-table-column>
    <el-table-column
      :label="$t('message.course')"
      prop="course">
    </el-table-column>
    <el-table-column
      :label="$t('message.difficulty')"
      prop="difficulty"
      sortable>
      <template slot-scope="scope">
        <el-tag
          :style="{color: '#000000',backgroundColor: '#' + scope.row.difficultyColor}">
          {{ scope.row.difficulty }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IngredientLocationList',
  props: ['ingredientLocations', 'highlightedIngredients'],
  computed: {
    ingredientLocationsParsed: function () {
      return this.ingredientLocations.map(ingredientLocation => {
        const stageID = this.stageNumberToID[ingredientLocation.stageNumber]
        const course = this.stages[stageID][4]
        return {
          world: ingredientLocation.world,
          stageNumber: ingredientLocation.stageNumber,
          ingredient1: ingredientLocation.ingredients[0],
          ingredient2: ingredientLocation.ingredients[1],
          ingredient3: ingredientLocation.ingredients[2],
          ingredient4: ingredientLocation.ingredients[3],
          ingredient5: ingredientLocation.ingredients[4],
          course: course,
          difficulty: this.courses[course][2],
          difficultyColor: this.courses[course][1]
        }
      })
    },
    ...mapState(['stageNumberToID', 'stages', 'courses'])
  }
}
</script>

<style scoped>
  .unit-selected {
    background: coral;
  }
</style>
