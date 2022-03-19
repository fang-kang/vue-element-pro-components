import CustomDialog from "./src/index";

/* istanbul ignore next */
CustomDialog.install = function (Vue) {
  Vue.component(CustomDialog.name, CustomDialog);
};

export default CustomDialog;
