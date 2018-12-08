<template>
  <div id="tablePanel">

    <radio-component :languages="availableLanguages"/>

    <CTable :rows="rows" :col1="'russian'" :col2="'english'"
            @addWord="addWord"
            @editWord="editWord"
            @removeWord="deleteWord"
            v-if="availableLanguages.selected.localeCompare('english')"/>

    <CTable :rows="rows" :col1="'english'" :col2="'russian'"
            @addWord="addWord"
            @editWord="editWord"
            @removeWord="deleteWord"
            v-else/>
  </div>

</template>

<script>
  import HiddenTd from './right/HiddenTd'
  import CTable from "./right/CTable";
  import RadioComponent from "./right/RadioComponent"
  import axios from 'axios'
  import EditWordDialog from "./right/worddialogs/EditWordDialog";
  import DeleteWordDialog from "./right/worddialogs/DeleteWordDialog";
  import AddWordDialog from "./right/worddialogs/AddWordDialog";

  export default {
    name: 'WordPanel',
    components: {AddWordDialog, DeleteWordDialog, EditWordDialog, CTable, HiddenTd, RadioComponent, axios},
    props: {'rows': Array, 'selectedGroup': Object},

    data() {
      return {
        rowToChange: '',
        showDeleteWordDialog: false,
        showEditWordDialog: false,
        showAddWordDialog: false,
        availableLanguages: {allLanguages: ['русский', 'english'], selected: 'english'},
      }
    },

    methods: {
      deleteWord(row) {
        if (this.selectedGroup === null) return;
        this.rowToChange = row;
        this.showDeleteWordDialog = true;
      },
      editWord(row) {
        if (this.selectedGroup === null) return;
        this.rowToChange = row;
        this.showEditWordDialog = true;
      },
      addWord() {
        if (this.selectedGroup === null) return;
        this.showAddWordDialog = true;
      }
    }
  }

</script>

<style scoped>
  #tablePanel {
    /*background: aquamarine;*/
  }
</style>
