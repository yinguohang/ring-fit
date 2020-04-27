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
            $store.state.selectedIngredients.includes($store.state.ingredientEnToID[scope.row['ingredient' + i]])
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
  props: ['ingredientLocations'],
  computed: {
    ingredientLocationsParsed: function () {
      return this.ingredientLocations.map(raw => {
        const course = this.stages[this.stageNumberToID[raw[1]]][4]
        return {
          world: parseInt(raw[0]),
          stageNumber: raw[1],
          ingredient1: raw[2],
          ingredient2: raw[3],
          ingredient3: raw[4],
          ingredient4: raw[5],
          ingredient5: raw[6],
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
