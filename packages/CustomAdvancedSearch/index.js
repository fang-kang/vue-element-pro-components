import CustomAdvancedSearch from "./src/index";

/* istanbul ignore next */
CustomAdvancedSearch.install = function (Vue) {
  Vue.component(CustomAdvancedSearch.name, CustomAdvancedSearch);
};

export default CustomAdvancedSearch;
