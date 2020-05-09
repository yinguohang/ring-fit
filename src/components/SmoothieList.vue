<template>
  <el-table
    :data="smoothieParsed"
    @row-click="flip"
    :row-class-name="getRowClass"
    style="margin: auto">
    <el-table-column
      :label="$t('message.name')"
      prop="name"
      sortable>
    </el-table-column>
    <el-table-column v-for="i in 3"
                     :key="i"
                     :label="$t('message.ingredient') + i"
                     :prop="'ingredient' + i">
    </el-table-column>
    <el-table-column :label="$t('message.recovery')" prop="recovery" sortable></el-table-column>
    <el-table-column :label="$t('message.effect')" prop="effect"></el-table-column>
    <el-table-column :label="$t('message.world')" prop="world" sortable></el-table-column>
    <el-table-column :label="$t('message.description')" prop="description"></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ['smoothies'],
  methods: {
    ingredientCountToText (ic) {
      if (ic.name.length === 0) {
        return ''
      }
      const id = this.$store.state.ingredientEnToID[ic.name]
      const name = this.$t('ingredients[' + id + ']')
      return name + ' x ' + ic.count
    },
    getRowClass: function ({ row, rowIndex }) {
      return this.$store.state.selectedSmoothies.includes(row.id) ? 'userSelected' : ''
    },
    flip (row) {
      this.$store.commit('flipSmoothie', row.id)
    }
  },
  computed: {
    smoothieParsed: function () {
      return this.smoothies.map(smoothie => {
        return {
          id: smoothie.id,
          name: this.$t('smoothies[' + this.$store.state.smoothieEnToID[smoothie.name] + ']'),
          ingredient1: this.ingredientCountToText(smoothie.ingredients[0]),
          ingredient2: this.ingredientCountToText(smoothie.ingredients[1]),
          ingredient3: this.ingredientCountToText(smoothie.ingredients[2]),
          recovery: smoothie.recovery,
          effect: smoothie.effect,
          world: smoothie.world,
          description: smoothie.description
        }
      })
    }
  }
}
</script>

<style>
.userSelected {
  background: antiquewhite !important;
}
</style>
