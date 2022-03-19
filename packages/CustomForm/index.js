import CustomForm from "./src/index";
import { types } from "./src/type";

/* istanbul ignore next */
CustomForm.install = function (Vue) {
  Vue.component(CustomForm.name, CustomForm);
};
export { types };
export default CustomForm;
