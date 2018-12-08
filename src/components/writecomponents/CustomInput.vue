<template>

  <input type="text" maxlength="30" class="form-control" v-bind:class="{green : isGreen}" @input="onValueUpdated($event.target.value)"  />


</template>

<script>
    export default {
        name: "CustomInput",
        props : {'word': String},

      data: function () {
        return {
          isGreen : false
        }
      },

      methods: {
        onValueUpdated(enteredWord) {
          this.isGreen = enteredWord === this.word;
        }
      }

    }
</script>

<style scoped>

  .green{
    background-color: #c3fdce;
  }

  input {
    border: none
  }

</style>
