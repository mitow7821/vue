<template>
   <h2>{{ title }}</h2>
   <h3 v-html="uppercaseTitle"></h3>

   <h1 :class="{ '--extend': count == 1 }">Counter: {{ count }}</h1>
   <button @click.once="add()">+1</button>
   <h5>{{ count ? 'hasCount' : 'noCount' }}</h5>
   <h4 v-if="count">Conditional rendering using v-if</h4>
   <h4 v-show="count">Conditional rendering using v-show</h4>

   <p :class="someText" ref="someText">{{ someText }}</p>
   <input type="text" v-model="someText" />

   <li v-for="(item, index) in array" :key="index">{{ item }}</li>

   <CustomComponent :msg="message" @changeTitle="message = $event">
      <template #text>
         <h4>default value shows when there is no template</h4>
      </template>
      <template #slot="{msg:prop}">Scoped slot data: {{ prop }}</template>
   </CustomComponent>

   <p v-colorful>Custom directives local/global</p>
</template>

<script>
// @ is an alias to /src
import { mymixin } from '@/components/mixins/mymixin';
export default {
   name: 'OptionsAPI',
   mixins: [mymixin],
   data() {
      return {
         title: 'Vue 3 Trash Course',
         count: 0,
         someText: '',
         array: ['Fist item', 'Second item', 'Last items'],
         message: 'Hello from parent component',
      };
   },

   computed: {
      uppercaseTitle() {
         return `<i>${this.title.toUpperCase()}</i>`;
      },
   },

   methods: {
      add() {
         this.count++;
      },
   },

   watch: {
      count(newValue, oldValue) {
         newValue > oldValue ? console.log(`Counter value = ${newValue}`) : '';
      },
   },

   updated() {
      this.$nextTick(() => {
         console.log(this.$refs.someText);
      });
      console.log('Data updated!');
   },

   directives: {
      colorful: {
         beforeMount(el) {
            el.style.color = '#eaa347';
         },
      },
   },
};
</script>

<style scoped lang="scss">
@import url('../styles/base.scss');
h2 {
   color: #222;
   &:hover {
      color: red;
   }
}
</style>
