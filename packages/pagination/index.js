import ElProPagination from "./src/index";

/* istanbul ignore next */
ElProPagination.install = function (Vue) {
  Vue.component(ElProPagination.name, ElProPagination);
};

export default ElProPagination;
