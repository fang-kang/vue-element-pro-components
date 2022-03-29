import Form from './src'
import { types } from './src/type'

/* istanbul ignore next */
Form.install = function(Vue) {
  Vue.component(Form.name, Form)
}
export { types }
export default Form
