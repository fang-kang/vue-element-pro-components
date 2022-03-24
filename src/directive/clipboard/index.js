import Clipboard from './clipboard'

const install = function(Vue) {
  Vue.directive('Clipboard', Clipboard)
}

if (globalThis && globalThis.Vue) {
  globalThis.clipboard = Clipboard
  Vue.use(install) // eslint-disable-line
}

Clipboard.install = install
export default Clipboard
