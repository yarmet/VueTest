<template>
  <select class="custom-select-sm">
    <option v-for="group in groups" v-bind:key="group">{{group.name}}</option>
  </select>
</template>

<script>
export default {
  name: 'GroupSelector',
  props: ['groups'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
