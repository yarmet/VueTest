<template>

  <div class="form-group">
    <label> {{text}}

    <select class="form-control" v-model="items.selected" :disabled="block.value" >
      <option v-for="item in items.availableGroups" v-bind:key="item.id">{{item[label]}}</option>
    </select>

    </label>
  </div>
</template>

<script>
export default {
  name: 'Selector',
  props: ['items', 'label', 'text', 'block']
}
</script>



<style scoped>



</style>
