<template>
  <table>
    <smoothie v-for="(smoothie, index) in smoothies" :smoothie="smoothie" :key="index"></smoothie>
  </table>
</template>

<script>
import Smoothie from './Smoothie.vue'

export default {
  components: {
    Smoothie
  },
  computed: {
    smoothies: function () {
      return this.$store.state.smoothies
    }
  }
}
</script>
