<template>
  <div>
    <label class="radio-inline" v-for="lang in languages.allLanguages" :key="lang">

      <input type="radio" name="languageRadio"
             @click="clicked(lang)" value="lang" :checked="lang === languages.selectedLang"/> {{lang}}

    </label>
  </div>
</template>

<script>
export default {
  name: 'RadioComponent',
  props: ['languages'],

  data: function () {
    return {
      language: 'english'
    }
  },

  methods: {
    clicked (selectedLang) {
      this.$emit('callback', selectedLang)
    }
  }
}
</script>

<style scoped>

</style>
