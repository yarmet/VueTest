<template>

  <transition name="modal">
    <div class="modal-mask" v-show="show.value">

      <div class="modal-wrapper">

        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <a href="javascript:void(0);" @click="close">закрыть</a>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div>
                <input class="form-control center" maxlength="50" type="text" placeholder="english"
                       v-bind:value="item.english" v-on:input="editedEng = $event.target.value" />

                <input class="form-control center" maxlength="50" type="text" placeholder="русский"
                       v-bind:value="item.russian" v-on:input="editedRus = $event.target.value" />
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-danger center" @click="addWord">Добавить</button>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "EditWordDialog",
    props: ['show', 'item'],
    data() {
      return {
        editedRus : '',
        editedEng : ''
      }
    },
    methods: {
      close() {
        this.show.value = false;
      },
      addWord() {

        if (this.editedRus === '') {
          this.editedRus = this.item.russian
        }
        if (this.editedEng === '') {
          this.editedEng = this.item.english
        }
        // отправляем изменное слово на сервер

        // если все ок, то сеттим в таблицу новые значения
        this.item.english = this.editedEng
        this.item.russian = this.editedRus
        this.close();
      }
    }
  }
</script>


<style scoped>

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 5px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header {
    padding: 7px;
    display: block;
    text-align: right;
  }

  .modal-body {
    padding: 0;
  }

  .modal-footer {
    padding: 7px;
    display: block;

  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
