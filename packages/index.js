import CustomDialog from "./CustomDialog";
import CustomForm from "./CustomForm";
import CustomPagination from "./CustomPagination";
import CustomSearch from "./CustomSearch";
import CustomTable from "./CustomTable";

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

export default {
  version: "0.4.0",
  install,
  CustomDialog,
  CustomForm,
  CustomPagination,
  CustomSearch,
  CustomTable,
};
