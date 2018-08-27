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
                <input class="form-control center" maxlength="50" type="text" placeholder="новое название группы"
                       v-bind:value="item.name" v-on:input="newName = $event.target.value" />
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-danger center" @click="editGroup">Изменить</button>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "EditGroupdialog",
    props: ['item', 'value'],
    data() {
      return {
        newName: ''
      }
    },
    methods: {
      close() {
        this.$emit('input', false )
      },
      editGroup() {
        if (this.newName === '') {
          this.newName = this.item.name
        }
        // отправляем изменное слово на сервер

        // если все ок, то сеттим в таблицу новые значения
        this.item.name = this.newName;

        this.close();
      }
    }
  }
</script>
