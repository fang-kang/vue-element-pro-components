import ElProForm from './src'
import { types } from './src/type'

/* istanbul ignore next */
ElProForm.install = function(Vue) {
  Vue.component(ElProForm.name, ElProForm)
}
export { types }
export default ElProForm
