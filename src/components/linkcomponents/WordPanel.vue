<template>
  <div id="tablePanel">

    <AddWordDialog :show="showAddWordDialog" :items="rows" :group="selectedGroup"/>
    <EditWordDialog :show="showEditWordDialog" :item="rowToChange" :group="selectedGroup"/>
    <DeleteDialog :show="showDeleteWordDialog" :items="rows" :item="rowToChange" :group="selectedGroup"/>

    <radio-component :languages="availableLanguages"/>

    <CTable :rows="rows" :col1="'russian'" :col2="'english'" :adminMode="adminMode"
            @addWord="addWord"
            @editWord="editWord"
            @removeWord="deleteWord"
            v-if="availableLanguages.selected.localeCompare('english')"/>

    <CTable :rows="rows" :col1="'english'" :col2="'russian'" :adminMode="adminMode"
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
  import DeleteDialog from "./right/worddialogs/DeleteDialog";
  import AddWordDialog from "./right/worddialogs/AddWordDialog";


  export default {
    name: 'WordPanel',
    components: {AddWordDialog, DeleteDialog, EditWordDialog, CTable, HiddenTd, RadioComponent, axios},
    props: {'adminMode': Boolean, 'rows': Array, 'selectedGroup': Object},

    data() {
      return {
        rowToChange: '',
        showDeleteWordDialog: {value: false},
        showEditWordDialog: {value: false},
        showAddWordDialog: {value: false},
        availableLanguages: {allLanguages: ['русский', 'english'], selected: 'english'},
      }
    },

    methods: {
      deleteWord(row) {
        if(this.selectedGroup === null) return;
        this.rowToChange = row;
        this.showDeleteWordDialog.value = true;
      },
      editWord(row) {
        if(this.selectedGroup === null) return;
        this.rowToChange = row;
        this.showEditWordDialog.value = true;
      },
      addWord() {
        if(this.selectedGroup === null) return;
        this.showAddWordDialog.value = true;
      }
    }
  }

</script>

<style scoped>
  #tablePanel {
    /*background: aquamarine;*/
  }
</style>
