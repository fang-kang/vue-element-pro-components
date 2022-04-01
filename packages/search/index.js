import Search from './src'

/* istanbul ignore next */
Search.install = function (Vue) {
  Vue.component(Search.name, Search)
}

export default Search
