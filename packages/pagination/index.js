import Pagination from './src'

/* istanbul ignore next */
Pagination.install = function (Vue) {
  Vue.component(Pagination.name, Pagination)
}

export default Pagination
