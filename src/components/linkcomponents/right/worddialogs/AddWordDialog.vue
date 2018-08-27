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
                <input class="form-control center" maxlength="50" type="text" placeholder="english" v-model="eng"/>

                <input class="form-control center" maxlength="50" type="text" placeholder="русский" v-model="rus"/>
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
    name: "AddWordDialog",
    props: ['items', 'value', 'group'],
    data() {
      return {
        rus: '',
        eng: ''
      }
    },
    methods: {
      close() {
        this.$emit('input', false)
      },
      addWord() {
        if (this.rus === '' || this.eng === '') return
        // отправляем на сервер
        this.items.push({id: 100, russian: this.rus, english: this.eng})

        this.close();
        this.rus = ''
        this.eng = ''
      }
    }
  }
</script>
