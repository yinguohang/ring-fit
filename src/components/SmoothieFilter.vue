<template>
  <el-col :sm="24" :xl="16">
    <el-row>
      <el-col :sm="24" :xl="8">
        <el-select v-model="selectedSmoothies" multiple filterable clearable size="medium" style="width:100%">
          <el-option v-for="smoothie in smoothies"
                     :key="smoothie[0]"
                     :label="smoothie[1]"
                     :value="smoothie[0]">
            {{smoothie[1]}}
          </el-option>
        </el-select>
      </el-col>
      <el-col :sm="24" :xl="16">
        <el-tag size="small" v-for="i in ingredientsReferred" :key="i" type="warning" class="tag">{{i}}</el-tag>
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
        console.log(smoothie)
        s.add(smoothie[2])
        s.add(smoothie[4])
        s.add(smoothie[6])
      }
      s.delete('')
      const rtn = [...s]
      this.$store.commit('updateIngredientReferred', rtn)
      return rtn
    },
    smoothies () {
      return this.$store.state.smoothies
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
