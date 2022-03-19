import CustomTable from "./src/index";

/* istanbul ignore next */
CustomTable.install = function (Vue) {
  Vue.component(CustomTable.name, CustomTable);
};

export default CustomTable;
