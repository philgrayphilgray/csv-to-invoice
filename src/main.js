import "@babel/polyfill";
import Vue from "vue";

import "./plugins/vuetify";
import App from "./App.vue";

import "./main.styl";
import store from "./store";
import dateFilter from "./filters/date";
Vue.config.productionTip = false;

Vue.filter("date", dateFilter);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
