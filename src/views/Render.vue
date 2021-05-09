<script>
import { h } from '@vue/runtime-core';
export default {
   render() {
      return h(
         'div',
         { onClick: $event => console.log($event.target), class: this.data },
         h('h1', { class: 'hellp' }, 'Some text')
      );

      //    Vnodes must be unique, if u want to duplicate some of them use this mehod:
      //   return h(
      //      'div',
      //      Array.from({ length: 10 }).map(() => {
      //         return h('p', 'hi');
      //      })
      //   );

      //    Using  JSX
      //   return (
      //      <div onClick={$event => console.log($event.target)} className={this.data}>
      //         <h1 class="hellp">Some text</h1>
      //      </div>
      //   );
   },
   data() {
      return {
         data: 'jsx clasname',
      };
   },
};
</script>
