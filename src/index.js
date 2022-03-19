import CustomDialog from "@/components/CustomDialog";
import CustomForm from "@/components/CustomForm";
import CustomPagination from "@/components/CustomPagination";
import CustomSearch from "@/components/CustomSearch";
import CustomTable from "@/components/CustomTable";

CustomDialog.install = function (Vue) {
  Vue.component(CustomDialog.name, CustomDialog);
};

CustomForm.install = function (Vue) {
  Vue.component(CustomForm.name, CustomForm);
};

CustomPagination.install = function (Vue) {
  Vue.component(CustomPagination.name, CustomPagination);
};

CustomSearch.install = function (Vue) {
  Vue.component(CustomSearch.name, CustomSearch);
};

CustomTable.install = function (Vue) {
  Vue.component(CustomSearch.name, CustomTable);
};

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
  install,
  CustomDialog,
  CustomForm,
  CustomPagination,
  CustomSearch,
  CustomTable,
};

export default {
  install,
  CustomDialog,
  CustomForm,
  CustomPagination,
  CustomSearch,
  CustomTable,
};
