<template>

  <div id="groupPanel">

    <DeleteDialog :show="showDeleteGroupDialog" :items="groups" :item="selectedGroup" @deleted="$emit('deleted')" />
    <AddGroupDialog :show="showAddGroupDialog" :items="groups"/>
    <EditGroupdialog :show="showEditGroupDialog" :item="selectedGroup"/>

    <Selector :text="'Выбрать группу'" :label="'name'" :items="groups" @selected="groupSelected"/>

    <div class="groupOptions">
      <a href="javascript:void(0);" @click="adminMode.value = !adminMode.value">Включить/выключить админку</a>
    </div>

    <div class="groupOptions" v-if="adminMode.value">
      <a href="javascript:void(0);" @click="deleteGroup">Удалить группу</a> <br/>
      <a href="javascript:void(0);" @click="addGroup">Добавить группу</a> <br/>
      <a href="javascript:void(0);" @click="editGroup">Изменить группу</a>
    </div>

  </div>

</template>


<script>
  import Selector from './Selector'
  import DeleteDialog from "./right/worddialogs/DeleteDialog";
  import AddGroupDialog from "./groupdialogs/AddGroupDialog";
  import EditGroupdialog from "./groupdialogs/EditGroupdialog";


  export default {
    components: {EditGroupdialog, AddGroupDialog, DeleteDialog, Selector},
    name: "GroupPanel",
    props: {'adminMode': Object, 'groups': Array},
    data() {
      return {
        selectedGroup: '',
        showDeleteGroupDialog: {value: false},
        showAddGroupDialog: {value: false},
        showEditGroupDialog: {value: false}
      }
    },
    methods: {
      groupSelected(group) {
        this.selectedGroup = group;
        this.$emit('groupSelected', group)
      },
      deleteGroup() {
        if (this.selectedGroup === '') return
        this.showDeleteGroupDialog.value = true
      },
      addGroup() {
        this.showAddGroupDialog.value = true
      },
      editGroup() {
        if (this.selectedGroup === '') return
        this.showEditGroupDialog.value = true
      }
    }
  }
</script>

<style scoped>
  #groupPanel {
    /*background: coral;*/
  }

  .groupOptions {
    margin-top: 80px;
  }

</style>
