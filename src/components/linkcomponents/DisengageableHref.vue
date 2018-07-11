<template>
  <p class="textP" v-if="block.value" >{{text}}</p>
  <a href="#" @click="$emit('action')"  v-else >{{text}} </a>
</template>

<script>
  export default {
    name: "CustomHref",
    props:['text', 'block'],
  }
</script>

<style scoped>
.textP {
  margin: 0;
}
</style>
