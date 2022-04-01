export default {
  bind(el, binding, vnode) {
    const { value } = binding
    if (!value) {
      return
    }
    const dragDom = el.querySelector('.el-pro-dialog')
    const dialogHeaderEl = el.querySelector('.el-pro-dialog .el-dialog__header')
    dialogHeaderEl.style.cssText += ';cursor:move;user-select:none;'
    const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)
    dialogHeaderEl.onmousedown = (e) => {
      e.preventDefault()
      const disX = e.clientX - dialogHeaderEl.offsetLeft
      const disY = e.clientY - dialogHeaderEl.offsetTop

      const dragDomWidth = dragDom.offsetWidth
      const dragDomHeight = dragDom.offsetHeight

      const screenWidth = document.documentElement.clientWidth
      const screenHeight = document.documentElement.clientHeight

      const minDragDomLeft = dragDom.offsetLeft
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth

      const minDragDomTop = dragDom.offsetTop
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight

      const styleLeftStr = sty.left
      const styleTopStr = sty.top

      if (!styleLeftStr || !styleTopStr) return
      let styleLeft
      let styleTop

      // Format may be "##%" or "##px"
      if (styleLeftStr.includes('%')) {
        styleLeft = +screenWidth * (+styleLeftStr.replace(/%/g, '') / 100)
        styleTop = +screenHeight * (+styleTopStr.replace(/%/g, '') / 100)
      } else {
        styleLeft = +styleLeftStr.replace(/px/g, '')
        styleTop = +styleTopStr.replace(/px/g, '')
      }

      document.onmousemove = (e) => {
        e.preventDefault()
        let left = e.clientX - disX
        let top = e.clientY - disY

        // Handle edge cases
        if (-left > minDragDomLeft) {
          left = -minDragDomLeft
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft
        }
        if (-top > minDragDomTop) {
          top = -minDragDomTop
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop
        }

        // 移动当前元素
        dragDom.style.left = `${left + styleLeft}px`
        dragDom.style.top = `${top + styleTop}px`
      }

      document.onmouseup = (e) => {
        e.preventDefault()
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
