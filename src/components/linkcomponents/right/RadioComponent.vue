<template>
  <div>
    <label class="radio-inline" v-for="lang in languages.allLanguages" :key="lang">

      <input type="radio" name="languageRadio"
             @click="languages.selected = lang"
             value="lang"
             :checked="lang === languages.selected" />

      {{lang}}</label>

  </div>
</template>

<script>
export default {
  name: 'RadioComponent',
  props: ['languages']
}
</script>

<style scoped>

  label {
    margin: 10px;
  }

</style>
