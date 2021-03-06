import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

import "../src/utils/fontawesome";
import "../src/utils/bootstrap";
import "../src/utils/formWizard";
import "../src/utils/toastr";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
