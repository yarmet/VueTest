<template>
  <div v-if="show.value" class="positionAbsolute form-inline">
    <div class="closeSymbol"><a href="javascript:void(0);" @click="closeWindow">&times;</a></div>

    <input class="form-control center" maxlength="50" type="text" placeholder="english" v-model="eng"/>

    <input class="form-control center" maxlength="50" type="text" placeholder="русский" v-model="rus"/>

    <button class="btn btn-danger center" @click="sendAddedWord">Добавить</button>
  </div>
</template>

<script>
  export default {
    name: "AddWordDialog",
    props: ['show', 'block', 'rows'],

    data() {
      return {
        rus: '',
        eng: ''
      }
    },

    methods: {
      sendAddedWord() {
        if (this.rus === '' || this.eng === '') return
        // отправляем на сервер

        this.rows.push({id: 100, russian: this.rus, english: this.eng})

        this.closeWindow()
      },

      closeWindow() {
        document.body.classList.remove('transparent');
        this.show.value = false;
        this.block.value = false;
        this.rus = ''
        this.eng = ''
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
