import ElProTable from './src'

/* istanbul ignore next */
ElProTable.install = function(Vue) {
  Vue.component(ElProTable.name, ElProTable)
}

export default ElProTable
