<template>

  <table class="editTable">
    <tr>
      <th>Русский</th>
      <th>English</th>
    </tr>

    <tr v-for="word in words" :key="word.id">
      <td>{{word.russian}}</td>
      <td>
        <CustomInput :word="word.english"/>
      </td>
    </tr>

  </table>
</template>

<script>
  import CustomInput from "./CustomInput";

  export default {
    name: "EnterTable",
    components: {CustomInput},
    props: {'words': Array},

    methods: {}

  }
</script>

<style scoped>
  .editTable {
    margin: auto;
    border-collapse: collapse;
    background-color: white;
  }

  .editTable td,  .editTable th {
    border: 1px solid #cbcbcb;
    height: 12px;
    /*padding: 6px;*/



  }

</style>
