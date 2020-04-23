<template>
  <div class="locale-modifier">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SingleLocaleModifier',
  data () {
    return { langs: ['zh', 'en'] }
  }
}
</script>

<style scoped>

</style>
