<template>
  <div class="form-group">
    <label> {{text}}

      <select class="form-control" v-model="selectedItem" v-on:change="$emit('selected', selectedItem )">
        <option v-for="item in items" v-bind:key="item.id" :value="item">{{item[label]}}</option>
      </select>

    </label>
  </div>
</template>

<script>
  export default {
    name: 'Selector',
    props: {'items': Array, 'label': String, 'text': String},
    data() {
      return {
        selectedItem: null
      }
    }
  }
</script>


<style scoped>
</style>
