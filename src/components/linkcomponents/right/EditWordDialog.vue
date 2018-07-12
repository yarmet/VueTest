<template>
  <div v-if="show.value" class="positionAbsolute form-inline">
    <div class="closeSymbol"><a href="javascript:void(0);" @click="closeWindow">&times;</a></div>

    <input class="form-control center" maxlength="50" type="text" v-bind:value="rowToEdit.russian"
           v-on:input="editedRus = $event.target.value"/>

    <input class="form-control center" maxlength="50" type="text" v-bind:value="rowToEdit.english"
           v-on:input="editedEng = $event.target.value"/>

    <button class="btn btn-danger center" @click="sendEditedWord">Отредактировать</button>
  </div>
</template>

<script>
  export default {
    name: "EditWorldDialog",
    props: ['rowToEdit', 'show', 'block'],
    data() {
      return {
        editedRus: '',
        editedEng: '',
      }

    },

    methods: {
      sendEditedWord() {

        if (this.editedRus === '') {
          this.editedRus = this.rowToEdit.russian;
        }

        if (this.editedEng === '') {
          this.editedEng = this.rowToEdit.english;
        }


        // отправляем изменное слово на сервер
        // если все ок, то сеттим в таблицу новые значения
        this.rowToEdit.english = this.editedEng
        this.rowToEdit.russian = this.editedRus

        this.closeWindow()
      },
      closeWindow() {
        document.body.classList.remove('transparent');
        this.show.value = false;
        this.block.value = false;
        this.editedRus = ''
        this.editedEng = ''
      }
    }

  }
</script>

<style scoped>
  .positionAbsolute {
    background: white;
    margin: 0;
    width: 280px;
    height: 150px;
    text-align: center;
    padding: 10px;
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

  .center {
    margin: auto;
  }

</style>
