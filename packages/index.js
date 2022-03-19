import CustomDialog from "./CustomDialog";
import CustomForm, { types } from "./CustomForm";
import CustomPagination from "./CustomPagination";
import CustomSearch from "./CustomSearch";
import CustomTable from "./CustomTable";

const config = require("../package.json");
console.log(config);

const components = [
  CustomDialog,
  CustomForm,
  CustomPagination,
  CustomSearch,
  CustomTable,
];

const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export {
  types,
  install,
  CustomDialog,
  CustomForm,
  CustomPagination,
  CustomSearch,
  CustomTable,
};

export default {
  version: config.version,
  types,
  install,
  CustomDialog,
  CustomForm,
  CustomPagination,
  CustomSearch,
  CustomTable,
};
