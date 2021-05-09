<template>
   <h4>{{ msg }}</h4>
   <h4>{{ newMsg }}</h4>
   <button @click="$emit('change-title', 'This is new message')">
      Change message
   </button>
   <slot name="text"><h4>default value</h4></slot>
   <slot name="slot"></slot>
   <h2>{{ parentData.someText }}</h2>
</template>

<script>
import { computed, inject } from 'vue';
export default {
   name: 'CompositionComponent',
   props: {
      msg: {
         type: String,
         default: 'Default message',
      },
   },
   // While using kebab-case emit name, declare it below in both camel and kebab case to remove all warnings
   emits: ['change-title', 'changeTitle'],
   setup(props) {
      const parentData = inject('data');
      const newMsg = computed(() => 'Prop value ' + props.msg);
      return {
         newMsg,
         parentData,
      };
   },
};
</script>
