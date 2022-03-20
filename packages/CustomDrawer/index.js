import CustomDrawer from "./src/index";

/* istanbul ignore next */
CustomDrawer.install = function (Vue) {
  Vue.component(CustomDrawer.name, CustomDrawer);
};

export default CustomDrawer;
