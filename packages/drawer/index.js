import Drawer from './src'

/* istanbul ignore next */
Drawer.install = function(Vue) {
  Vue.component(Drawer.name, Drawer)
}

export default Drawer
