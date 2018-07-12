<template>

  <div class="form-group">
    <label> {{text}}

      <select class="form-control" v-model="selectedItem" :disabled="block.value" v-on:change="$emit('selected', selectedItem )">
        <option v-for="item in items" v-bind:key="item.id">{{item[label]}}</option>
      </select>

    </label>
  </div>
</template>

<script>
  export default {
    name: 'Selector',
    props: ['items', 'label', 'text', 'block'],
    data() {
      return{
        selectedItem: null
      }
    }
  }
</script>


<style scoped>
</style>
