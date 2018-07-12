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
        <radio-component :languages="availableLanguages" :block="pageBlocked"/>
        <button class="btn btn-dark" @click="loadWords()" :disabled="pageBlocked.value">загрузить</button>
        <link-table :rows="rows" :selectedLang="availableLanguages.selected" :adminMode="admin_mode"
                    :block="pageBlocked"/>
      </div>
    </div>

  </div>
</template>


<script>
  import axios from 'axios'
  import LinkTable from './linkcomponents/LinkTable'
  import RadioComponent from './linkcomponents/RadioComponent'
  import Selector from './linkcomponents/Selector'
  import DisengageableHref from "./linkcomponents/DisengageableHref";

  export default {
    name: 'LinkPage',
    components: {DisengageableHref, Selector, RadioComponent, LinkTable},

    data() {
      return {
        rows: [],
        groups: {availableGroups: [], selected: null},
        admin_mode: false,
        pageBlocked: {value: false},
        availableLanguages: {allLanguages: ['русский', 'english'], selected: 'english'}
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

      loadWords() {
        if (this.groups.selected === null) return
        axios.get('http://localhost:8080/static/words.json')
          .then(response => {
            this.rows = response.data
          })
          .catch(e => {
            console.log(e)
          })
      }

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
