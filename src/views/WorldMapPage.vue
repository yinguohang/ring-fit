<template>
  <el-container>
    <el-row :span="24" :gutter="5">
      <el-col :xl="8" :lg="8" :sm="24" v-for="(image, i) in imageList" :key="i">
        <img :src="image" style="width: 100%"/>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import data from '@/assets/data.json'

const worldImageCounts = data.worldImageCounts

export default {
  name: 'WorldMapPage.vue',
  computed: {
    imageList () {
      const rtn = []
      for (let i = 0; i < worldImageCounts.length; i++) {
        for (let j = 0; j < worldImageCounts[i]; j++) {
          rtn.push(require('../assets/worlds/' + (i + 1) + '_' + j + '.png'))
        }
      }
      return rtn
    }
  }
}
</script>

<style scoped>

</style>
