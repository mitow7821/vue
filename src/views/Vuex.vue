<template>
  <p>{{ vuexData }}</p>
  <p>{{ changedData }}</p>
  <button @click="mutateData">Mutate Data</button>
  <button @click="mutateDataAction">Mutate Data Action</button>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
export default {
  computed: {
    // vuexData() {
    //   return this.$store.state.vuexData;
    // },
    // changedData() {
    //   return this.$store.getters.changedData;
    // }
    ...mapState(["vuexData"]),
    ...mapGetters(["changedData"])
  },
  methods: {
    // mutateData() {
    //   this.$store.commit("mutateData");
    // },
    // mutateDataAction() {
    //   this.$store.dispatch("mutateDataAction");
    // }
    ...mapMutations(["mutateData"]),
    ...mapActions(["mutateDataAction"])
  }
};
</script>
