import ElProDialog from './src'

/* istanbul ignore next */
ElProDialog.install = function(Vue) {
  Vue.component(ElProDialog.name, ElProDialog)
}

export default ElProDialog
