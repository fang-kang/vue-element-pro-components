import { types } from 'vue-element-pro-components/packages/form/src/type'
import { getArrayValue } from 'vue-element-pro-components/src/utils'

export function getTagOptions(column, row) {
  let options = {}
  const { tagOptions } = column
  if (typeof tagOptions === 'string') {
    options.type = tagOptions
  }
  if (typeof tagOptions === 'object') {
    options = tagOptions
  } else if (typeof tagOptions === 'function') {
    options = tagOptions(row) || {}
  }
  return {
    ...options
  }
}

export function formatShow(column, row, scope) {
  console.log(column, 'column')
  console.log(row, 'row')
  console.log(scope, 'scope')
  const { key, showFormat, type, valueName, labelName } = column || {}
  if (showFormat && typeof showFormat === 'function') {
    return showFormat(row[key], row, scope)
  }
  if ([types.select, types.checkBox, types.radio].includes(type)) {
    let options = []
    if (Array.isArray(column.options)) {
      options = column.options
    } else if (typeof column.options === 'function') {
      options = column.options(row)
    }
    if (type === types.checkBox) {
      let arr = []
      if (Array.isArray(row[key]) && row[key].length) {
        arr = row[key].map((item) => {
          return String(item)
        })
      }
      let text = ''
      options.map((item) => {
        if (arr.includes(String(item[valueName || 'value']))) {
          text += item[labelName || 'name'] + ','
        }
      })
      text = text.substring(0, text.length - 1)
      return text
    } else {
      return getArrayValue(options, row[key], valueName || 'value', labelName || 'name')
    }
  }
  return row[key] || ''
}

export const clipboardSuccess = () => {
  this.$message({
    message: '复制成功',
    type: 'success',
    duration: 1500
  })
}
