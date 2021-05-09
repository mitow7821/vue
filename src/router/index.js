import { createRouter, createWebHistory } from 'vue-router';
import OptionsAPI from '../views/OptionsAPI.vue';

const routes = [
   {
      path: '/',
      name: 'OptionsAPI',
      component: OptionsAPI,
   },
   {
      path: '/composition',
      name: 'CompositionAPI',
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(
            /* webpackChunkName: "compositionApi" */ '../views/CompostionAPI.vue'
         ),
   },
   {
      path: '/vuex',
      name: 'Vuex',
      component: () =>
         import(/* webpackChunkName: "vuex" */ '../views/Vuex.vue'),
   },
   {
      path: '/vuex-composition',
      name: 'VuexComposition',
      component: () =>
         import(/* webpackChunkName: "vuex" */ '../views/VuexComposition.vue'),
   },
   {
      path: '/validation',
      name: 'Validation',
      component: () =>
         import(/* webpackChunkName: "validation" */ '../views/Validation.vue'),
   },
   {
      path: '/request',
      name: 'Request',
      component: () =>
         import(/* webpackChunkName: "request" */ '../views/Request.vue'),
   },
   {
      path: '/render',
      name: 'Render',
      component: () =>
         import(/* webpackChunkName: "render" */ '../views/Render.vue'),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
