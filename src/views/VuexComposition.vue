<template>
   <p>{{ vuexData }}</p>
   <p>{{ changedData }}</p>
   <button @click="mutateData">Mutate Data</button>
   <button @click="mutateDataAction">Mutate Data Action</button>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
   setup() {
      const store = useStore();
      const vuexData = computed(() => store.state.vuexData);
      const changedData = computed(() => store.getters.changedData);

      const mutateData = () => store.commit('mutateData');
      const mutateDataAction = () => store.dispatch('mutateDataAction');

      return {
         vuexData,
         changedData,
         mutateData,
         mutateDataAction,
      };
   },
};
</script>
