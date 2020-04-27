<template>
  <el-main>
    <el-row :gutter="24">
      <smoothie-filter></smoothie-filter>
      <ingredient-filter></ingredient-filter>
    </el-row>
  </el-main>
</template>

<script>
import IngredientFilter from './IngredientFilter'
import SmoothieFilter from './SmoothieFilter'

export default {
  name: 'FilterBar',
  components: { IngredientFilter, SmoothieFilter }
}
</script>

<style scoped>

</style>
