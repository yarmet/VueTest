<template><div>
  <select class="custom-select-sm" v-model="selected">
    <option v-for="group in availableGroups" v-bind:key="group.id">{{group.name}}</option>
  </select>
  <div>{{selected}}</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GroupSelector',
  data () {
    return {
      selected: '',
      availableGroups: []
    }
  },
  created () {
    axios.get('http://localhost:8080/static/groups.json')
      .then(response => {
        this.availableGroups = response.data
      }).catch(e => {
        console.log(e)
      })
  }
}
</script>

<style scoped>
</style>
