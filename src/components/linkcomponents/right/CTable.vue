<template>
  <div>
    <table class="linkTable">
      <thead style="font-weight: bold">
      <td>{{col1}}</td>
      <td>{{col2}}</td>
      </thead>

      <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td>{{row[col1]}}</td>
        <hidden-td :text="row[col2]"/>
      </tr>
      </tbody>

    </table>

  </div>
</template>

<script>

  import HiddenTd from './HiddenTd'

  export default {
    components: {HiddenTd},
    name: "CTable",
    props: {'rows': Array, 'col1': String, 'col2': String}
  }
</script>

<style scoped>

  .linkTable {
    margin: auto;
    border-collapse: collapse;
    background-color: white;
  }

  .linkTable td {
    border: 1px solid #cbcbcb;
    height: 12px;
    padding: 6px;
  }

</style>
