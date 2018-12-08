<template>

  <div>
    <AddWordDialog v-model="showAddWordDialog" :items="rows" :group="selectedGroup"/>
    <EditWordDialog v-model="showEditWordDialog" :item="rowToChange"/>
    <DeleteWordDialog v-model="showDeleteWordDialog" :items="rows" :item="rowToChange"/>

    <table class="linkTable" v-if="selectedGroup !== null" >
      <thead>
      <td>Русский</td>
      <td>Английский</td>
      <td colspan="2">
        <a href="#" @click="addWord()">Добавить</a>
      </td>
      </thead>

      <tbody>
      <tr v-for="row in rows" :key="row.id" >

        <td>{{row.russian}}</td>
        <td>{{row.english}}</td>

        <td>
          <a href="#" @click="editWord(row)">ред.</a>
        </td>

        <td>
          <a href="#" @click="deleteWord(row)">Уд.</a>
        </td>

      </tr>
      </tbody>
    </table>
  </div>


</template>

<script>

  import AddWordDialog from './right/worddialogs/AddWordDialog'
  import EditWordDialog from './right/worddialogs/EditWordDialog'
  import DeleteWordDialog from './right/worddialogs/DeleteWordDialog'


  export default {
    name: "GroupWords",
    props: {'selectedGroup': Object, rows: Array},
    components: {AddWordDialog, EditWordDialog,DeleteWordDialog},

    data() {
      return {
        rowToChange: '',
        showDeleteWordDialog: false,
        showEditWordDialog: false,
        showAddWordDialog: false,
      }
    },

    created() {
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
  .linkTable {
    margin: auto;
    border-collapse: collapse;
    background-color: white;
  }

  .linkTable td {
    border: 1px solid #cbcbcb;
    height: 12px;
    padding: 6px;
  }
</style>
