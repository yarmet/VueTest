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
