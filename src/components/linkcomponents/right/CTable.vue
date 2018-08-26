<template>
  <div>
    <table class="linkTable">
      <thead style="font-weight: bold">
      <td>{{col1}}</td>
      <td>{{col2}}</td>

      <td v-if="adminMode" colspan="2">
        <a href="#" @click="$emit('addWord')">Добавить</a>
      </td>
      </thead>

      <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td>{{row[col1]}}</td>

        <hidden-td :text="row[col2]"/>

        <td v-if="adminMode">
          <a href="#" @click="$emit('editWord', row)">ред.</a>
        </td>

        <td v-if="adminMode">
          <a href="#" @click="$emit('removeWord', row)">Уд.</a>
        </td>
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
    props: {'rows': Array, 'col1': String, 'col2': String, 'adminMode': Boolean}
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
