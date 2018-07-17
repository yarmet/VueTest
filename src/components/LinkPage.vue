<template>
  <div class="container">

    <div class="row">
      <div class="col-4">
        <GroupPanel :adminMode="admin_mode" :groups="availableGroups" @groupSelected="groupSelected" @deleted="groupDeleted"/>
      </div>

      <div class="col-8">
        <WordPanel :adminMode="admin_mode.value" :rows="rows" @load="loadWords"/>
      </div>
    </div>

  </div>
</template>


<script>
  import axios from 'axios'
  import WordPanel from './linkcomponents/WordPanel'
  import GroupPanel from "./linkcomponents/GroupPanel";
  import EditWordDialog from "./linkcomponents/right/dialogs/EditWordDialog";

  export default {
    name: 'LinkPage',
    components: {EditWordDialog, GroupPanel, WordPanel},

    data() {
      return {
        availableGroups: [],
        selectedGroup: null,
        rows: [],
        admin_mode: {value: false},
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
          })
          .catch(e => {
            console.log(e)
          })
      },

      groupSelected(selected) {
        this.selectedGroup = selected
        this.loadWords()
      },
      groupDeleted() {
        this.selectedGroup = null;
      },

      loadWords() {
        if (this.selectedGroup == null) return

        axios.get('http://localhost:8080/static/words.json')
          .then(response => {
            this.rows = response.data
          })
          .catch(e => {
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
