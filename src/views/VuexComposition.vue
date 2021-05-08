<template>
   <p>{{ vuexData }}</p>
   <p>{{ changedData }}</p>
   <p>{{ state.count }}<sup>2</sup> = {{ getters.squareCount }}</p>
   <button @click="mutations.add">Mutation</button>
   <button @click="actions.changeCounter">Action</button>
   <button @click="mutateData">Mutate Data</button>
   <button @click="mutateDataAction">Mutate Data Action</button>
</template>

<script>
import comositionStore from '../comositionStore';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
   setup() {
      //Composition API global state
      const { state, mutations, getters, actions } = comositionStore;

      //VUEX
      const store = useStore();
      const vuexData = computed(() => store.state.vuexData);
      const changedData = computed(() => store.getters.changedData);

      const mutateData = () => store.commit('mutateData');
      const mutateDataAction = () => store.dispatch('mutateDataAction');

      return {
         actions,
         getters,
         mutations,
         state,
         vuexData,
         changedData,
         mutateData,
         mutateDataAction,
      };
   },
};
</script>
