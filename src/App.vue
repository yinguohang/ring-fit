<template>
  <div id="app">
    <el-header>
      <div id="nav">
        <router-link to="/">{{ $t('message.smoothiePageHeader') }}</router-link> |
        <router-link to="/ingredient_location">{{ $t('message.ingredientLocationPageHeader') }}</router-link> |
        <router-link to="/course">{{ $t('message.coursePageHeader') }}</router-link> |
        <router-link to="/ingredient/0">{{ $t('message.ingredientPageHeader') }}</router-link> |
        <router-link to="/world_map">{{ $t('message.worldMapPageHeader') }}</router-link> |
        <router-link to="/starred">{{ $t('message.starredPageHeader') }}</router-link> |
        <router-link to="/about">{{ $t('message.aboutPageHeader') }}</router-link>
        <single-locale-modifier style="padding-top: 5px; float: right"></single-locale-modifier>
      </div>
    </el-header>
    <router-view/>
  </div>
</template>

<script>
import SingleLocaleModifier from './components/SingleLocaleModifier'

export default {
  components: { SingleLocaleModifier }
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
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
