<template>
  <div class="container">
    <Selector :label="'name'" :items="groups" />
    <button class="btn btn-dark" v-on:click="loadWords()">загрузить</button>
    <radio-component :languages="availableLanguages"  />
    <link-table :rows="rows" :selectedLang="availableLanguages.selected" />
  </div>
</template>

<script>
import axios from 'axios'
import LinkTable from './linkcomponents/LinkTable'
import RadioComponent from './linkcomponents/RadioComponent'
import Selector from './linkcomponents/Selector'

export default {
  name: 'LinkPage',
  components: {Selector, RadioComponent, LinkTable},

  data () {
    return {
      rows: [],
      groups: { availableGroups: ['a', 'bb', 'ccc', 'dddd'], selected: null },
      availableLanguages: {allLanguages: ['русский', 'english'], selected: 'english'}
    }
  },

  created () {
    axios.get('http://localhost:8080/static/groups.json')
      .then(response => { this.groups.availableGroups = response.data })
      .catch(e => { console.log(e) })
  },

  methods: {

    loadWords () {
      if (this.groups.selected === null) return

      axios.get('http://localhost:8080/static/words.json')
        .then(response => { this.rows = response.data })
        .catch(e => { console.log(e) })
    }

  }
}
</script>
