<template>
  <div id="app">
    <el-header>
      <div id="nav">
        <router-link to="/">{{ $t('message.smoothiePageHeader') }}</router-link> |
        <router-link to="/ingredient_location">{{ $t('message.ingredientLocationPageHeader') }}</router-link> |
        <router-link to="/about">About</router-link>
        <single-locale-modifier style="float: right"></single-locale-modifier>
      </div>
    </el-header>
    <el-main>
      <el-row :gutter="24">
        <smoothie-filter></smoothie-filter>
        <ingredient-filter></ingredient-filter>
      </el-row>
    </el-main>
    <router-view/>
  </div>
</template>

<script>
import IngredientFilter from './components/IngredientFilter'
import SmoothieFilter from './components/SmoothieFilter'
import SingleLocaleModifier from './components/SingleLocaleModifier'

export default {
  components: { SingleLocaleModifier, IngredientFilter, SmoothieFilter }
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
