<template>
  <div class="container">
    <group-selector />
    <button class="btn btn-dark" v-on:click="loadWords()">загрузить</button>
    <radio-component :languages="availableLanguages" @callback="radioClicked" />
    <link-table :rows="rows" :selectedLang="availableLanguages.selectedLang" />
  </div>
</template>

<script>
import axios from 'axios'
import LinkTable from './linkcomponents/LinkTable'
import RadioComponent from './linkcomponents/RadioComponent'
import GroupSelector from './linkcomponents/GroupSelector'

export default {
  name: 'LinkPage',
  components: {GroupSelector, RadioComponent, LinkTable},

  data () {
    return {
      rows: [],
      availableLanguages: {allLanguages: ['русский', 'english'], selectedLang: 'english'}
    }
  },
  created () {
  },
  methods: {
    radioClicked (v) {
      this.availableLanguages.selectedLang = v
    },
    loadWords () {
      axios.get('http://localhost:8080/static/words.json')
        .then(response => {
          this.rows = response.data
        }).catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
