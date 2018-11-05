<template>
  <div class="container">
    <div class="row">

      <div class="col-4">
        <Selector :text="'Выбрать группу'" :label="'name'" :items="availableGroups" @selected="groupSelected"/>
      </div>

      <div class="col-8">
        <button class="btn btn-dark" @click="loadWords">загрузить</button>

        <enter-table :words="rows" />

      </div>

    </div>
  </div>
</template>


<script>
  import Selector from './linkcomponents/Selector'
  import axios from 'axios'
  import EnterTable from "./writecomponents/EnterTable";

  export default {
    name: "WritePage",
    components: {EnterTable, Selector},

    data() {
      return {
        availableGroups: [],
        selectedGroup: null,
        rows: []
      }
    },

    created() {
      this.loadGroups()
    },

    methods: {
      loadGroups() {
        axios.get('http://localhost:8080/static/groups.json')
          .then(response => {
            this.availableGroups = response.data
          }).catch(e => {
          console.log(e)
        })
      },
      groupSelected(selected) {
        this.selectedGroup = selected;
        this.loadWords()
      },

      loadWords() {
        if (this.selectedGroup == null) return
        axios.get('http://localhost:8080/static/words.json')
          .then(response => {
            this.rows = response.data
          }).catch(e => {
          console.log(e)
        })
      }
    }

  }
</script>



<style scoped>
  .container {
    margin-top: 10px;
  }
</style>
