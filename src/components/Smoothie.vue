<template>
  <tr @click="flip" style="cursor: pointer">
    <td v-for='(field, index) in smoothie' :key='index' :class="{userSelected:selected}">
      {{field}}
    </td>
  </tr>
</template>

<script>
export default {
  props: ['smoothie'],
  methods: {
    flip () {
      this.$store.commit('flipSmoothie', this.smoothie[0])
    }
  },
  computed: {
    selected () {
      return this.$store.state.selectedSmoothies.includes(this.smoothie[0])
    }
  }
}
</script>

<style scoped>
.userSelected {
  background: antiquewhite;
}
</style>
