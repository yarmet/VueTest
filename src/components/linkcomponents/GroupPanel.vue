<template>

  <div id="groupPanel">

    <Selector :text="'Выбрать группу'" :label="'name'" :items="groups" :block="block" @selected="(v) => $emit('groupSelected', v)" />

    <div class="groupOptions">
      <DisengageableHref @action="adminMode.value = !adminMode.value" :block="block"
                         :text="'Включить/выключить админку'"/>
    </div>

    <div class="groupOptions" v-if="adminMode.value">
      <DisengageableHref @action="adminMode.value = !adminMode.value" :block="block"
                         :text="'Удалить группу'"/>

      <DisengageableHref @action="adminMode.value = !adminMode.value" :block="block"
                         :text="'Добавить группу'"/>

      <DisengageableHref @action="adminMode.value = !adminMode.value" :block="block"
                         :text="'Редактировать группу'"/>
    </div>

  </div>

</template>


<script>
  import Selector from './right/Selector'
  import DisengageableHref from "./right/DisengageableHref";

  export default {
    components: {Selector, DisengageableHref},
    name: "GroupPanel",
    props: ['block', 'adminMode', 'groups']
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
