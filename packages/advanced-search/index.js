import AdvancedSearch from './src'

/* istanbul ignore next */
AdvancedSearch.install = function(Vue) {
  Vue.component(AdvancedSearch.name, AdvancedSearch)
}

export default AdvancedSearch
