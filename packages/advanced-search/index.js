import ElProAdvancedSearch from './src'

/* istanbul ignore next */
ElProAdvancedSearch.install = function(Vue) {
  Vue.component(ElProAdvancedSearch.name, ElProAdvancedSearch)
}

export default ElProAdvancedSearch
