import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/plugins/element";
import "@/plugins/fragment";
import VueElementProCompontents from "./";

Vue.use(VueElementProCompontents);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
