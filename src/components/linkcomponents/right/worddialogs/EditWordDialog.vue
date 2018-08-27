<template>

  <transition name="modal">
    <div class="modal-mask" v-show="value">

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
    props: ['value', 'item'],
    data() {
      return {
        editedRus : '',
        editedEng : ''
      }
    },
    methods: {
      close() {
        this.$emit('input', false )
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
        this.item.english = this.editedEng;
        this.item.russian = this.editedRus;
        this.close();
      }
    }
  }
</script>
