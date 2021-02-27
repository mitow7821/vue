import { createStore } from "vuex";

export default createStore({
  //State is just a data
  state: {
    vuexData: "Im data from the vuex store"
  },
  //Getters are like computed properties
  getters: {
    changedData: state => {
      return "Change: " + state.vuexData.toUpperCase();
    }
  },
  //Mutations are like methods
  mutations: {
    mutateData: state => {
      state.vuexData = "Im new data";
    },
    mutateDataAction: state => {
      state.vuexData = "New data for actions";
    }
  },
  //Actions are used for async methods
  actions: {
    mutateDataAction: context => {
      setTimeout(() => {
        context.commit("mutateDataAction");
      }, 2000);
    }
  }
});
