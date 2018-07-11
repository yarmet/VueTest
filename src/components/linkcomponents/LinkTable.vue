<template>
  <div class="row">
    <div class="col">

      <DeleteWordDialog :show="showDeleteWordDialog" :rowToDelete="rowToChange" :rows="rows" :block="block"/>
      <EditWorldDialog :show="showEditWordDialog" :rowToEdit="rowToChange" :block="block" />
      <AddWordDialog :show="showAddWordDialog" :block="block" :rows="rows" />

      <table class="linkTable" v-if="selectedLang.localeCompare('english')">
        <thead style="font-weight: bold">
        <td>english</td>
        <td>русский</td>

        <td v-if="adminMode" colspan="2">
          <DisengageableHref :text="'Добавить'" :block="block" @action="addWord"/>
        </td>

        </thead>
        <tr v-for="row in rows" :key="row.id">
          <td>{{row.english}}</td>
          <hidden-td :text="row.russian" :block="block"/>

          <td v-if="adminMode">
            <DisengageableHref :text="'ред.'" :block="block" @action="editWord(row)" />
          </td>

          <td v-if="adminMode">
            <DisengageableHref :text="'Уд.'" :block="block" @action="deleteWord(row)"/>
          </td>
        </tr>

      </table>

      <table class="linkTable" v-else>
        <thead style="font-weight: bold">
        <td>русский</td>
        <td>english</td>
        <td v-if="adminMode" colspan="2">
          <DisengageableHref :text="'Добавить'" :block="block" @action="addWord" />
        </td>
        </thead>
        <tr v-for="row in rows" :key="row.id">
          <td>{{row.russian}}</td>
          <hidden-td :text="row.english" :block="block"/>

          <td v-if="adminMode">
            <DisengageableHref :text="'ред.'" :block="block" @action="editWord(row)" />
          </td>

          <td v-if="adminMode">
            <DisengageableHref :text="'Уд.'" :block="block" @action="deleteWord(row)"/>
          </td>

        </tr>
      </table>

    </div>
  </div>
</template>

<script>
  import HiddenTd from './HiddenTd'
  import DeleteWordDialog from "./DeleteWordDialog";
  import DisengageableHref from './DisengageableHref';
  import EditWorldDialog from "./EditWordDialog";
  import AddWordDialog from "./AddWordDialog";

  export default {
    name: 'LinkTable',
    components: {AddWordDialog, EditWorldDialog, DeleteWordDialog, HiddenTd, DisengageableHref},
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

  .linkTable {
    margin: auto;
    border-collapse: collapse;
    background-color: mintcream;
  }

  .linkTable td {
    border: 1px solid #cbcbcb;
    height: 12px;
    width: 12px;
    padding: 6px;
  }

</style>
