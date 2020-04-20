<template>
  <table>
    <smoothie v-for="(smoothie, index) in smoothies" :smoothie="smoothie" :key="index"></smoothie>
  </table>
</template>

<script>
import Smoothie from './Smoothie.vue'

export default {
  props: ['smoothies'],
  components: {
    Smoothie
  }
}
</script>
