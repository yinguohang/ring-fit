<template>
  <div>
    <SmoothieList :smoothies="smoothies"></SmoothieList>
  </div>
</template>

<script>
import parse from 'csv-parse/lib/sync'
import SmoothieList from '@/components/SmoothieList.vue'
import axios from 'axios'

export default {
  name: 'SmoothiePage',
  components: {
    SmoothieList
  },
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      smoothies: []
    }
  },
  created: function () {
    axios.get(this.publicPath + 'data/smoothie.csv').then(
      response => { this.smoothies = parse(response.data, { from_line: 2, quote: '|' }) }
    )
  }
}
</script>
