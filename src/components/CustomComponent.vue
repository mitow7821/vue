<template>
  <h4>{{ msg }}</h4>
  <h4>{{ newMsg }}</h4>
  <button @click="$emit('change-title', 'This is new message')">
    Change message
  </button>
  <slot name="text"><h4>default value</h4></slot>
  <slot name="slot"></slot>
</template>

<script>
export default {
  name: 'CustomComponent',
  props: {
    msg: {
      type: String,
      default: 'Default message'
    }
  },
  computed: {
    newMsg() {
      return 'Prop value ' + this.msg;
    }
  },
  emits: ['change-title']
};
</script>
