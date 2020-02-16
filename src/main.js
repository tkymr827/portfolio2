import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import VueCarousel from "vue-carousel";

Vue.use(VueScrollTo);
Vue.use(VueCarousel);

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
