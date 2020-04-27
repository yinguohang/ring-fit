<template>
  <div>
    <filter-bar/>
    <SmoothieList></SmoothieList>
  </div>
</template>

<script>
import SmoothieList from '../components/SmoothieList.vue'
import FilterBar from '../components/FilterBar'

export default {
  name: 'SmoothiePage',
  components: {
    SmoothieList,
    FilterBar
  }
}
</script>
