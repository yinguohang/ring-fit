<template>
  <table style="margin: auto; width: 100%">
    <course v-for="(course, index) in courses" :course="course" :key="index"></course>
  </table>
</template>

<script>
import Course from './Course'

export default {
  name: 'CourseList',
  computed: {
    courses: function () {
      return this.$store.state.courses
    }
  },
  components: {
    Course
  }
}
</script>

<style scoped>

</style>
