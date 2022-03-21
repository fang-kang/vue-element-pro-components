import CustomDialog from "./CustomDialog";
import CustomForm, { types } from "./CustomForm";
import CustomPagination from "./CustomPagination";
import CustomSearch from "./CustomSearch";
import CustomTable from "./CustomTable";
import CustomAdvancedSearch from "./CustomAdvancedSearch";
import CustomDrawer from "./CustomDrawer";
import * as utils from "/src/utils";

const config = require("../package.json");

const components = [
  CustomDialog,
  CustomForm,
  CustomPagination,
  CustomSearch,
  CustomTable,
  CustomAdvancedSearch,
  CustomDrawer,
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

export default {
  version: config.version,
  types,
  utils,
  install,
  CustomDialog,
  CustomForm,
  CustomPagination,
  CustomSearch,
  CustomTable,
  CustomAdvancedSearch,
  CustomDrawer,
};
