<template>
  <el-col :sm="24" :lg="16">
    <el-row>
      <el-col :sm="24" :lg="8">
        <el-select v-model="selectedSmoothies" multiple filterable clearable size="medium" style="width:100%">
          <el-option v-for="smoothie in smoothieTexts"
                     :key="smoothie[0]"
                     :label="smoothie[1]"
                     :value="smoothie[0]">
            {{smoothie[1]}}
          </el-option>
        </el-select>
      </el-col>
      <el-col :sm="24" :lg="16">
        <el-tag size="small" v-for="i in ingredientsReferred" :key="i" type="warning" class="tag">
          {{$t('ingredients[' + i + ']')}}
        </el-tag>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  name: 'SmoothieFilter',
  computed: {
    selectedSmoothies: {
      set (newVal) {
        this.$store.commit('updateSelectedSmoothies', newVal)
      },
      get () {
        return this.$store.state.selectedSmoothies
      }
    },
    ingredientsReferred: function () {
      const s = new Set()
      for (const i of this.selectedSmoothies) {
        const smoothie = this.smoothies[parseInt(i)]
        s.add(smoothie.ingredients[0].name)
        s.add(smoothie.ingredients[1].name)
        s.add(smoothie.ingredients[2].name)
      }
      s.delete('')
      const rtn = [...s].map(x => this.$store.state.ingredientEnToID[x])
      this.$store.commit('updateIngredientReferred', rtn)
      return rtn
    },
    smoothies () {
      return this.$store.state.smoothies
    },
    smoothieTexts () {
      return this.$store.state.smoothies.map(
        x => ([x.id, this.$t('smoothies[' + x.id + ']')])
      )
    }
  }
}
</script>

<style scoped>
.tag {
  margin: 2px;
  display: inline-block;
}
</style>
