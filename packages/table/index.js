import Table from './src'

/* istanbul ignore next */
Table.install = function (Vue) {
  Vue.component(Table.name, Table)
}

export default Table
