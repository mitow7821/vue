import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import CustomComponent from '@/components/CustomComponent.vue';
import axios from 'axios';
// import VueAxios from 'vue-axios';

window.axios = axios;

createApp(App)
   .use(store)
   .use(router)
   // .use(VueAxios, axios)
   .component('CustomComponent', CustomComponent)
   .directive('colorful', {
      beforeMount(el) {
         el.style.color = '#eaa347';
      },
   })
   .mount('#app');
