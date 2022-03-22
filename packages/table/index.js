import ElProTable from "./src/index";

/* istanbul ignore next */
ElProTable.install = function (Vue) {
  Vue.component(ElProTable.name, ElProTable);
};

export default ElProTable;
