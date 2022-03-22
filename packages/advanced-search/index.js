import ElProAdvancedSearch from "./src/index";

/* istanbul ignore next */
ElProAdvancedSearch.install = function (Vue) {
  Vue.component(ElProAdvancedSearch.name, ElProAdvancedSearch);
};

export default ElProAdvancedSearch;
