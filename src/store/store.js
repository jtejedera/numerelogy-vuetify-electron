import Vue from 'vue';
import Vuex from 'vuex';

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

import moduleDescriptions from "./descriptions/moduleDescriptions";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  getters,
  mutations,
  state,
  actions,  
  modules: {
    descripciones: moduleDescriptions
  },
  strict: process.env.NODE_ENV !== 'production'
});
