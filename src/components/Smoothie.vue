<template>
  <tr @click="flip" style="cursor: pointer" :class="{userSelected:selected}">
    <td>{{ $t("smoothies[" + $store.state.smoothieEnToID[smoothie[1]] + "]") }}</td>
    <td>{{ $t("ingredients[" + $store.state.ingredientEnToID[smoothie[2]] + "]") + (smoothie[3] == 0 ? "" : " x " + smoothie[3]) }}</td>
    <td>{{ $t("ingredients[" + $store.state.ingredientEnToID[smoothie[4]] + "]") + (smoothie[5] == 0 ? "" : " x " + smoothie[5]) }}</td>
    <td>{{ $t("ingredients[" + $store.state.ingredientEnToID[smoothie[6]] + "]") + (smoothie[7] == 0 ? "" : " x " + smoothie[7]) }}</td>
    <td v-for='(field, index) in smoothie.slice(8)' :key='index'>
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
