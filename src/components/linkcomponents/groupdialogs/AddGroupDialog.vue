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
                <input class="form-control center" maxlength="50" type="text" placeholder="название группы"
                       v-model="groupName"/>
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-danger center" @click="addGroup">Добавить</button>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "AddGroupDialog",
    props: ['items', 'value'],
    data() {
      return {
        groupName: ''
      }
    },
    methods: {
      addGroup() {
        this.items.push({id: 100, name: this.groupName})
        // отправляем на сервер!
        this.close();
      },

      close() {
        this.$emit('input', false )
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
