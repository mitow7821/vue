<template>
   <h4>{{ msg }}</h4>
   <h4>{{ newMsg }}</h4>
   <button @click="$emit('change-title', 'This is new message')">
      Change message
   </button>
   <slot name="text"><h4>default value</h4></slot>
   <slot name="slot" :msg="msg"></slot>
</template>

<script>
export default {
   name: 'CustomComponent',
   props: {
      msg: {
         type: String,
         default: 'Default message',
      },
   },
   computed: {
      newMsg() {
         return 'Prop value ' + this.msg;
      },
   },
   // While using kebab-case emit name, declare it below in both camel and kebab case to remove all warnings
   emits: ['changeTitle', 'change-title'],
};
</script>
