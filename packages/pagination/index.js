import ElProPagination from './src'

/* istanbul ignore next */
ElProPagination.install = function(Vue) {
  Vue.component(ElProPagination.name, ElProPagination)
}

export default ElProPagination
