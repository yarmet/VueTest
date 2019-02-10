<template>
  <div class="container">

    <div class="row">

      <div class="col-4">
        <Selector :text="'Выбрать группу'" :label="'name'" :items="availableGroups" @selected="groupSelected"/>
      </div>

      <div class="col-8">
        <button class="btn btn-dark" @click="loadWords">загрузить</button>
        <WordPanel :rows="rows" :selectedGroup="selectedGroup"/>
      </div>

    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  import WordPanel from './linkcomponents/WordPanel'
  import Selector from './linkcomponents/Selector'
  import {Ajax} from "../components/ajax"

  export default {
    name: 'LinkPage',
    mixins: [Ajax],
    components: {WordPanel, Selector},

    data() {
      return {
        availableGroups: [],
        selectedGroup: null,
        rows: [],
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
        this.selectedGroup = selected
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
