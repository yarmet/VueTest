<template>
  <div>
    <table class="linkTable">
      <thead style="font-weight: bold">
      <td>{{col1}}</td>
      <td>{{col2}}</td>

      <td v-if="adminMode" colspan="2">
        <DisengageableHref :text="'Добавить'" :block="block" @action="$emit('addWord')" />
      </td>
      </thead>

      <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td>{{row[col1]}}</td>

        <hidden-td :text="row[col2]" :block="block"/>

        <td v-if="adminMode">
          <DisengageableHref :text="'ред.'" :block="block" @action="$emit('editWord', row)"/>
        </td>

        <td v-if="adminMode">
          <DisengageableHref :text="'Уд.'" :block="block" @action="$emit('removeWord', row)"/>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

  import HiddenTd from './HiddenTd'
  import DisengageableHref from './DisengageableHref';

  export default {
    components: {HiddenTd, DisengageableHref},
    name: "CTable",
    props: ['rows', 'col1', 'col2', 'adminMode', 'block']
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
    width: 12px;
    padding: 6px;
  }

</style>
