import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'

/**
 * How to use
 * <el-table height="100px" v-el-height-adaptive-table="{bottomOffset: 30}">...</el-table>
 * el-table height is must be set
 * bottomOffset: 30(default)   // The height of the table from the bottom of the page.
 */

const doResize = (el, binding, vnode) => {
  const { componentInstance: $table } = vnode

  const { value } = binding

  console.log(value,'value');

  if (!value.autoHeight) {
    return false
  }

  if (!$table.height) {
    return false
  }
  const bottomOffset = (value && value.bottomOffset) || 30

  if (!$table) return

  const height = window.innerHeight - el.getBoundingClientRect().top - bottomOffset
  $table.layout.setHeight(height)
  $table.doLayout()
}

export default {
  bind(el, binding, vnode) {
    console.log(1)
    el.resizeListener = () => {
      doResize(el, binding, vnode)
    }
    // parameter 1 is must be "Element" type
    addResizeListener(window.document.body, el.resizeListener)
  },
  inserted(el, binding, vnode) {
    console.log(2)
    doResize(el, binding, vnode)
  },
  unbind(el) {
    console.log(3)
    removeResizeListener(window.document.body, el.resizeListener)
  }
}
