import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';

const state = reactive({
   count: 0,
});

const getters = reactive({
   squareCount: computed(() => state.count * state.count),
});

const mutations = {
   add() {
      state.count++;
   },
};

const actions = {
   changeCounter() {
      setTimeout(() => {
         mutations.add();
      }, 2000);
   },
};

export default { state, mutations, getters, actions };
