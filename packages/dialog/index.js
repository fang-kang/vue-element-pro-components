import ElProDialog from "./src/index";

/* istanbul ignore next */
ElProDialog.install = function (Vue) {
  Vue.component(ElProDialog.name, ElProDialog);
};

export default ElProDialog;
