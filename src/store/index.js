import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import Drivers from "./modules/driver/driver";
Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "vuex",
  storage: localStorage,
  reducer: state => ({
    Driver: state.Driver
  })
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Driver: Drivers
  },
  plugins: [vuexPersist.plugin]
});
