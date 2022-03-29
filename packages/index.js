import Dialog from './dialog'
import Form, { types } from './form'
import Pagination from './pagination'
import Search from './search'
import Table from './table'
import AdvancedSearch from './advanced-search'
import Drawer from './drawer'
import * as utils from 'vue-element-pro-components/src/utils'

import { version } from '../package.json'

const components = [Dialog, Form, Pagination, Search, Table, AdvancedSearch, Drawer]

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
  Dialog,
  Form,
  Pagination,
  Search,
  Table,
  AdvancedSearch,
  Drawer
}

export { types, utils }
