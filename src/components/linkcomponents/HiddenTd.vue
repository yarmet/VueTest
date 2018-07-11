<template>

  <td v-if="hidden === true" @click="hidden = false">
    <DisengageableHref :text="'Показать'" :block="block"/>
  </td>

  <td v-else>
    {{text}}
  </td>

</template>

<script>

  import DisengageableHref from './DisengageableHref';

  export default {
    name: 'HiddenTd',
    components: {DisengageableHref},

    data: function () {
      return {
        hidden: true
      }
    },
    props: ['text', 'block']
  }
</script>

<style scoped>

</style>
