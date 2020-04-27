<template>
  <tr>
    <td>{{course[0]}}</td>
    <td><el-tag :style="{color: '#000000', backgroundColor: '#'+course[1]}">{{course[2]}}</el-tag></td>
    <img :src="require('../assets/courses/' + course[0] + '.png')" width="50px" height="50px"/>
    <td>{{course[3]}}</td>
  </tr>
</template>

<script>
export default {
  name: 'Course',
  props: ['course']
}
</script>

<style scoped>

</style>
