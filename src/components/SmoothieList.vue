<template>
  <table style="margin: auto">
    <smoothie v-for="(smoothie, index) in smoothies" :smoothie="smoothie" :key="index"></smoothie>
  </table>
</template>

<script>
import Smoothie from './Smoothie.vue'

export default {
  components: {
    Smoothie
  },
  props: ['smoothies']
}
</script>
