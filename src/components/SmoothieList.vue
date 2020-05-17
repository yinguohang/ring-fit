<template>
  <el-row>
    <el-col>
      <el-select :placeholder="$t('message.effect')" v-model="effectFilter" clearable>
        <el-option v-for="(effectOption, index) in effectOptions"
                   :key="index"
                   :label="effectOption"
                   :value="effectOption">
          {{effectOption}}
        </el-option>
      </el-select>
      <el-select :placeholder="$t('message.scenario')" v-model="scenarioFilter" clearable>
        <el-option v-for="(scenarioOption, index) in scenarioOptions"
                   :key="index"
                   :label="scenarioOption"
                   :value="scenarioOption">
          {{scenarioOption}}
        </el-option>
      </el-select>
    </el-col>
    <el-table
      :data="selectedSmoothies"
      @row-click="flip"
      :row-class-name="getRowClass"
      style="margin: auto">
      <el-table-column width="50px">
        <template slot-scope="scope">
          <div>
            <el-button
              circle
              :type="starredSmoothies.includes(scope.row.id) ? 'warning' : 'default'"
              :class="starredSmoothies.includes(scope.row.id) ? 'el-icon-star-on' : 'el-icon-star-off'"
              @click.stop="flipStar(scope.row)"></el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        width="120px"
        :label="$t('message.name')"
        prop="name"
        sortable>
      </el-table-column>
      <el-table-column v-for="i in 3"
                       :key="i"
                       :label="$t('message.ingredient') + i"
                       :prop="'ingredient' + i"
                       width="120px">
      </el-table-column>
      <el-table-column width="120px"
                       :label="$t('message.recovery')"
                       prop="recovery"
                       sortable></el-table-column>
      <!--    <el-table-column :label="$t('message.effect')" prop="effect"></el-table-column>-->
      <el-table-column width="90px" :label="$t('message.world')" prop="world" sortable></el-table-column>
      <el-table-column width="80px" :label="$t('message.scenario')" prop="scenario"></el-table-column>
      <el-table-column :label="$t('message.effect') + '1'" prop="effect1"></el-table-column>
      <el-table-column :label="$t('message.effect') + '2'" prop="effect2"></el-table-column>
      <el-table-column :label="$t('message.description')" prop="description"></el-table-column>
    </el-table>
  </el-row>
</template>

<script>
export default {
  props: ['smoothies'],
  data: function () {
    return {
      effectFilter: '',
      scenarioFilter: '',
      starredSmoothies: this.$storage.get('starredSmoothies', [])
    }
  },
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
    },
    flipStar (row) {
      if (this.starredSmoothies.includes(row.id)) {
        this.starredSmoothies = this.starredSmoothies.filter(v => v !== row.id)
      } else {
        this.starredSmoothies.push(row.id)
      }
      this.$storage.set('starredSmoothies', this.starredSmoothies)
    },
    scenarioToText (scenario) {
      if (scenario === '') {
        return ''
      }
      return this.$t('scenario.' + scenario)
    },
    effectToText (effect) {
      const segs = effect.split('-')
      if (segs[0] === '') {
        return ''
      }
      if (segs[0] === 'UP') {
        return this.$t('effect.UP') + segs[1] + '⬆️'.repeat(parseInt(segs[2]))
      }
      if (segs[0] === 'SWITCH') {
        return this.$t('effect.SWITCH') + segs[1]
      }
      if (segs[0] === 'DEF_UP') {
        return this.$t('effect.DEF_UP') + '⬆️'.repeat(parseInt(segs[1]))
      }
      if (segs[0] === 'ADD') {
        return this.$t('effect.ADD')
      }
      return this.$t('effect.' + effect)
    }
  },
  computed: {
    allSmoothies: function () {
      return this.smoothies.map(smoothie => {
        return {
          id: smoothie.id,
          name: this.$t('smoothies[' + this.$store.state.smoothieEnToID[smoothie.name] + ']'),
          ingredient1: this.ingredientCountToText(smoothie.ingredients[0]),
          ingredient2: this.ingredientCountToText(smoothie.ingredients[1]),
          ingredient3: this.ingredientCountToText(smoothie.ingredients[2]),
          recovery: smoothie.recovery,
          // effect: smoothie.effect,
          world: smoothie.world,
          description: smoothie.description,
          scenario: this.scenarioToText(smoothie.scenario),
          effect1: this.effectToText(smoothie.effect1),
          effect2: this.effectToText(smoothie.effect2)
        }
      })
    },
    selectedSmoothies () {
      return this.allSmoothies.filter(smoothie => {
        if (this.effectFilter === '') {
          return true
        }
        return smoothie.effect1 === this.effectFilter || smoothie.effect2 === this.effectFilter
      }).filter(smoothie => {
        if (this.scenarioFilter === '') {
          return true
        }
        return smoothie.scenario === this.scenarioFilter
      })
    },
    effectOptions: function () {
      const effectOptions = new Set()
      for (const smoothie of this.allSmoothies) {
        effectOptions.add(smoothie.effect1)
        effectOptions.add(smoothie.effect2)
      }
      effectOptions.delete('')
      return Array.from(effectOptions).sort()
    },
    scenarioOptions: function () {
      const scenarioOptions = new Set()
      for (const smoothie of this.allSmoothies) {
        scenarioOptions.add(smoothie.scenario)
      }
      scenarioOptions.delete('')
      return Array.from(scenarioOptions).sort()
    }
  }
}
</script>

<style>
.userSelected {
  background: antiquewhite !important;
}
</style>
