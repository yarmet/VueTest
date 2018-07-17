<template>

  <div id="groupPanel">

    <Selector :text="'Выбрать группу'" :label="'name'" :items="groups" @selected="groupSelected"/>

    <div class="groupOptions">
      <a href="#" @click="adminMode.value = !adminMode.value">Включить/выключить админку</a>
    </div>

    <div class="groupOptions" v-if="adminMode.value">
      <a @click="deleteGroup">Удалить группу</a>

    </div>

  </div>

</template>


<script>
  import Selector from './right/Selector'


  export default {
    components: {Selector},
    name: "GroupPanel",
    props: ['adminMode', 'groups'],
    data() {
      return {
        selectedGroup: null,
        showDeleteGroupDialog: {value: false},
      }
    },
    methods: {
      groupSelected(group) {
        this.selectedGroup = group;
        this.$emit('groupSelected', group)
      },
      deleteGroup() {
        this.showDeleteGroupDialog.value = true;
      }
    }
  }
</script>

<style scoped>
  #groupPanel {
    background: coral;
  }

  .groupOptions {
    margin-top: 80px;
  }

</style>
