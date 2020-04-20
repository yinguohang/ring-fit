<template>
  <div class="home">
    <SmoothieList :smoothies="smoothies"></SmoothieList>
  </div>
</template>

<script>
import parse from 'csv-parse/lib/sync'
import SmoothieList from '@/components/SmoothieList.vue'
import axios from 'axios'

function loadCSV (fileName, callback) {
  return axios.get(fileName).then(
    response => callback(parse(response.data, { from_line: 2, quote: '|' }))
  )
}

export default {
  name: 'Home',
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
    loadCSV(this.publicPath + 'data/smoothie.csv', (data) => {
      this.smoothies = data
    })
  }
}
</script>
