import ElProSearch from "./src/index";

/* istanbul ignore next */
ElProSearch.install = function (Vue) {
  Vue.component(ElProSearch.name, ElProSearch);
};

export default ElProSearch;
