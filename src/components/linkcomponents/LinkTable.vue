<template>
  <div>

      <DeleteWordDialog :show="showDeleteWordDialog" :rowToDelete="rowToChange" :rows="rows" :block="block"/>
      <EditWorldDialog :show="showEditWordDialog" :rowToEdit="rowToChange" :block="block"/>
      <AddWordDialog :show="showAddWordDialog" :block="block" :rows="rows"/>

      <CTable :rows="rows" :col1="'russian'" :col2="'english'" :adminMode="adminMode" :block="block"
              @addWord="addWord"
              @editWord="editWord"
              @removeWord="deleteWord"
              v-if="selectedLang.localeCompare('english')"/>

      <CTable :rows="rows" :col1="'english'" :col2="'russian'" :adminMode="adminMode" :block="block"
              @addWord="addWord"
              @editWord="editWord"
              @removeWord="deleteWord"
              v-else />

  </div>
</template>

<script>
  import HiddenTd from './HiddenTd'
  import DeleteWordDialog from "./DeleteWordDialog";
  import DisengageableHref from './DisengageableHref';
  import EditWorldDialog from "./EditWordDialog";
  import AddWordDialog from "./AddWordDialog";
  import CTable from "./CTable";

  export default {
    name: 'LinkTable',
    components: {CTable, AddWordDialog, EditWorldDialog, DeleteWordDialog, HiddenTd, DisengageableHref},
    props: ['rows', 'selectedLang', 'adminMode', 'block'],

    data() {
      return {
        rowToChange: null,
        showDeleteWordDialog: {value: false},
        showEditWordDialog: {value: false},
        showAddWordDialog: {value: false}
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

</style>
