import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    invoice: null
  },
  mutations: {
    setInvoice(state, payload) {
      state.invoice = payload;
    }
  },
  actions: {
    setInvoice({ commit }, payload) {
      commit("setInvoice", payload);
    }
  },
  getters: {
    invoice(state) {
      return state.invoice;
    },
    totalHours(state, getters) {
      if (getters.invoice) {
        return getters.invoice
          .reduce((acc, currentValue) => acc + Number(currentValue.hours), 0)
          .toFixed(2);
      }
    },
    totalCost(state, getters) {
      if (getters.invoice) {
        return getters.invoice.reduce(
          (acc, currentValue) => acc + Number(currentValue.cost),
          0
        );
      }
    }
  }
});
