<template>

  <div v-if="show.value" class="positionAbsolute form-inline">
    <div class="closeSymbol"><a href="javascript:void(0);" @click="closeWindow">&times;</a></div>
    <button class="btn btn-danger" @click="deleteWord" >Удалить</button>
  </div>
</template>

<script>
  export default {
    name: "DeleteWordDialog",
    props: ['show', 'rowToDelete', 'rows', 'block'],

    methods: {
      deleteWord() {
        var index =  this.rows.indexOf(this.rowToDelete);
        if (index !== -1) this.rows.splice(index, 1);

        // так же нужно удалить с сервера!!!!!!

       this.closeWindow();
      },

      closeWindow() {
        document.body.classList.remove('transparent');
        this.show.value = false;
        this.block.value = false;
      }

    }
  }
</script>

<style scoped>

  .positionAbsolute {
    background: white;
    margin: 0;
    width: 210px;
    height: 80px;
    padding-left: 55px;
    position: absolute;
    border-radius: 4px;
    left: 0;
    right: 0;
  }

  .closeSymbol {
    right: -9px;
    top: -24px;
    position: absolute;
  }

  .closeSymbol > * {
    font-size: 4ch;
  }
</style>
