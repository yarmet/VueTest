<template>

  <div>
    <select class="custom-select-sm" v-model="items.selected">
      <option v-for="item in items.availableGroups" v-bind:key="item" v-bind:value="item">{{item[label]}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Selector',
  props: ['items', 'label']
}

</script>

<style scoped>

</style>
