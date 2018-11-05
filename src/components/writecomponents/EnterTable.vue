<template>


  <table class="editTable">
    <tr>
      <th>Русский</th>
      <th>English</th>
    </tr>

    <tr v-for="word in words" :key="word.id">
      <td>{{word.russian}}</td>
      <td>


        <custom-input :word="word.english" />
          <!--<input type="text" maxlength="30" class="form-control" v-bind:class="{green : false}" @input="onValueUpdated($event.target.value, word.english)"  />-->
          <!--{{word.english}}-->

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

  .editTable td {
    border: 1px solid #cbcbcb;
    height: 12px;
    padding: 6px;
  }

</style>
