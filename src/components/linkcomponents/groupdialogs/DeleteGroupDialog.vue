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
              <button class="btn btn-danger" @click="deleteWord">Удалить</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>


<script>
  export default {
    name: "DeleteGroupDialog",
    props: ['value', 'items', 'item'],
    methods: {
      deleteWord() {
        let index =  this.items.indexOf(this.item);
        if (index !== -1){
          this.items.splice(index, 1);
        }
        this.close()
      },
      close() {
        this.$emit('input', false )
      },
    }
  }
</script>
