import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isFirebaseInit: false
  },
  mutations: {
    setFirebaseStatus: (state, payload) => {
      state.isFirebaseInit = payload;
    }
  }
});

export default store;
