<template>
  <div id="tablePanel">

    <DeleteWordDialog :show="showDeleteWordDialog" :rowToDelete="rowToChange" :rows="rows" :block="block"/>
    <EditWorldDialog :show="showEditWordDialog" :rowToEdit="rowToChange" :block="block"/>
    <AddWordDialog :show="showAddWordDialog" :block="block" :rows="rows"/>

    <button class="btn btn-dark" @click="$emit('load')" :disabled="block.value">загрузить</button>

    <radio-component :languages="availableLanguages" :block="block" />

    <CTable :rows="rows" :col1="'russian'" :col2="'english'" :adminMode="adminMode" :block="block"
            @addWord="addWord"
            @editWord="editWord"
            @removeWord="deleteWord"
            v-if="availableLanguages.selected.localeCompare('english')"/>

    <CTable :rows="rows" :col1="'english'" :col2="'russian'" :adminMode="adminMode" :block="block"
            @addWord="addWord"
            @editWord="editWord"
            @removeWord="deleteWord"
            v-else/>

  </div>
</template>

<script>
  import HiddenTd from './right/HiddenTd'
  import DeleteWordDialog from "./right/DeleteWordDialog";
  import DisengageableHref from './right/DisengageableHref';
  import EditWorldDialog from "./right/EditWordDialog";
  import AddWordDialog from "./right/AddWordDialog";
  import CTable from "./right/CTable";
  import RadioComponent from "./right/RadioComponent"
  import axios from 'axios'


  export default {
    name: 'WordPanel',
    components: {CTable, AddWordDialog, EditWorldDialog, DeleteWordDialog, HiddenTd, DisengageableHref, RadioComponent, axios},
    props: ['adminMode', 'block','rows'],

    data() {
      return {
        rowToChange: null,
        showDeleteWordDialog: {value: false},
        showEditWordDialog: {value: false},
        showAddWordDialog: {value: false},
        availableLanguages: {allLanguages: ['русский', 'english'], selected: 'english'},
      }
    },

    methods: {
      deleteWord(row) {
        this.openSomeWindow(row)
        this.showDeleteWordDialog.value = true;
      },
      editWord(row) {
        this.openSomeWindow(row)
        this.showEditWordDialog.value = true;
      },
      addWord() {
        this.openSomeWindow(null)
        this.showAddWordDialog.value = true;
      },
      openSomeWindow(row) {
        document.body.classList.add('transparent');
        this.block.value = true;
        this.rowToChange = row;
      }
    }
  }

</script>

<style scoped>
  #tablePanel {
    background: aquamarine;
  }
</style>
