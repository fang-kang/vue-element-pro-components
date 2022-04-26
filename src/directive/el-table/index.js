import adaptive from './adaptive'

const install = function (Vue) {
  Vue.directive('adaptive', adaptive)
}

// eslint-disable-next-line no-undef
if (globalThis && globalThis.Vue) {
  // eslint-disable-next-line no-undef
  globalThis['adaptive'] = adaptive
  Vue.use(install) // eslint-disable-line
}

adaptive.install = install
export default adaptive
