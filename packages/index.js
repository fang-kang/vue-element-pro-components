import ElProDialog from './dialog'
import ElProForm, { types } from './form'
import ElProPagination from './pagination'
import ElProSearch from './search'
import ElProTable from './table'
import ElProAdvancedSearch from './advanced-search'
import ElProDrawer from './drawer'
import * as utils from 'src/utils'

import { version } from '../package.json'

const components = [
  ElProDialog,
  ElProForm,
  ElProPagination,
  ElProSearch,
  ElProTable,
  ElProAdvancedSearch,
  ElProDrawer
]

const install = function(Vue) {
  if (install.installed) return
  install.installed = true
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  types,
  utils,
  install,
  ElProDialog,
  ElProForm,
  ElProPagination,
  ElProSearch,
  ElProTable,
  ElProAdvancedSearch,
  ElProDrawer
}
