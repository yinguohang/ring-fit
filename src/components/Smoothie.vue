<template>
  <tr>
    <td v-for='(field, index) in smoothie' :key='index'>
      {{field}}
    </td>
  </tr>
</template>

<script>
export default {
  props: ['smoothie']
}
</script>
