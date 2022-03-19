import CustomSearch from "./src/index";

/* istanbul ignore next */
CustomSearch.install = function (Vue) {
  Vue.component(CustomSearch.name, CustomSearch);
};

export default CustomSearch;
