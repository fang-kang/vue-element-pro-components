import ElProSearch from './src'

/* istanbul ignore next */
ElProSearch.install = function(Vue) {
  Vue.component(ElProSearch.name, ElProSearch)
}

export default ElProSearch
