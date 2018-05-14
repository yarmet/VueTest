<template>
  <div class="row">
    <div class="col">

      <table class="linkTable" v-if="selectedLang.localeCompare('english')">
        <thead style="font-weight: bold">
        <td>english</td>
        <td>русский</td>
        </thead>
        <tr v-for="row in rows" :key="row.id">
          <td>{{row.english}}</td>
          <hidden-td :text="row.russian" />
        </tr>
      </table>

      <table v-else class="linkTable">
        <thead style="font-weight: bold">
        <td>русский</td>
        <td>english</td>
        </thead>
        <tr v-for="row in rows" :key="row.id">
          <td>{{row.russian}}</td>
          <hidden-td :text="row.english" />
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
import HiddenTd from './HiddenTd'
export default {
  name: 'LinkTable',
  components: {HiddenTd},
  props: ['rows', 'selectedLang']
}

</script>

<style scoped>

</style>
