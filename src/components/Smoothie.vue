<template>
  <tr @click="flip" style="cursor: pointer" :class="{userSelected:selected}">
    <td>{{ $t("smoothies[" + smoothie.id + "]") }}</td>
    <td>
      {{
        $t("ingredients[" + $store.state.ingredientEnToID[smoothie.ingredients[0].name] + "]") +
        (smoothie.ingredients[0].count == 0 ? "" : " x " + smoothie.ingredients[0].count)
      }}
    </td>
    <td>
      {{
      $t("ingredients[" + $store.state.ingredientEnToID[smoothie.ingredients[1].name] + "]") +
      (smoothie.ingredients[1].count == 0 ? "" : " x " + smoothie.ingredients[1].count)
      }}
    </td>
    <td>
      {{
      $t("ingredients[" + $store.state.ingredientEnToID[smoothie.ingredients[2].name] + "]") +
      (smoothie.ingredients[2].count == 0 ? "" : " x " + smoothie.ingredients[2].count)
      }}
    </td>
    <td>{{ smoothie.recovery }}</td>
    <td>{{ smoothie.effect }}</td>
    <td>{{ smoothie.world }}</td>
    <td>{{ smoothie.description }}</td>
  </tr>
</template>

<script>
export default {
  props: ['smoothie'],
  methods: {
    flip () {
      this.$store.commit('flipSmoothie', this.smoothie.id)
    }
  },
  computed: {
    selected () {
      return this.$store.state.selectedSmoothies.includes(this.smoothie.id)
    }
  }
}
</script>

<style scoped>
.userSelected {
  background: antiquewhite;
}
</style>
