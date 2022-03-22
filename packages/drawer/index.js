import ElProDrawer from './src'

/* istanbul ignore next */
ElProDrawer.install = function(Vue) {
  Vue.component(ElProDrawer.name, ElProDrawer)
}

export default ElProDrawer
