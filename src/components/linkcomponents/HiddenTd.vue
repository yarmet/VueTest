<template>
    <td v-if="hidden === true" @click="hidden = false"><a href="#">показать</a></td>
    <td v-else>{{text}}</td>
</template>

<script>
export default {
  name: 'HiddenTd',

  data: function () {
    return {
      hidden: true
    }
  },
  props: ['text']
}
</script>

<style scoped>

</style>
