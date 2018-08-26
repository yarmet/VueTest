<template>

  <div id="groupPanel">

    <Selector :text="'Выбрать группу'" :label="'name'" :items="groups" @selected="groupSelected"/>

    <div class="groupOptions">
      <a href="javascript:void(0);" @click="adminMode.value = !adminMode.value">Включить/выключить админку</a>
    </div>

  </div>

</template>


<script>
  import Selector from './Selector'


  export default {
    components: {Selector},
    name: "GroupPanel",
    props: {'adminMode': Object, 'groups': Array},

    methods: {
      groupSelected(group) {
        this.$emit('groupSelected', group)
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
