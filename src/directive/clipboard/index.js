import Clipboard from './clipboard'

const install = function (Vue) {
  Vue.directive('Clipboard', Clipboard)
}

// eslint-disable-next-line no-undef
if (globalThis && globalThis.Vue) {
  // eslint-disable-next-line no-undef
  globalThis.clipboard = Clipboard
  Vue.use(install) // eslint-disable-line
}

Clipboard.install = install
export default Clipboard
