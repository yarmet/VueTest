<template>
  <div class="container">

    <div class="row">

      <div class="col-4">
        <Selector :text="'Выбрать группу'" :label="'name'" :items="groups" :block="pageBlocked"/>

        <div class="groupOptions">

        <DisengageableHref @action="admin_mode = !admin_mode" :block="pageBlocked"
                           :text="'Включить/выключить админку'"/>
        </div>


        <div class="groupOptions" v-if="admin_mode">
          <DisengageableHref @action="admin_mode = !admin_mode" :block="pageBlocked"
                             :text="'Удалить группу'"/>

          <DisengageableHref @action="admin_mode = !admin_mode" :block="pageBlocked"
                             :text="'Добавить группу'"/>

          <DisengageableHref @action="admin_mode = !admin_mode" :block="pageBlocked"
                             :text="'Редактировать группу'"/>
        </div>


      </div>

      <div class="col-8">
        <WordPanel :adminMode="admin_mode" :block="pageBlocked" :group="groups.selected" />
      </div>
    </div>

  </div>
</template>


<script>
  import axios from 'axios'
  import WordPanel from './linkcomponents/WordPanel'
  import RadioComponent from './linkcomponents/RadioComponent'
  import Selector from './linkcomponents/Selector'
  import DisengageableHref from "./linkcomponents/DisengageableHref";

  export default {
    name: 'LinkPage',
    components: {DisengageableHref, Selector, RadioComponent, WordPanel},

    data() {
      return {
        groups: {availableGroups: [], selected: null},
        admin_mode: false,
        pageBlocked: {value: false}
      }
    },

    created() {
      axios.get('http://localhost:8080/static/groups.json')
        .then(response => {
          this.groups.availableGroups = response.data
        })
        .catch(e => {
          console.log(e)
        })
    },

    methods: {

    }
  }
</script>


<style scoped>

  button {
    margin-bottom: 10px;
  }

  .container {
    margin-top: 10px;
  }

  .groupOptions {
    margin-top: 80px;
  }

</style>
