<template>
  <div id="tablePanel">

    <AddWordDialog :show="showAddWordDialog" :items="rows" />
    <EditWordDialog :show="showEditWordDialog" :item="rowToChange" />
    <DeleteWordDialog :show="showDeleteWordDialog" :items="rows" :item="rowToChange" />

    <button class="btn btn-dark" @click="$emit('load')">загрузить</button>

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
  import EditWordDialog from "./right/dialogs/EditWordDialog";
  import DeleteWordDialog from "./right/dialogs/DeleteWordDialog";
  import AddWordDialog from "./right/dialogs/AddWordDialog";


  export default {
    name: 'WordPanel',
    components: {AddWordDialog, DeleteWordDialog, EditWordDialog, CTable, HiddenTd, RadioComponent, axios},
    props: ['adminMode', 'rows'],

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
        this.rowToChange = row;
        this.showDeleteWordDialog.value = true;
      },
      editWord(row) {
        this.rowToChange = row;
        this.showEditWordDialog.value = true;
      },
      addWord() {
        this.showAddWordDialog.value = true;
      }
    }
  }

</script>

<style scoped>
  #tablePanel {
    background: aquamarine;
  }
</style>
