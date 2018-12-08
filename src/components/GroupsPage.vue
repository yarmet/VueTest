<template>

  <div class="container">

    <DeleteGroupDialog v-model="showDeleteWordDialog" :items="availableGroups" :item="selectedGroup"/>
    <EditGroupDialog v-model="showEditWordDialog" :item="selectedGroup"/>
    <AddGroupDialog v-model="showAddWordDialog" :items="availableGroups"/>

    <div class="row">

      <table class="linkTable">
        <thead>
        <tr>
          <td>Название</td>

          <td colspan="2">
            <a href="#" @click="addGroup">Добавить</a>
          </td>

        </tr>
        </thead>

        <tbody>
        <tr v-for="group in availableGroups" :key="group.id">
          <td>{{group.name}}</td>

          <td>
            <a href="#" @click="editGroup(group)">ред.</a>
          </td>

          <td>
            <a href="#" @click="deleteGroup(group)">уд.</a>
          </td>

        </tr>
        </tbody>

      </table>

    </div>
  </div>

</template>

<script>

  import {Ajax} from "./Ajax"
  import axios from 'axios'
  import AddGroupDialog from "./linkcomponents/groupdialogs/AddGroupDialog"
  import EditGroupDialog from "./linkcomponents/groupdialogs/EditGroupdialog"
  import DeleteGroupDialog from "./linkcomponents/groupdialogs/DeleteGroupDialog"

  export default {
    name: "Groups",
    mixins: [Ajax],
    components: {AddGroupDialog, EditGroupDialog, DeleteGroupDialog},

    created() {
      this.loadGroups();
    },

    data() {
      return {
        availableGroups: [],
        selectedGroup: '',
        showDeleteWordDialog: false,
        showEditWordDialog: false,
        showAddWordDialog: false
      }
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
      deleteGroup(row) {
        this.selectedGroup = row;
        this.showDeleteWordDialog = true;
      },
      editGroup(row) {
        this.selectedGroup = row;
        this.showEditWordDialog = true;
      },
      addGroup() {
        this.showAddWordDialog = true;
      }

    }
  }
</script>

<style scoped>

  .container {
    margin-top: 10px;
  }

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
