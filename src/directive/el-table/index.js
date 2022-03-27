import adaptive from './adaptive'

const install = function(Vue) {
  Vue.directive('adaptive', adaptive)
}

if (globalThis && globalThis.Vue) {
  globalThis['adaptive'] = adaptive
  Vue.use(install) // eslint-disable-line
}

adaptive.install = install
export default adaptive
