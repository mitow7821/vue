<template>
   <p>{{ vuexData }}</p>
   <p>{{ changedData }}</p>
   <p @click="moduleMutation">{{ moduleData }}</p>
   <button @click="mutateData">Mutate Data</button>
   <button @click="mutateDataAction">Mutate Data Action</button>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';
export default {
   computed: {
      // vuexData() {
      //   return this.$store.state.vuexData;
      // },
      // changedData() {
      //   return this.$store.getters.changedData;
      // }
      ...mapState(['vuexData', 'data']),
      ...mapState({
         moduleData: state => state.module.data,
      }),
      ...mapGetters(['changedData']),
   },
   methods: {
      // mutateData() {
      //   this.$store.commit("mutateData");
      // },
      // mutateDataAction() {
      //   this.$store.dispatch("mutateDataAction");
      // }
      ...mapMutations(['mutateData', 'moduleMutation']),
      ...mapActions(['mutateDataAction']),
   },
};
</script>
