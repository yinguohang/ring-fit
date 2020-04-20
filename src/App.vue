<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Smoothies</router-link> |
      <router-link to="/ingredient_location">Ingredient Locations</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <ingredient-filter></ingredient-filter>
    <router-view/>
  </div>
</template>

<script>
import IngredientFilter from './components/IngredientFilter'

export default {
  components: { IngredientFilter }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
