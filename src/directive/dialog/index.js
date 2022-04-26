import drag from './drag'

const install = function (Vue) {
  Vue.directive('el-drag-dialog', drag)
}

// eslint-disable-next-line no-undef
if (globalThis && globalThis.Vue) {
  // eslint-disable-next-line no-undef
  globalThis['el-drag-dialog'] = drag
  Vue.use(install) // eslint-disable-line
}

drag.install = install
export default drag
