import CustomPagination from "./src/index";

/* istanbul ignore next */
CustomPagination.install = function (Vue) {
  Vue.component(CustomPagination.name, CustomPagination);
};

export default CustomPagination;
