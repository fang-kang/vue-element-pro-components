import CustomDialog from "@/components/CustomDialog";

CustomDialog.install = function (Vue) {
  Vue.component(CustomDialog.name, CustomDialog);
};

const components = [CustomDialog];

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

export { install, CustomDialog };

export default {
  install,
  CustomDialog,
};
